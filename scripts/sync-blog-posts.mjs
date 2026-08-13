import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const postsJson = JSON.parse(
  readFileSync(join(root, "src/data/posts.json"), "utf8")
);

/** Slug → hero image overrides for static/hand-coded posts */
const SLUG_IMAGES = {
  "add-google-adsense-to-wordpress": "/project-images/Add-Google-AdSense-to-WordPress.webp",
  "apis-in-web-development": "/project-images/role-of-apis-in-web-development-case-study.webp",
  "best-online-react-compiler-2026": "/project-images/online-react-compiler.webp",
  "best-seo-strategies-2026": "/project-images/technical-seo-pagespeed.webp",
  "build-a-fast-seo-friendly-website": "/project-images/build-confidence.webp",
  "build-agentic-web-experiences": "/project-images/build-agentic-web-experiences.webp",
  "core-web-vitals-in-2026": "/project-images/core-web-vitals-2026.webp",
  "custom-web-development-for-small-businesses": "/project-images/custom-web-development-benefits.webp",
  "dark-mode-vs-light-mode-ux": "/project-images/dark-mode-vs-light-mode-ux.webp",
  "design-website-for-beginners": "/project-images/Design-Website-for-Beginners_-The-Complete-Beginners-Handbook.webp",
  "fix-inp-issue-on-wordpress": "/project-images/How-to-Fix-INP-Issue-on-WordPress-in-2026.webp",
  "google-seo-update-2026": "/project-images/technical-seo-pagespeed.webp",
  "how-to-fix-pagespeed-unable-to-resolve-url": "/project-images/ipv6-conflict-fix-pagespeed-2026.webp",
  "increase-website-traffic-without-ads-2026": "/project-images/technical-seo-pagespeed.webp",
  "modern-css-layouts-for-websites": "/project-images/Modern-CSS-Layouts.webp",
  "on-page-seo-checklist-2026": "/project-images/on-page-seo-checklist-2025.webp",
  "professional-website-redesign-2026": "/project-images/professional-Website-redesign.webp",
  "the-blueprint-respiro-premium-shopify-design": "/project-images/Partnership-Blueprint-respiro.webp",
  "top-web-design-trends-for-2026": "/project-images/figma-design-workflow.webp",
  "top-web-development-frameworks": "/project-images/top-web-development-frameworks-to-use-in-2025.webp",
  "web-development-vs-website-builders": "/project-images/Web-Development-Vs-Website-Builders.webp",
  "website-design-and-development-services": "/project-images/programming-gadget-crunchie.webp",
  "website-redesign-2026": "/project-images/professional-Website-redesign.webp",
  "whats-new-in-web-3-0-technology": "/project-images/ai-robot.webp",
  "what-is-google-gemini-ai": "/project-images/google-gemini-ai.webp",
  "google-adsense-for-wordpress": "/project-images/google-adsense-suitable-for-wordpress-website.webp",
};

const READ_TIME_OVERRIDES = {
  "best-online-react-compiler-2026": "5 min read",
  "apis-in-web-development": "5 min read",
  "add-google-adsense-to-wordpress": "6 min read",
  "fix-inp-issue-on-wordpress": "9 min read",
  "how-to-fix-pagespeed-unable-to-resolve-url": "5 min read",
  "core-web-vitals-in-2026": "7 min read",
  "modern-css-layouts-for-websites": "8 min read",
};

function decodeHtml(text = "") {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function stripHtml(html = "") {
  return decodeHtml(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function getReadingTime(html = "") {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function toIsoDate(dateStr) {
  if (!dateStr) return "2026-01-01";
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? dateStr : d.toISOString().slice(0, 10);
}

function defaultImage(slug) {
  return SLUG_IMAGES[slug] ?? "/project-images/programming-gadget-crunchie.webp";
}

const blogPosts = postsJson.map((post) => {
  const slug = post.slug;
  const plain = stripHtml(post.contentHtml ?? "");
  const excerpt =
    plain.slice(0, 160).trim() + (plain.length > 160 ? "…" : "") ||
    `Read the full guide on ${decodeHtml(post.title ?? slug)}.`;

  return {
    slug,
    title: decodeHtml(post.title ?? slug),
    excerpt,
    category: post.category ?? "Web Development",
    image: defaultImage(slug),
    date: toIsoDate(post.date),
    readTime: READ_TIME_OVERRIDES[slug] ?? getReadingTime(post.contentHtml ?? ""),
  };
});

const output = `// lib/blog-posts.ts
// Auto-generated from src/data/posts.json — run: node scripts/sync-blog-posts.mjs

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(currentSlug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sorted.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) return { previous: null, next: null };

  return {
    previous: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null,
    next: currentIndex > 0 ? sorted[currentIndex - 1] : null,
  };
}

export function getRecentPosts(excludeSlug: string, limit = 4): BlogPost[] {
  return [...blogPosts]
    .filter((post) => post.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  blogPosts.forEach((post) => {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  });
  return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
}
`;

writeFileSync(join(root, "lib/blog-posts.ts"), output, "utf8");
console.log(`Generated ${blogPosts.length} blog post entries.`);
