// app/sitemap.ts — sirf canonical, indexable URLs (koi redirect, 410 ya noindex nahi)
import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { tools } from "@/content/tools";
import { BLOG_MIGRATION, hasLivePosts } from "@/lib/blog-migration.mjs";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  // Jo blog posts abhi migrate nahi hui (status "live"), wo abhi isi site par hain
  const liveBlog = Object.entries(BLOG_MIGRATION)
    .filter(([, e]) => e.status === "live")
    .map(([slug]) => url(`/blog/${slug}`, 0.4, "yearly"));

  return [
    url("/", 1, "weekly"),
    url("/services", 0.9),
    ...services.map((s) => url(`/${s.slug}`, 0.9)),
    url("/work", 0.8),
    ...caseStudies.map((c) => url(`/${c.slug}`, 0.7)),
    url("/about", 0.7),
    url("/contact", 0.8),
    url("/tools", 0.5),
    ...tools.map((t) => url(`/tools/${t.slug}`, 0.5)),
    ...(hasLivePosts() ? [url("/blog", 0.3, "weekly"), ...liveBlog] : []),
    // Legal pages noindex hain (footer se link hain), is liye sitemap mein nahi
  ];
}
