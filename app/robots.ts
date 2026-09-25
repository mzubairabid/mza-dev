// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // "*" me Googlebot, GPTBot, ClaudeBot, PerplexityBot sab shamil hain
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.mzadev.com/sitemap.xml",
  };
}
