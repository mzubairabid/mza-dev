import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface SiteItem {
  title: string;
  slug: string;
  description: string;
}

// 1. Permanent/Core Site Pages
const CORE_PAGES: SiteItem[] = [
  {
    title: "Home",
    slug: "",
    description: "Full-stack developer portfolio, technical skills, and featured client projects.",
  },
  {
    title: "Blog Archives",
    slug: "blog",
    description: "Technical articles, Next.js tutorials, and technical SEO frameworks.",
  },
  {
    title: "Projects",
    slug: "projects",
    description: "Case studies of web applications, custom tools, and client platforms.",
  },
  {
    title: "Services",
    slug: "services",
    description: "Full-stack development, Next.js optimization, and cloud architecture solutions.",
  },
];

// 2. Dynamic MDX Articles / Pages Reader
function getMDXItems(): SiteItem[] {
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

      const titleMatch = fileContent.match(/title:\s*["']?([^"'\n]+)["']?/);
      const descMatch = fileContent.match(/description:\s*["']?([^"'\n]+)["']?/);

      return {
        slug,
        title: titleMatch ? titleMatch[1].trim() : slug,
        description: descMatch ? descMatch[1].trim() : "Technical guide and architecture analysis.",
      };
    });
}

export async function GET() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mzadev.com";
  const mdxPosts = getMDXItems();

  // Format Core Pages
  const corePagesFormatted = CORE_PAGES.map(
    (page) =>
      `- [${page.title}](${SITE_URL}${page.slug ? `/${page.slug}` : ""}): ${page.description}`
  ).join("\n");

  // Format MDX Posts
  const mdxPostsFormatted =
    mdxPosts.length > 0
      ? mdxPosts
          .map(
            (post) =>
              `- [${post.title}](${SITE_URL}/${post.slug}): ${post.description}`
          )
          .join("\n")
      : "- No dynamic articles available.";

  const llmsText = `# MZA Dev - Technical Portfolio & Blog

> Muhammad Zubair Abid (MZA Dev) is a Full-Stack Web Developer, Technical SEO Specialist, and Digital Solutions Architect specializing in Next.js, Web Performance, and Custom Automation.

## Core Pages
${corePagesFormatted}

## Technical Articles & MDX Guides
${mdxPostsFormatted}
`;

  return new NextResponse(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}