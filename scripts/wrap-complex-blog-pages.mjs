/**
 * Wraps remaining complex blog pages (still using <main>) with BlogLayout.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, "../app/(marketing)/blog");

function wrapComplexPage(content) {
  if (!content.includes('<main className="w-full min-h-screen')) return content;
  if (content.includes("<BlogLayout")) return content;

  let result = content;

  // Move schema script into BlogLayout schema prop (apis pattern)
  const schemaMatch = result.match(
    /const faqStructuredData = \{[\s\S]*?\};\s*\n\s*return \(\s*<>\s*\{\/\*\s*Schema Injection\s*\*\/\}\s*<script[\s\S]*?JSON\.stringify\(\[articleStructuredData, faqStructuredData\]\)[\s\S]*?\/>\s*/
  );

  if (schemaMatch) {
    result = result.replace(
      /return \(\s*<>\s*\{\/\*\s*Schema Injection\s*\*\/\}\s*<script[\s\S]*?\/>\s*/,
      'return (\n    <BlogLayout post={post} schema={[articleStructuredData, faqStructuredData]}>\n      <div className="space-y-16">\n'
    );
    result = result.replace(/\s*<\/>\s*\);\s*\}$/, "\n    </BlogLayout>\n  );\n}");
  } else {
    result = result.replace(
      /return \(\s*<main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">/,
      'return (\n    <BlogLayout post={post}>\n      <div className="space-y-16">'
    );
    result = result.replace(/\s*<\/main>\s*\);\s*\}$/, "\n      </div>\n    </BlogLayout>\n  );\n}");
  }

  // Remove duplicate hero/header sections (BlogLayout renders these)
  result = result.replace(
    /\s*\{\/\*\s*1\. Header \/ Hero Section\s*\*\/\}[\s\S]*?<\/section>\s*/g,
    "\n"
  );
  result = result.replace(
    /\s*\{\/\*\s*1\. Hero \/ Header Section\s*\*\/\}[\s\S]*?<\/section>\s*/g,
    "\n"
  );

  // Unwrap sidebar grid layouts
  result = result.replace(
    /\s*\{\/\*\s*3\. Main Content Section\s*\*\/\}\s*<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">\s*\{\/\*\s*Main Article Body\s*\*\/\}\s*<article className="lg:col-span-8[^"]*">/g,
    '\n        <div className="space-y-12 text-muted-foreground leading-relaxed text-base">'
  );
  result = result.replace(
    /<\/article>\s*<\/section>\s*(?=\s*\{\/\*\s*4\.)/g,
    "</div>\n"
  );

  // Fix main -> BlogLayout if still present
  result = result.replace(
    /<main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">/g,
    '<BlogLayout post={post}>\n      <div className="space-y-16">'
  );
  result = result.replace(/<\/main>/g, "</div>\n    </BlogLayout>");

  // Ensure BlogLayout import exists
  if (!result.includes("BlogLayout")) {
    result = result.replace(
      /("use client";\n\n)?/,
      '$1import BlogLayout from "@/components/layout/blog-layout";\nimport { getPostBySlug } from "@/lib/blog-posts";\n\n'
    );
  }

  if (!result.includes('getPostBySlug("')) {
    const slug = ""; // filled per file
  }

  return result;
}

const dirs = readdirSync(blogDir).filter((name) => {
  if (name === "[slug]") return false;
  return statSync(join(blogDir, name)).isDirectory();
});

for (const dir of dirs) {
  const pagePath = join(blogDir, dir, "page.tsx");
  let content = readFileSync(pagePath, "utf8");
  if (!content.includes('<main className="w-full min-h-screen')) continue;

  let fixed = wrapComplexPage(content);

  if (!fixed.includes(`getPostBySlug("${dir}")`)) {
    if (fixed.includes("const post =")) {
      fixed = fixed.replace(/getPostBySlug\("[^"]+"\)/, `getPostBySlug("${dir}")`);
    } else {
      fixed = fixed.replace(
        /export default function/,
        `const post = getPostBySlug("${dir}")!;\n\nexport default function`
      );
    }
  }

  writeFileSync(pagePath, fixed, "utf8");
  console.log(`Wrapped: ${dir}`);
}

console.log("Complex page wrap complete.");
