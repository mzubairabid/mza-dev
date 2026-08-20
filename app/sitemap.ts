import { MetadataRoute } from "next";
import { getAllPosts, BlogPost } from "@/lib/blog-posts";
import { getAllPageSlugs } from "@/lib/pages"; // Custom MDX pages import
import fs from "fs";
import path from "path";

// Un slugs ki list jinhein sitemap me include NAHI karna
const EXCLUDED_SLUGS = ["my-first-page", "my-first-post"];

// Auto-scan static pages & tools from app folder
function getStaticPages(dir: string, baseRoute = ""): string[] {
  let routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    // Hidden folders, APIs, Dynamic routes, aur Blog folder ko scan se exclude kiya hai
    if (
      entry.name.startsWith("_") ||
      entry.name.startsWith(".") ||
      entry.name === "api" ||
      entry.name === "blog" || // Blog folder skip ho ga taake duplicate routes na banein
      entry.name.startsWith("[")
    ) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const routeSegment = entry.name.startsWith("(") && entry.name.endsWith(")") ? "" : `/${entry.name}`;
      routes = routes.concat(getStaticPages(fullPath, `${baseRoute}${routeSegment}`));
    } else if (entry.name === "page.tsx" || entry.name === "page.js" || entry.name === "page.jsx") {
      routes.push(baseRoute === "" ? "" : baseRoute);
    }
  }

  return Array.from(new Set(routes));
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure base URL always includes 'https://www.' to prevent 308 redirects in sitemap
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mzadev.com";
  const baseUrl = rawBaseUrl.replace("https://mzadev.com", "https://www.mzadev.com").replace(/\/$/, "");

  const rootAppDir = path.join(process.cwd(), "app");
  const srcAppDir = path.join(process.cwd(), "src", "app");
  const targetAppDir = fs.existsSync(srcAppDir) ? srcAppDir : rootAppDir;

  // 1. Static Pages & Tools (Auto Scanned)
  const autoScannedRoutes = getStaticPages(targetAppDir);

  const staticPages = [
    ...autoScannedRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1.0 : route.includes("/tools") || route.includes("/services") ? 0.9 : 0.8,
    })),
    // Main Blog Listing Page (/blog)
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // 2. Dynamic Blog Posts (Excluding Test Posts)
  const posts = getAllPosts();
  const blogPosts = posts
    .filter((post: BlogPost) => !EXCLUDED_SLUGS.includes(post.slug))
    .map((post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // 3. Dynamic MDX Custom Pages (Excluding Test Pages)
  const mdxPages = getAllPageSlugs();
  const customPages = mdxPages
    .filter((page) => !EXCLUDED_SLUGS.includes(page.slug))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...blogPosts, ...customPages];
}