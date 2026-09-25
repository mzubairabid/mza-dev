// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts, BlogPost } from "@/lib/blog-posts";
import { getAllPageSlugs } from "@/lib/pages";
import fs from "fs";
import path from "path";

// Build ke waqt ek dafa ban jaye (fs sirf build par kaam karta hai)
export const dynamic = "force-static";

// Final domain: sirf WWW
const BASE_URL = "https://www.mzadev.com";

// Test / draft slugs jo sitemap me nahi chahiye
const EXCLUDED_SLUGS = ["my-first-page", "my-first-post"];

// Wo routes jo redirect hote hain ya index nahi hone chahiye.
// next.config.mjs ke redirects() me jo "source" hai, agar us ka folder
// app/ me abhi bhi mojood hai to use yahan likhein.
const EXCLUDED_ROUTES = new Set<string>([
  "/services/graphic-design",
  "/services/shopify-funnels",
  "/services/web-development-service",
  "/cart",
]);

// app/ folder se static pages auto-scan
function getStaticPages(dir: string, baseRoute = ""): string[] {
  let routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name.startsWith("_") ||
      entry.name.startsWith(".") ||
      entry.name.startsWith("[") ||
      entry.name.startsWith("@") ||
      entry.name === "api" ||
      entry.name === "blog"
    ) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const segment = isGroup ? "" : `/${entry.name}`;
      routes = routes.concat(getStaticPages(fullPath, `${baseRoute}${segment}`));
    } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      routes.push(baseRoute);
    }
  }

  return routes;
}

const toDate = (d?: string) => {
  if (!d) return undefined;
  const date = new Date(d);
  return isNaN(date.getTime()) ? undefined : date.toISOString().split("T")[0];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const srcAppDir = path.join(process.cwd(), "src", "app");
  const appDir = fs.existsSync(srcAppDir) ? srcAppDir : path.join(process.cwd(), "app");

  // Map = duplicate URLs khud hi khatam
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();
  const add = (route: string, lastModified?: string) => {
    const clean = route === "/" ? "" : route.replace(/\/$/, "");
    if (EXCLUDED_ROUTES.has(clean)) return;
    const url = `${BASE_URL}${clean}`;
    if (!entries.has(url)) entries.set(url, { url, ...(lastModified && { lastModified }) });
  };

  // 1. Static pages & tools
  getStaticPages(appDir).forEach((route) => add(route));

  // 2. Blog listing
  add("/blog");

  // 3. Blog posts
  getAllPosts()
    .filter((post: BlogPost) => !EXCLUDED_SLUGS.includes(post.slug))
    .forEach((post: BlogPost) => add(`/blog/${post.slug}`, toDate(post.date)));

  // 4. MDX custom pages
  getAllPageSlugs()
    .filter((page) => !EXCLUDED_SLUGS.includes(page.slug))
    .forEach((page) => add(`/${page.slug}`));

  return Array.from(entries.values());
}
