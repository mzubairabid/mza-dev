/**
 * Fixes broken imports from refactor-blog-pages.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, "../app/(marketing)/blog");

function fixFile(content) {
  let result = content;

  // Fix `{, Icon` broken lucide imports
  result = result.replace(/import \{,\s*/g, "import { ");

  // Fix import inserted inside lucide block
  result = result.replace(
    /import \{\s*\nimport BlogLayout, \{ BlogPostBody \} from "@\/components\/layout\/blog-layout";\nimport \{ getPostBySlug \} from "@\/lib\/blog-posts";,?\s*\n/g,
    'import BlogLayout, { BlogPostBody } from "@/components/layout/blog-layout";\nimport { getPostBySlug } from "@/lib/blog-posts";\nimport {\n'
  );

  // Fix trailing comma after blog-posts import inside lucide
  result = result.replace(
    /from "@\/lib\/blog-posts";,\s*\n/g,
    'from "@/lib/blog-posts";\n'
  );

  // Fix duplicate trailing comma patterns like `};,`
  result = result.replace(/from "@\/lib\/blog-posts";,/g, 'from "@/lib/blog-posts";');

  return result;
}

function removeInlineSidebar(content) {
  // Remove right sidebar aside blocks (author widget + recent posts in main content)
  let result = content;

  // Remove {/* Right Sidebar ... */} through closing </aside> within BlogLayout
  result = result.replace(
    /\s*\{\/\*\s*Right Sidebar[\s\S]*?<\/aside>\s*/g,
    "\n"
  );

  // Remove standalone Author Bio Box at end of content
  result = result.replace(
    /\s*\{\/\*\s*Author Bio Box\s*\*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/BlogLayout>)/g,
    "\n"
  );

  // Unwrap grid layouts that had sidebar: lg:grid-cols-12 with main lg:col-span-8
  // Change grid wrapper to simple div if it's just for sidebar layout
  result = result.replace(
    /<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">\s*<article className="lg:col-span-8[^"]*">/g,
    "<div>\n          <article>"
  );
  result = result.replace(
    /<\/article>\s*(?:\s*\{\/\*[\s\S]*?<\/aside>\s*)?<\/div>/g,
    "</article>\n        </div>"
  );

  return result;
}

const dirs = readdirSync(blogDir).filter((name) => {
  if (name === "[slug]") return false;
  const full = join(blogDir, name);
  return statSync(full).isDirectory();
});

for (const dir of dirs) {
  const pagePath = join(blogDir, dir, "page.tsx");
  let content = readFileSync(pagePath, "utf8");
  const fixed = removeInlineSidebar(fixFile(content));
  if (fixed !== content) {
    writeFileSync(pagePath, fixed, "utf8");
    console.log(`Fixed: ${dir}`);
  }
}

console.log("Import/sidebar fix complete.");
