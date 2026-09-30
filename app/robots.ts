// app/robots.ts
// Search engines aur AI search bots ko ijazat. robots.txt sirf "request" hai:
// bure bots isay ignore karte hain. Asli security next.config.mjs (headers),
// contact API (rate limit/Turnstile) aur Vercel Firewall me hai.
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Jin bots ka zikr is liye kiya ta ke saaf rahe ke ye allowed hain
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "Google-Extended",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: ["/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
