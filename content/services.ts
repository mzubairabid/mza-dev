// content/services.ts
// =====================================================================
// Har service page ka POORA text yahan hai. Design ko haath lagaye baghair
// title, description, packages, FAQs sab yahin se badlo.
// PRICES: har package me { USD, GBP, PKR }. Visitor Pakistan se ho to PKR,
// UK se GBP, baaqi sab ko USD dikhta hai (proxy.ts + app/layout.tsx).
// Sirf number likho: "700" ya "120,000". Khali "" = "Custom quote".
// PKR prices jaan boojh kar conversion nahi, local market ke hisaab se hain.
// =====================================================================
import type { Service } from "@/types/content";

const REVISIONS = "2 revision rounds";

export const services: Service[] = [
  // ------------------------------------------------------------------
  {
    slug: "web-development-service",
    name: "Web Development",
    navDescription: "Next.js & React websites and web apps",
    metaTitle: "Custom Web Development with Next.js & React | MZA Dev",
    metaDescription:
      "Custom websites and web apps built with Next.js and React: fast, mobile-first and SEO-ready. Built by Muhammad Zubair Abid. Share your project for a quote.",
    h1: "Custom web development with Next.js and React",
    intro:
      "I build business websites, landing pages and web apps in Next.js and React. Every build is mobile-first, loads fast on a phone connection and ships with technical SEO already in place, so you are not paying someone else to fix it after launch.",
    heroImage: "/project-images/web-development.webp",
    heroImageAlt: "Code editor showing a Next.js project built by MZA Dev",
    forWho: [
      "Businesses replacing a slow WordPress, Wix or Squarespace site",
      "Startups that need a landing page or a first version of a web app",
      "Agencies that need a Next.js developer for client work",
      "Owners who want a calculator, quote form or custom tool on their site",
    ],
    offerings: [
      {
        title: "Business websites and landing pages",
        body: "Service pages, portfolios and landing pages built on the Next.js App Router. Pages are pre-rendered where possible, so they open fast even on mobile data.",
      },
      {
        title: "Web apps and dashboards",
        body: "React front ends with Node.js and Express APIs, and MongoDB when the project needs a database. Login areas, admin dashboards and API integrations.",
      },
      {
        title: "Custom tools and calculators",
        body: "Interactive JavaScript tools that answer a customer's question on your site, like the nursery profit calculator I built for a UK client.",
        link: { label: "Try the nursery calculator", href: "/tools/nursery-calculator" },
      },
      {
        title: "Technical SEO from day one",
        body: "Page titles, canonical URLs, sitemap, robots.txt, JSON-LD schema and Core Web Vitals are part of the build, not an extra.",
        link: { label: "See the technical SEO service", href: "/technical-seo" },
      },
      {
        title: "Analytics and lead tracking",
        body: "GA4 and Google Search Console set up, with form and WhatsApp clicks tracked, so you can see where your leads come from.",
      },
    ],
    why: [
      {
        title: "You talk to the developer",
        body: "No account manager in between. The person you brief is the person writing the code.",
      },
      {
        title: "You own the code",
        body: "The project lives in a GitHub repository under your account. No lock-in to me or to a page builder.",
      },
      {
        title: "An honest speed target",
        body: "I aim for 90+ on mobile PageSpeed at launch and send you the report. Scores can drop later when heavy third-party scripts are added, and I will tell you which ones cost the most.",
      },
    ],
    packages: [
      {
        tier: "Basic",
        name: "Landing page",
        bestFor: "One page for an offer, product launch or ad campaign.",
        price: { USD: "250", GBP: "200", PKR: "45,000" },
        timeline: "3–5 days",
        includes: ["1 custom page in Next.js", "Mobile-first layout", "On-page SEO and meta tags", "Contact form and WhatsApp button", "GA4 setup", REVISIONS],
      },
      {
        tier: "Standard",
        name: "Business website",
        bestFor: "A complete service or company website.",
        price: { USD: "700", GBP: "550", PKR: "120,000" },
        timeline: "1–2 weeks",
        includes: ["Up to 5 pages", "Technical SEO, sitemap and schema", "GA4 and Search Console", "Contact form with email alerts", "14 days of fixes after launch", REVISIONS],
        featured: true,
      },
      {
        tier: "Premium",
        name: "Web app",
        bestFor: "Dashboards, portals and tools with a database.",
        price: { USD: "1,800", GBP: "1,450", PKR: "350,000" },
        timeline: "3–5 weeks, depending on scope",
        includes: ["Next.js or React front end", "Node.js / Express API", "MongoDB database", "Admin area if needed", "30 days of fixes after launch", REVISIONS],
      },
      {
        tier: "Add-on",
        name: "Website redesign",
        bestFor: "A faster, modern version of your current site, rebuilt in Next.js.",
        price: { USD: "600", GBP: "480", PKR: "100,000" },
        timeline: "1–2 weeks",
        includes: ["Up to 5 pages redesigned", "Content moved over", "301 redirects for changed URLs", "Speed and SEO check before and after", REVISIONS],
      },
    ],
    faqs: [
      {
        q: "Should I choose Next.js or WordPress for my website?",
        a: "Choose WordPress if you want to edit every page yourself with a visual editor and use plugins. Choose Next.js if speed, security and custom features matter more, and content changes are occasional. I build with both and will recommend one after hearing what you need.",
      },
      {
        q: "How long does a custom website take?",
        a: "A landing page takes 3 to 5 days. A multi-page business website usually takes 1 to 2 weeks. Web apps take 2 to 3 weeks or more depending on features. You get a fixed timeline in the quote.",
      },
      {
        q: "Will I own the code and the website?",
        a: "Yes. The code is handed over in a GitHub repository and the site is deployed on your own hosting account, such as Vercel.",
      },
      {
        q: "Is SEO included in the website build?",
        a: "Technical SEO is included: titles, descriptions, canonical URLs, sitemap, robots.txt, structured data and Core Web Vitals. Writing blog content and building backlinks are not included.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. Bug fixes are included for 14 or 30 days depending on the package. After that, changes are billed per task or through a monthly plan.",
      },
      {
        q: "How much does a Next.js website cost?",
        a: "The packages above show starting prices. The final price depends on the number of pages and features, and you get a fixed quote in writing before any work starts.",
      },
    ],
    relatedCaseStudies: ["karachi-mart-2026"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel"],
    whatsappText: "Hi Zubair, I need a website / web app built. Here are the details: ",
  },

  // ------------------------------------------------------------------
  {
    slug: "shopify-funnels",
    name: "Shopify Stores & Funnels",
    navDescription: "Store setup, custom Liquid, funnel pages",
    metaTitle: "Shopify Store Development & Sales Funnels | MZA Dev",
    metaDescription:
      "Shopify store setup, theme customization and sales funnels built for speed and conversions. See Shopify work by MZA Dev and request a quote.",
    h1: "Shopify store development and sales funnels",
    intro:
      "I set up, customize and speed up Shopify stores, and build the product and offer pages that do the selling. You work directly with me, not with an account manager.",
    heroImage: "/project-images/shopify-e-commerce.webp",
    heroImageAlt: "Shopify storefront designed and developed by MZA Dev",
    forWho: [
      "New brands launching their first Shopify store",
      "Stores that feel slow because of a heavy theme or too many apps",
      "Brands running ads that need a dedicated landing or offer page",
      "WooCommerce stores moving to Shopify",
    ],
    offerings: [
      {
        title: "Store setup",
        body: "Theme installation, products and collections, navigation, payment and shipping settings, and the basic pages every store needs.",
      },
      {
        title: "Custom Liquid sections",
        body: "Sections and templates written in Shopify Liquid when the theme can't do what you need, instead of adding another paid app.",
      },
      {
        title: "Funnel and offer pages",
        body: "Product pages, offer pages and upsell flows planned around what the buyer needs to see before paying. Funnelish integration when you use it.",
        link: { label: "See the Respiro case study", href: "/respiro-shopify-store" },
      },
      {
        title: "Speed cleanup",
        body: "Removing unused apps and leftover scripts, compressing images and fixing layout shifts so product pages load faster on mobile.",
      },
      {
        title: "Migration to Shopify",
        body: "Moving products, customers and content from WooCommerce, with 301 redirects so your Google rankings follow you.",
      },
    ],
    why: [
      {
        title: "Fewer apps, less monthly cost",
        body: "Where a small custom section does the job, you don't pay a monthly app fee and you don't load extra scripts.",
      },
      {
        title: "Built for your market",
        body: "Payment and delivery setups differ by country. For Pakistan that usually means cash on delivery and local gateways; for the US and UK, cards and wallets.",
      },
      {
        title: "Direct access",
        body: "You message the developer working on your store, so fixes don't wait in an agency queue.",
      },
    ],
    packages: [
      {
        tier: "Basic",
        name: "Store fixes",
        bestFor: "Theme tweaks, bug fixes or small layout changes.",
        price: { USD: "80", GBP: "65", PKR: "12,000" },
        timeline: "2–3 days",
        includes: ["Theme settings and small Liquid/CSS changes", "Menu and navigation setup", "Mobile layout fixes", REVISIONS],
      },
      {
        tier: "Standard",
        name: "Store setup",
        bestFor: "A ready-to-sell store on a good theme.",
        price: { USD: "400", GBP: "320", PKR: "65,000" },
        timeline: "5–7 days",
        includes: ["Complete store setup", "Up to 20 products and collections", "Payment and shipping configuration", "Basic on-store SEO", "14 days of fixes after launch", REVISIONS],
        featured: true,
      },
      {
        tier: "Premium",
        name: "Custom store or funnel",
        bestFor: "Custom sections, offer pages and speed work.",
        price: { USD: "1,000", GBP: "800", PKR: "160,000" },
        timeline: "2–3 weeks",
        includes: ["Custom Liquid sections and templates", "Landing or offer pages for ads", "Speed and Core Web Vitals work", "30 days of fixes after launch", REVISIONS],
      },
    ],
    faqs: [
      {
        q: "Why hire a freelance Shopify developer instead of an agency?",
        a: "You work directly with the person building the store, so there is no account manager relaying messages and no agency overhead in the price.",
      },
      {
        q: "Will my store get slower as I add products and apps?",
        a: "Products alone don't slow a store down much. Apps do, because most add their own scripts. I keep the app list short and use custom sections where they make more sense.",
      },
      {
        q: "Can you set up payments for a store in Pakistan?",
        a: "Yes. Payment options depend on the country your store is registered in. For Pakistani stores that is usually cash on delivery plus a local payment gateway. I set up what your country and business type support.",
      },
      {
        q: "Can you move my WooCommerce store to Shopify?",
        a: "Yes. Products, customers and content are migrated, and old URLs are redirected with 301 redirects to protect your Google rankings.",
      },
      {
        q: "Will I be able to manage the store myself after launch?",
        a: "Yes. Custom sections are editable from the Shopify theme editor, so you can change banners, text and products without touching code.",
      },
      {
        q: "Is store SEO included?",
        a: "Basic on-store SEO is included: product and collection titles, descriptions, image alt text and clean URLs. Ongoing content and link building are separate.",
      },
    ],
    relatedCaseStudies: ["respiro-shopify-store"],
    stack: ["Shopify", "Liquid", "JavaScript", "Funnelish", "GA4"],
    whatsappText: "Hi Zubair, I need help with my Shopify store. Here are the details: ",
  },

  // ------------------------------------------------------------------
  {
    slug: "wordpress-development",
    name: "WordPress & WooCommerce",
    navDescription: "Lightweight builds and speed fixes",
    metaTitle: "WordPress Development & Speed Optimization | MZA Dev",
    metaDescription:
      "Custom WordPress and WooCommerce sites without page-builder bloat, plus speed and Core Web Vitals fixes for existing sites. Get a quote from MZA Dev.",
    h1: "WordPress and WooCommerce development",
    intro:
      "I build WordPress and WooCommerce sites that stay fast, and fix the ones that aren't: slow pages, broken checkouts and plugin conflicts.",
    heroImage: "/project-images/wordpress-maxelio.webp",
    heroImageAlt: "WordPress website built by MZA Dev",
    forWho: [
      "Businesses that want to edit their own pages in WordPress",
      "WooCommerce stores with checkout or payment gateway errors",
      "Sites failing Core Web Vitals or loading slowly on mobile",
      "Owners stuck with a heavy theme and too many plugins",
    ],
    offerings: [
      {
        title: "Lightweight WordPress sites",
        body: "Block themes and custom templates with only the plugins you need. When you want to edit layouts visually, I set up a page builder and keep it lean.",
      },
      {
        title: "WooCommerce stores",
        body: "Product catalogues, custom product fields, checkout changes and payment gateways such as PayPal and Stripe.",
        link: { label: "See the Desi Shop Zellingen case study", href: "/german-desi-shop-zellingen-2025" },
      },
      {
        title: "Speed and INP fixes",
        body: "Finding the plugins and scripts that slow the site down, image compression, caching and fixing slow interactions (INP).",
      },
      {
        title: "Rank Math and Yoast setup",
        body: "Titles, sitemaps, schema and redirects configured correctly, so the SEO plugin helps instead of creating duplicate pages.",
      },
      {
        title: "Bug fixes and maintenance",
        body: "Plugin conflicts, PHP errors, broken layouts after updates and security clean-up.",
      },
    ],
    why: [
      {
        title: "Only the plugins you need",
        body: "Every plugin adds weight and a security risk. I remove what isn't used before adding anything new.",
      },
      {
        title: "Fixes, not workarounds",
        body: "Checkout and payment errors are traced to their cause, not hidden behind another plugin.",
      },
      {
        title: "You can edit it yourself",
        body: "Sites are handed over with editable pages and a short walkthrough.",
      },
    ],
    packages: [
      {
        tier: "Basic",
        name: "Fix or tweak",
        bestFor: "A bug fix, theme change or single page.",
        price: { USD: "60", GBP: "50", PKR: "8,000" },
        timeline: "2–3 days",
        includes: ["One fix or one page", "Mobile check", "Basic on-page SEO", REVISIONS],
      },
      {
        tier: "Standard",
        name: "Business website",
        bestFor: "A multi-page company or service website.",
        price: { USD: "450", GBP: "350", PKR: "70,000" },
        timeline: "7–10 days",
        includes: ["Up to 5 pages", "Lightweight theme setup", "Rank Math or Yoast configured", "Contact form and WhatsApp button", "14 days of fixes after launch", REVISIONS],
        featured: true,
      },
      {
        tier: "Premium",
        name: "WooCommerce store",
        bestFor: "An online store with payments and shipping.",
        price: { USD: "900", GBP: "700", PKR: "150,000" },
        timeline: "2–3 weeks",
        includes: ["Store setup and product import", "Payment gateway setup", "Checkout testing", "Speed optimization", "30 days of fixes after launch", REVISIONS],
      },
      {
        tier: "Add-on",
        name: "Website redesign",
        bestFor: "A new design for your existing WordPress site, same content.",
        price: { USD: "500", GBP: "400", PKR: "80,000" },
        timeline: "1–2 weeks",
        includes: ["Up to 5 pages redesigned", "Page builder bloat removed", "Speed and SEO check before and after", "No change to your URLs", REVISIONS],
      },
    ],
    faqs: [
      {
        q: "Can you make my existing WordPress site faster?",
        a: "Usually yes. The biggest causes are heavy page builders, too many plugins, large images and third-party scripts. I measure first, then fix what costs the most.",
      },
      {
        q: "Do you use Elementor?",
        a: "Only when you need to edit layouts visually yourself. Otherwise I use the block editor, which loads less code.",
      },
      {
        q: "Can you fix PayPal or checkout errors in WooCommerce?",
        a: "Yes. I have fixed PayPal checkout errors on a live German WooCommerce store. Send the error message or a screen recording and I will tell you what's needed.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. You get admin access, editable pages and a short walkthrough of how to update content and products.",
      },
      {
        q: "Do you offer WordPress maintenance?",
        a: "Yes. Updates, backups, security checks and small changes can be done per task or on a monthly plan.",
      },
    ],
    relatedCaseStudies: ["german-desi-shop-zellingen-2025", "farah-brand"],
    stack: ["WordPress", "WooCommerce", "PHP", "Elementor (when needed)", "Rank Math", "Yoast SEO"],
    whatsappText: "Hi Zubair, I need help with my WordPress site. Here are the details: ",
  },

  // ------------------------------------------------------------------
  {
    slug: "technical-seo",
    name: "Technical SEO",
    navDescription: "Indexing, Core Web Vitals, schema",
    metaTitle: "Technical SEO Services & Core Web Vitals Fixes | MZA Dev",
    metaDescription:
      "Technical SEO audits and fixes: indexing, Core Web Vitals, schema, sitemaps and site structure. A clear report first, then the fixes. By MZA Dev.",
    h1: "Technical SEO audits and fixes",
    intro:
      "If Google isn't indexing your pages or your site fails Core Web Vitals, I find the cause in your code, CMS and server settings, and fix it. You get a plain-language report first, then the fixes.",
    heroImage: "/project-images/technical-seo-pagespeed.webp",
    heroImageAlt: "PageSpeed and Search Console reports from a technical SEO audit",
    forWho: [
      "Pages stuck in 'Discovered' or 'Crawled – currently not indexed'",
      "Sites failing Core Web Vitals in Search Console",
      "Websites moving to a new domain, subdomain or platform",
      "Developers who need an SEO check before launch",
    ],
    offerings: [
      {
        title: "Indexing problems",
        body: "Wrong canonicals, redirect chains, soft 404s, orphan pages and sitemap errors that keep pages out of Google.",
      },
      {
        title: "Core Web Vitals",
        body: "Fixing slow loading (LCP), slow interactions (INP) and layout shifts (CLS) in the code, not just with a caching plugin.",
      },
      {
        title: "Structured data",
        body: "Organization, Person, Service, Product, Breadcrumb and FAQ schema written in JSON-LD and validated.",
      },
      {
        title: "Migrations and redirects",
        body: "301 redirect maps when you change URLs, domains or platforms, so rankings aren't lost in the move.",
      },
      {
        title: "Visibility in AI search",
        body: "Making sure AI search crawlers can read your site and that your business details are consistent across your site and profiles. No one can guarantee an AI tool will mention you, and I won't claim to.",
      },
    ],
    why: [
      {
        title: "I fix it, not just report it",
        body: "Most audits end with a PDF. As a developer, I can make the changes in your code or CMS.",
      },
      {
        title: "Plain-language report",
        body: "Each issue comes with what it is, why it matters for your business and what it takes to fix.",
      },
      {
        title: "No ranking promises",
        body: "Nobody controls Google's rankings. What I can promise is a site with no technical blockers.",
      },
    ],
    packages: [
      {
        tier: "Basic",
        name: "Audit report",
        bestFor: "Find out what's wrong before spending on fixes.",
        price: { USD: "150", GBP: "120", PKR: "25,000" },
        timeline: "3–5 days",
        includes: ["Search Console and crawl review", "Core Web Vitals check", "Schema and sitemap check", "Prioritized fix list"],
      },
      {
        tier: "Standard",
        name: "Audit and fixes",
        bestFor: "The audit plus the fixes done for you.",
        price: { USD: "450", GBP: "350", PKR: "75,000" },
        timeline: "1–2 weeks",
        includes: ["Everything in the audit", "Fixes in your code or CMS", "Schema setup", "Before and after report"],
        featured: true,
      },
      {
        tier: "Premium",
        name: "Monthly technical care",
        bestFor: "Ongoing monitoring for growing sites.",
        price: { USD: "250", GBP: "200", PKR: "40,000", per: "month" },
        timeline: "Monthly, cancel anytime",
        includes: ["Monthly Search Console review", "New issues fixed", "Speed monitoring", "Short monthly report"],
      },
    ],
    faqs: [
      {
        q: "What is included in a technical SEO audit?",
        a: "Indexing and crawl status, canonical and redirect checks, sitemap and robots.txt, Core Web Vitals, structured data, internal links and mobile usability, with a prioritized fix list.",
      },
      {
        q: "Can you guarantee first-page rankings?",
        a: "No. Rankings depend on content, competition and links as well as technical health. A technical audit removes the problems that stop good pages from ranking.",
      },
      {
        q: "Why are my pages 'Discovered – currently not indexed'?",
        a: "Common causes are weak internal linking, duplicate or thin pages, crawl budget spent on useless URLs, or slow servers. The audit finds which one applies to your site.",
      },
      {
        q: "Do you work on WordPress, Shopify and Next.js sites?",
        a: "Yes. I work in the code or CMS of all three, which means fixes can be made directly instead of handed to another developer.",
      },
      {
        q: "Does schema markup help my site appear in AI answers?",
        a: "It helps machines understand your business, but it is not a guarantee. AI tools also rely on readable page content, crawler access and mentions of your business on other sites.",
      },
    ],
    relatedCaseStudies: ["german-desi-shop-zellingen-2025"],
    stack: ["Google Search Console", "PageSpeed Insights", "Lighthouse", "Semrush", "Ahrefs", "Rank Math", "Schema.org"],
    whatsappText: "Hi Zubair, I need a technical SEO check for my website: ",
  },

  // ------------------------------------------------------------------
  {
    slug: "graphic-design",
    name: "Graphic Design",
    navDescription: "Logos, brand kits, social graphics",
    metaTitle: "Graphic Design for Brands & Websites | MZA Dev",
    metaDescription:
      "Logos, brand visuals, social media graphics and website graphics designed to match your brand and load fast. Graphic design services by MZA Dev.",
    h1: "Graphic design for brands and websites",
    intro:
      "Logos, brand kits, social media posts, YouTube thumbnails and website banners, designed to match your brand and exported so they load fast on the web.",
    heroImage: "/project-images/graphic-design.webp",
    heroImageAlt: "Brand and social media graphics designed by MZA Dev",
    forWho: [
      "New businesses that need a logo and basic brand kit",
      "Brands that need consistent social media posts",
      "YouTube creators who need thumbnails and channel art",
      "Websites that need hero banners and product graphics",
    ],
    offerings: [
      { title: "Logo design", body: "Vector logos delivered in formats for print, web and social profiles." },
      { title: "Brand kit", body: "Colour palette, fonts and simple usage rules so everything you publish looks consistent." },
      { title: "Social media graphics", body: "Post and story templates for Instagram, Facebook and LinkedIn." },
      { title: "YouTube thumbnails", body: "Thumbnails and channel banners designed to be readable at small sizes." },
      { title: "Website graphics", body: "Hero banners and section graphics exported as WebP or SVG so they don't slow your pages." },
      { title: "Print materials", body: "Business cards, flyers and brochures supplied print-ready." },
    ],
    why: [
      {
        title: "Designed for the web",
        body: "Because I also build websites, graphics are sized and compressed for fast pages from the start.",
      },
      {
        title: "Your market, your style",
        body: "The look is chosen for your audience and industry, not a single house style.",
      },
      {
        title: "All the files you need",
        body: "Vector source files plus PNG, JPG, WebP and SVG exports, depending on the package.",
      },
    ],
    packages: [
      {
        tier: "Basic",
        name: "Single graphic",
        bestFor: "One thumbnail, post or banner.",
        price: { USD: "", GBP: "", PKR: "" },
        timeline: "24–48 hours",
        includes: ["1 design", "Web-ready export", REVISIONS],
      },
      {
        tier: "Standard",
        name: "Logo and brand kit",
        bestFor: "A new business identity.",
        price: { USD: "", GBP: "", PKR: "" },
        timeline: "3–7 days",
        includes: ["Logo concepts", "Final vector logo", "Colour palette and fonts", "Social profile versions", REVISIONS],
        featured: true,
      },
      {
        tier: "Premium",
        name: "Monthly social pack",
        bestFor: "Regular posts for your brand.",
        price: { USD: "", GBP: "", PKR: "" },
        timeline: "Monthly",
        includes: ["[NUMBER] posts per month", "Story versions", "Editable templates", REVISIONS],
      },
    ],
    faqs: [
      {
        q: "What file formats will I receive?",
        a: "Vector files (AI, EPS or PDF) for print and scaling, plus PNG, JPG, WebP and SVG for web and social media, depending on the package.",
      },
      {
        q: "How long does graphic design take?",
        a: "Single graphics and thumbnails take 24 to 48 hours. Logo and brand kit projects take about 3 to 7 days.",
      },
      {
        q: "How many revisions are included?",
        a: "Each package includes 2 revision rounds. Extra rounds can be added if needed.",
      },
      {
        q: "Do you design YouTube thumbnails?",
        a: "Yes. Thumbnails are designed to stay readable at small sizes on mobile, with channel banners available too.",
      },
      {
        q: "Can you design graphics for my website too?",
        a: "Yes. Website banners and section graphics are exported in web formats and sized for fast loading.",
      },
    ],
    relatedCaseStudies: ["farah-brand"],
    stack: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    whatsappText: "Hi Zubair, I need graphic design work: ",
  },
];

export const servicesHub = {
  metaTitle: "Web Development, Shopify & SEO Services | MZA Dev",
  metaDescription:
    "Web development, Shopify stores and funnels, WordPress, technical SEO and graphic design by MZA Dev. See what each service includes and how to start.",
  h1: "Services",
  intro:
    "Websites, online stores and the technical SEO that helps them get found. Pick a service to see what's included, the process and typical timelines.",
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
