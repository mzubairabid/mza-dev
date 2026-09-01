// lib/blog-data.ts

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  image: string
  imageAlt?: string
  content?: string
  isMdx?: boolean
}

// All 23 Legacy Hardcoded Blog Posts Data
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "add-google-adsense-to-wordpress",
    title: "How to Add Google AdSense to WordPress Easily",
    description: "A complete step-by-step guide to connecting AdSense, placing ad units, and optimizing revenue on WordPress.",
    category: "WordPress",
    date: "2026-06-26",
    image: "/project-images/Add-Google-AdSense-to-WordPress.webp",
  },
  {
    slug: "apis-in-web-development",
    title: "The Role of APIs in Modern Web Development",
    description: "How REST APIs and Webhooks power decoupled storefronts, mobile apps, and scalable web platforms.",
    category: "JavaScript & React",
    date: "2026-06-15",
    image: "/project-images/role-of-apis-in-web-development-case-study.webp",
  },
  {
    slug: "best-online-react-compiler-2026",
    title: "Best Online React Compilers and Live Sandboxes in 2026",
    description: "Compare top browser-based React compilers for instant testing, prototyping, and component debugging.",
    category: "Developer Tools",
    date: "2026-07-25",
    image: "/project-images/online-react-compiler.webp",
  },
  {
    slug: "best-seo-strategies-2026",
    title: "Best SEO Strategies for High-Ranking Websites in 2026",
    description: "On-page SEO, Core Web Vitals optimization, semantic markup, and modern ranking factors explained.",
    category: "SEO & Growth",
    date: "2025-03-29",
    image: "/project-images/best-seo-strategies-for-2025.webp",
  },
  {
    slug: "build-a-fast-seo-friendly-website",
    title: "How to Build a Fast, SEO-Friendly Website from Scratch",
    description: "Essential architecture practices for lightning-fast page speeds, mobile usability, and search indexing.",
    category: "Web Development",
    date: "2025-04-21",
    image: "/project-images/fast-seo-friendly-website-in-2025.webp",
  },
  {
    slug: "build-agentic-web-experiences",
    title: "Building Agentic Web Experiences with AI Workflows",
    description: "How modern web developers integrate autonomous AI agents into user interfaces and custom SaaS apps.",
    category: "AI & Innovation",
    date: "2024-04-08",
    image: "/project-images/build-agentic-web-experiences.webp",
  },
  {
    slug: "core-web-vitals-in-2026",
    title: "Understanding and Fixing Core Web Vitals in 2026",
    description: "Master LCP, INP, and CLS metrics to improve Google rankings and deliver ultra-smooth user experiences.",
    category: "SEO & Growth",
    date: "2026-06-27",
    image: "/project-images/core-web-vitals-2026.webp",
  },
  {
    slug: "custom-web-development-for-small-businesses",
    title: "Why Custom Web Development Wins for Growing Businesses",
    description: "Comparing custom-coded websites vs page builder templates for long-term scalability and branding.",
    category: "Web Development",
    date: "2025-05-10",
    image: "/project-images/custom-web-development-benefits.webp",
  },
  {
    slug: "dark-mode-vs-light-mode-ux",
    title: "Dark Mode vs Light Mode UX: Best Practices & Implementation",
    description: "How to code smooth CSS theme toggles while maintaining accessibility, contrast, and visual balance.",
    category: "UI/UX Design",
    date: "2025-04-21",
    image: "/project-images/dark-mode-vs-light-mode-ux.webp",
  },
  {
    slug: "design-website-for-beginners",
    title: "Website Design Blueprint for Beginners",
    description: "A practical guide to layout hierarchy, color theory, typography, and responsive grid structures.",
    category: "UI/UX Design",
    date: "2025-08-18",
    image: "/project-images/Design-Website-for-Beginners_-The-Complete-Beginners-Handbook.webp",
  },
  {
    slug: "fix-inp-issue-on-wordpress",
    title: "How to Fix Interaction to Next Paint (INP) Issues on WordPress",
    description: "Troubleshoot heavy JavaScript execution and unblock the main thread for faster user interaction response.",
    category: "WordPress",
    date: "2026-05-21",
    image: "/project-images/How-to-Fix-INP-Issue-on-WordPress-in-2026.webp",
  },
  {
    slug: "google-seo-update-2026",
    title: "Google SEO Update 2026",
    description: "Breakdown of the latest Google search update, helpful content guidelines, and link quality signals.",
    category: "SEO & Growth",
    date: "2024-05-17",
    image: "/project-images/google-latest-seo-update.webp",
  },
  {
    slug: "how-to-fix-pagespeed-unable-to-resolve-url",
    title: "How to Fix PageSpeed 'Unable to Resolve URL' Error",
    description: "Step-by-step fix for DNS, SSL, Cloudflare redirect loops, and server response blocking issues.",
    category: "Web Development",
    date: "2026-06-13",
    image: "/project-images/ipv6-conflict-fix-pagespeed-2026.webp",
  },
  {
    slug: "increase-website-traffic-without-ads-2026",
    title: "Increase Organic Website Traffic Without Ads",
    description: "Actionable content distribution strategies, technical SEO fixes, and developer branding tips.",
    category: "SEO & Growth",
    date: "2025-04-28",
    image: "/project-images/increase-website-traffic-without-ads.webp",
  },
  {
    slug: "modern-css-layouts-for-websites",
    title: "Modern CSS Layouts: Grid, Flexbox, and Container Queries",
    description: "Clean code snippets to build ultra-responsive layouts without heavy CSS frameworks.",
    category: "JavaScript & React",
    date: "2026-06-28",
    image: "/project-images/Modern-CSS-Layouts.webp",
  },
  {
    slug: "on-page-seo-checklist-2026",
    title: "The Ultimate On-Page SEO Checklist for Developers",
    description: "Meta tags, structured data schema, image alt attributes, canonicals, and heading hierarchy rules.",
    category: "SEO & Growth",
    date: "2025-05-10",
    image: "/project-images/on-page-seo-checklist-2025.webp",
  },
  {
    slug: "professional-website-redesign-2026",
    title: "When and How to Plan a Professional Website Redesign",
    description: "Redesign your site without losing existing search engine rankings, backlinks, or traffic history.",
    category: "Web Development",
    date: "2025-04-21",
    image: "/project-images/professional-Website-redesign.webp",
  },
  {
    slug: "website-redesign-2026",
    title: "Website Redesign 2026",
    description: "Redesign your site without losing existing search engine rankings, backlinks, or traffic history.",
    category: "Web Development",
    date: "2025-05-22",
    image: "/project-images/professional-Website-redesign.webp",
  },
  {
    slug: "the-blueprint-respiro-premium-shopify-design",
    title: "The Blueprint Respiro: Premium Shopify Store Design Case Study",
    description: "Building high-converting Liquid themes, speed-optimized assets, and modern e-commerce storefronts.",
    category: "E-Commerce",
    date: "2026-05-13",
    image: "/project-images/Partnership-Blueprint-respiro.webp",
  },
  {
    slug: "top-web-design-trends-for-2026",
    title: "Top Web Design Trends Shaping Modern Websites in 2026",
    description: "Minimalist typography, micro-interactions, dark UI accents, and interactive browser tools.",
    category: "UI/UX Design",
    date: "2025-03-25",
    image: "/project-images/top-10-web-design-trends.webp",
  },
  {
    slug: "top-web-development-frameworks",
    title: "Best Frontend Frameworks 2026: Next.js 16, Svelte 5 & Nuxt",
    description: "Choose the right frontend stack based on rendering performance, SEO, and developer workflow.",
    category: "JavaScript & React",
    date: "2025-03-26",
    image: "/project-images/top-web-development-frameworks-to-use-in-2025.webp",
  },
  {
    slug: "web-development-vs-website-builders",
    title: "Custom Web Development vs Website Builders (Wix, Squarespace)",
    description: "Performance, ownership, security, and ROI comparison for businesses picking a web platform.",
    category: "Web Development",
    date: "2025-05-10",
    image: "/project-images/Web-Development-Vs-Website-Builders.webp",
  },
  {
    slug: "website-design-and-development-services",
    title: "Choosing the Right Web Design and Development Services",
    description: "What to look for when hiring freelancers or agencies for custom full-stack web solutions.",
    category: "Web Development",
    date: "2025-03-25",
    image: "/project-images/programming-gadget-crunchie.webp",
  },
]

export function getClientPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getClientCategories(): { name: string; count: number }[] {
  const categoriesMap: Record<string, number> = {}
  BLOG_POSTS.forEach((post) => {
    categoriesMap[post.category] = (categoriesMap[post.category] || 0) + 1
  })

  return Object.entries(categoriesMap).map(([name, count]) => ({
    name,
    count,
  }))
}
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}