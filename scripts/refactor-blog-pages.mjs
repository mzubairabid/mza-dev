/**
 * Wraps static blog post pages with BlogLayout.
 * Run: node scripts/refactor-blog-pages.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, "../app/(marketing)/blog");

const SKIP = new Set(["page.tsx", "[slug]"]);

/** Patterns to strip from static pages once BlogLayout handles them */
const STRIP_PATTERNS = [
  // Back button block
  /\s*\{\/\*\s*Back Button\s*\*\/\}[\s\S]*?<\/div>\s*/,
  /\s*\{\/\*\s*Back to Blog Button\s*\*\/\}[\s\S]*?<\/div>\s*/,
  // Standard header block (article pages)
  /\s*\{\/\*\s*Header\s*\*\/\}[\s\S]*?<\/header>\s*/,
  // Hero / featured image (BlogLayout renders from post.image)
  /\s*\{\/\*\s*Hero[\s\S]*?<\/div>\s*(?=\s*\{\/\*\s*Main)/,
  /\s*\{\/\*\s*Featured Image\s*\*\/\}[\s\S]*?<\/div>\s*/,
  // Author footer variants
  /\s*\{\/\*\s*Author Footer\s*\*\/\}[\s\S]*?<\/footer>\s*/,
  /\s*\{\/\*\s*Author Bio Box\s*\*\/\}[\s\S]*?<\/div>\s*(?=\s*<\/div>\s*<\/article>)/,
  /\s*\{\/\*\s*Author Bio Widget\s*\*\/\}[\s\S]*?<\/div>\s*(?=\s*\{\/\*\s*Recent)/,
  /\s*\{\/\*\s*Author \/ Developer Widget\s*\*\/\}[\s\S]*?<\/div>\s*/,
];

function getSlugFromDir(dirPath) {
  return dirPath.split(/[/\\]/).pop();
}

function ensureImports(content) {
  const layoutImport = `import BlogLayout, { BlogPostBody } from "@/components/layout/blog-layout";\nimport { getPostBySlug } from "@/lib/blog-posts";\n\nconst post = getPostBySlug("${""}")!;\n`;

  if (content.includes("BlogLayout")) return content;

  // Insert after last import
  const lastImportMatch = content.match(/^import .+;?\s*$/gm);
  if (!lastImportMatch) return content;

  const lastImport = lastImportMatch[lastImportMatch.length - 1];
  const insertAt = content.indexOf(lastImport) + lastImport.length;

  return (
    content.slice(0, insertAt) +
    `\nimport BlogLayout, { BlogPostBody } from "@/components/layout/blog-layout";\nimport { getPostBySlug } from "@/lib/blog-posts";` +
    content.slice(insertAt)
  );
}

function addPostConst(content, slug) {
  if (content.includes("getPostBySlug(")) {
    return content.replace(
      /getPostBySlug\("[^"]+"\)/,
      `getPostBySlug("${slug}")`
    );
  }

  // Insert const post before export default
  return content.replace(
    /export default function/,
    `const post = getPostBySlug("${slug}")!;\n\nexport default function`
  );
}

function wrapReturn(content) {
  // Replace outer article wrapper
  if (content.includes("<BlogLayout")) return content;

  // Pattern: return ( <article ...> ... </article> );
  const articleMatch = content.match(
    /return \(\s*<article className="[^"]*">([\s\S]*)<\/article>\s*\);/
  );
  if (articleMatch) {
    let inner = articleMatch[1];
    for (const pat of STRIP_PATTERNS) {
      inner = inner.replace(pat, "\n");
    }
    inner = inner.trim();

    // Rename inner prose div to BlogPostBody if it's a single prose div
    if (inner.match(/^<div className="prose/)) {
      inner = inner
        .replace(/^<div className="prose[^"]*">/, "<BlogPostBody>")
        .replace(/<\/div>\s*$/, "</BlogPostBody>");
    }

    return content.replace(
      articleMatch[0],
      `return (\n    <BlogLayout post={post}>\n      ${inner}\n    </BlogLayout>\n  );`
    );
  }

  // Pattern: return ( <> ... <main ...> ... </main> </> );
  const mainMatch = content.match(
    /return \(\s*(?:<>[\s\S]*?)<main className="[^"]*">([\s\S]*)<\/main>[\s\S]*?\);/
  );
  if (mainMatch) {
    // Complex pages — skip auto refactor
    return content;
  }

  return content;
}

function removeUnusedImports(content) {
  let result = content;
  if (!result.includes("<Link") && !result.includes("Link ")) {
    result = result.replace(/^import Link from "next\/link";\n/m, "");
  }
  if (!result.includes("<ArrowLeft")) {
    result = result.replace(/,?\s*ArrowLeft/g, "");
  }
  if (!result.includes("<Calendar")) {
    result = result.replace(/,?\s*Calendar/g, "");
  }
  if (!result.includes("<Clock")) {
    result = result.replace(/,?\s*Clock/g, "");
  }
  // Clean empty lucide imports
  result = result.replace(
    /import \{[\s,]*\} from "lucide-react";\n/g,
    ""
  );
  return result;
}

const dirs = readdirSync(blogDir).filter((name) => {
  if (SKIP.has(name)) return false;
  const full = join(blogDir, name);
  return statSync(full).isDirectory();
});

let refactored = 0;
let skipped = 0;

for (const dir of dirs) {
  const pagePath = join(blogDir, dir, "page.tsx");
  let content = readFileSync(pagePath, "utf8");

  if (content.includes("<BlogLayout")) {
    skipped++;
    continue;
  }

  const original = content;
  content = ensureImports(content, dir);
  content = addPostConst(content, dir);
  content = wrapReturn(content);

  if (content === original) {
    console.log(`SKIP (manual needed): ${dir}`);
    skipped++;
    continue;
  }

  content = removeUnusedImports(content);
  writeFileSync(pagePath, content, "utf8");
  console.log(`Refactored: ${dir}`);
  refactored++;
}

console.log(`\nDone. Refactored: ${refactored}, Skipped: ${skipped}`);
