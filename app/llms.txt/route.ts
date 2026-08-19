import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Explicit TypeScript Interface (Type Error Fix)
interface BlogPost {
  title: string;
  slug: string;
  description?: string;
}

// Direct MDX File Reader
function getMDXPosts(): BlogPost[] {
  // Check karein aapka folder content/blog hai ya content/posts
  const contentDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const slug = file.replace(/\.mdx?$/, "");

      // Extract frontmatter (title & description) using Regex
      const titleMatch = fileContent.match(/title:\s*["']?([^"'\n]+)["']?/);
      const descMatch = fileContent.match(/description:\s*["']?([^"'\n]+)["']?/);

      return {
        slug,
        title: titleMatch ? titleMatch[1].trim() : slug,
        description: descMatch ? descMatch[1].trim() : "Technical article on web development and SEO.",
      };
    });
}

export async function GET() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mzadev.com";
  const posts: BlogPost[] = getMDXPosts();

  const postsList =
    posts.length > 0
      ? posts
          .map(
            (post: BlogPost) =>
              `- [${post.title}](${SITE_URL}/${post.slug}): ${post.description}`
          )
          .join("\n")
      : "- [Blog Archives](${SITE_URL}/blog): Technical articles and guides.";

  const llmsText = `# MZA Dev - Technical Portfolio & Blog

> Muhammad Zubair Abid (MZA Dev) is a Full-Stack Web Developer, Technical SEO Specialist, and Digital Solutions Architect specializing in Next.js, Web Performance, and Custom Automation.

## Core Pages
- [Home](${SITE_URL}): Portfolio, core skills, featured projects, and services.
- [Blog](${SITE_URL}/blog): Technical guides, MDX tutorials, and SEO optimization frameworks.

## Technical Articles & Posts
${postsList}
`;

  return new NextResponse(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}