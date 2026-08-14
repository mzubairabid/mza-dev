import { MetadataRoute } from "next";
import { getAllPosts, BlogPost } from "@/lib/blog-posts";
import fs from "fs";
import path from "path";

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mzadev.com";

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
    // Main Blog Listing Page (/blog) ko yahan manually include kar diya hai
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // 2. Dynamic Blog Posts (Fetched directly from lib/blog-posts.tsx)
  const posts = getAllPosts();
  const blogPosts = posts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}