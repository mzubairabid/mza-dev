// content/case-studies.ts
// =====================================================================
// Har case study ka poora text. Nayi case study = is array me naya object.
// Page, card, sitemap, schema aur OG image khud ban jate hain.
//
// ⚠️ SIRF SACH:
//  - "results": sirf wo nateeja jo aap saboot ke sath dikha sakte ho.
//    "[...]" wali line site par NAHI dikhti.
//  - "testimonial": approved: true tabhi jab client ne ijazat di ho.
// =====================================================================
import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  // ------------------------------------------------------------------
  // Client ka naam client ki marzi se nahi dikhaya gaya.
  {
    slug: "us-retreat-center-wordpress-speed",
    name: "US Retreat Center: WordPress Speed",
    metaTitle: "WordPress Speed Fix: Mobile Score 46 to 94 | MZA Dev",
    metaDescription:
      "How I took a US retreat center's WordPress site from 46 to 94 on mobile PageSpeed by removing heavy plugins and setting up LiteSpeed Cache properly.",
    h1: "WordPress speed optimization: mobile score from 46 to 94",
    summary:
      "A US-based retreat center hired me on Upwork because their WordPress site was slow on mobile. Most of the problem was plugins: several were heavy, and some were doing the same job twice. After a cleanup, hosting-level caching and a careful LiteSpeed Cache setup, the mobile PageSpeed score went from 46 to 94.",
    cardLine: "Plugin cleanup and caching took a slow WordPress site from 46 to 94 on mobile.",
    client: "US retreat center (name withheld at the client's request)",
    location: "United States",
    industry: "Wellness and retreats",
    year: "2026",
    platform: "WordPress",
    projectType: "Client project (via Upwork)",
    serviceSlugs: ["wordpress-development", "technical-seo"],
    heroImage: "/project-images/wordpress-speed-before-after.webp",
    heroImageAlt: "Original PageSpeed Insights reports before and after the WordPress speed fix, with the URL blurred",
    gallery: [
      { src: "/project-images/upwork-review-speed-client.webp", alt: "5-star Upwork review from the US retreat center client" },
    ],
    liveUrl: "",
    proofUrl: "https://www.upwork.com/freelancers/~018cd50705508ffb52",
    proofLabel: "Reviews on Upwork",
    challenge:
      "The site scored 46 for mobile performance in PageSpeed Insights. Largest Contentful Paint in the lab test was 14.7 seconds, and the layout jumped while loading (CLS 0.262). The site had grown over time: plugins had been added for every new feature, and a few of them overlapped. Every extra plugin added scripts and styles to every page, whether the page needed them or not.",
    work: [
      {
        title: "Plugin audit with the client",
        body: "I listed every active plugin, what it did and what it cost in load time. Then I walked the client through which ones they actually needed. Heavy plugins and duplicates were removed only after the client agreed.",
      },
      {
        title: "Hosting-level caching",
        body: "I configured the caching settings on the hosting side, so pages are served from cache instead of being rebuilt by WordPress on every visit.",
      },
      {
        title: "LiteSpeed Cache setup",
        body: "I set up LiteSpeed Cache for page caching and CSS/JS optimization. One of the CSS options broke the page layout during testing, so I adjusted those settings until the site looked right and stayed fast. A high score is useless if visitors see a broken page.",
      },
    ],
    stack: ["WordPress", "LiteSpeed Cache", "Hosting cache", "PageSpeed Insights", "Lighthouse"],
    results: [
      "Mobile PageSpeed performance score: 46 to 94 (lab test)",
      "First retest after the cleanup: 90, with LCP down from 14.7s to 1.8s",
      "Layout shift (CLS) down from 0.262 to 0",
      "No features lost: only plugins the client agreed to remove were taken out",
    ],
    testimonial: {
      quote:
        "Best SEO professional I have found. Hired as a \"conversion specialist\" and I am not disappointed. Fixed multiple issues with outdated pages and website. Replaced plugins with metrics that were valuable to conversions and updated pages.",
      author: "Client on Upwork",
      role: "US retreat center, 5.0 rating (Apr–Jun 2026)",
      approved: true,
    },
  },

  // ------------------------------------------------------------------
  {
    slug: "german-desi-shop-zellingen-2025",
    name: "Desi Shop Zellingen",
    metaTitle: "Desi Shop Zellingen: WooCommerce & PayPal Fix | MZA Dev",
    metaDescription:
      "How MZA Dev redesigned the Desi Shop Zellingen WooCommerce store in Germany, fixed its PayPal checkout errors and cleaned up its on-page SEO.",
    h1: "Desi Shop Zellingen: WooCommerce redesign and PayPal checkout fix",
    summary:
      "A South Asian grocery store in Germany was losing orders because PayPal payments were failing at checkout. I fixed the payment integration, redesigned the store and cleaned up its basic on-page SEO.",
    cardLine: "PayPal checkout fix and full redesign for a grocery store in Germany.",
    client: "Desi Shop Zellingen",
    location: "Zellingen, Germany",
    industry: "Grocery e-commerce",
    year: "2025",
    platform: "WordPress / WooCommerce",
    projectType: "Client project (via Fiverr)",
    serviceSlugs: ["wordpress-development", "technical-seo"],
    heroImage: "/project-images/desi-shopzellingen-hero.webp",
    heroImageAlt: "Desi Shop Zellingen WooCommerce store homepage after the redesign",
    gallery: [
      { src: "/project-images/desi-shop-zellingen-2025.webp", alt: "Desi Shop Zellingen product listing page" },
      { src: "/project-images/desi-shopzellingen-footer.webp", alt: "Desi Shop Zellingen store footer" },
    ],
    liveUrl: "https://desishopzellingen.com/",
    proofUrl: "https://www.fiverr.com/s/X0LERVk",
    proofLabel: "Fiverr order",
    challenge:
      "Customers could add products to the cart, but PayPal payments failed at checkout because of callback and API errors. Every failed payment was a lost order. The store design was also dated and the product pages were hard to scan on mobile.",
    work: [
      {
        title: "PayPal integration fix",
        body: "Traced the checkout failures to the PayPal callback and API configuration and fixed them, so payments complete and orders are recorded in WooCommerce.",
      },
      {
        title: "Full store redesign",
        body: "Updated the layout, typography and product pages to make browsing and checkout clearer, especially on mobile.",
      },
      {
        title: "Basic technical SEO",
        body: "Added proper meta titles and descriptions, image alt text and speed tweaks so the store is easier for Google to understand.",
      },
    ],
    stack: ["WordPress", "WooCommerce", "PayPal", "PHP", "CSS"],
    results: [
      "PayPal checkout working again, so customers can complete orders",
      "[NATEEJA: e.g. orders per week before vs after — sirf agar client se confirm ho]",
    ],
    testimonial: {
      quote: "[CLIENT KA ASLI REVIEW — Fiverr review se copy karo]",
      author: "[CLIENT NAME]",
      role: "Desi Shop Zellingen, Germany",
      approved: false,
    },
  },

  // ------------------------------------------------------------------
  {
    slug: "farah-brand",
    name: "Farah Brand",
    metaTitle: "Farah Brand: WordPress Store for Kids' Frocks | MZA Dev",
    metaDescription:
      "Farah Brand online store for handcrafted baby and girls' frocks, designed and built on WordPress by MZA Dev. See the design, features and tech stack.",
    h1: "Farah Brand: online store for handcrafted girls' frocks",
    summary:
      "Farah Brand sells handcrafted frocks for girls up to 15 years old, made with katan silk and gota work. I designed and built their WooCommerce store to present the collection by age and occasion.",
    cardLine: "WooCommerce store for a handcrafted children's clothing brand.",
    client: "Farah Brand",
    location: "Pakistan",
    industry: "Children's clothing",
    year: "2026",
    platform: "WordPress / WooCommerce",
    projectType: "Client project (via Fiverr)",
    serviceSlugs: ["wordpress-development", "graphic-design"],
    heroImage: "/project-images/farah-brand-2026-hero.webp",
    heroImageAlt: "Farah Brand store homepage showing handcrafted girls' frocks",
    gallery: [
      { src: "/project-images/farah-brand-2026.webp", alt: "Farah Brand product collection page" },
      { src: "/project-images/farah-brand-2026-footer.webp", alt: "Farah Brand store footer" },
    ],
    liveUrl: "https://farahbrand.com/",
    proofUrl: "",
    proofLabel: "",
    challenge:
      "The brand needed an online store that feels like a boutique, not a generic template, and makes it easy for parents to find the right size and style for ages 0 to 15.",
    work: [
      {
        title: "Brand-led design",
        body: "A layout that reflects traditional Pakistani craftsmanship, with typography and colours chosen for a premium children's clothing brand.",
      },
      {
        title: "Catalogue by age and occasion",
        body: "Product categories and filters organised by age bracket and occasion, including festive wear and teen collections.",
      },
      {
        title: "Mobile-first product grid",
        body: "A responsive grid and product pages built for browsing on phones, where most of the brand's customers shop.",
      },
    ],
    stack: ["WordPress", "WooCommerce", "Elementor Pro"],
    results: ["[NATEEJA: e.g. launch date, orders/inquiries after launch — sirf verified]"],
  },

  // ------------------------------------------------------------------
  {
    slug: "karachi-mart-2026",
    name: "Karachi Mart",
    metaTitle: "Karachi Mart: Grocery Store Frontend Build | MZA Dev",
    metaDescription:
      "Karachi Mart grocery store frontend built by the MZA Dev team with HTML, CSS and JavaScript, with area-based filtering and a fast shopping flow.",
    h1: "Karachi Mart: grocery store frontend with area-based delivery",
    summary:
      "A neighbourhood grocery store frontend for Karachi, built with plain HTML, CSS and JavaScript. Shoppers pick their delivery area first, then browse categories, deals and monthly ration bundles.",
    cardLine: "Fast grocery storefront with delivery-area selection for Karachi.",
    client: "Karachi Mart",
    location: "Karachi, Pakistan",
    industry: "Grocery delivery",
    year: "2026",
    platform: "HTML, CSS, JavaScript",
    // ⚠️ Ye kaam team member ne kiya hai. Us ka naam builtBy me likho (credit zaroori hai).
    projectType: "MZA Dev team project",
    builtBy: "[TEAM MEMBER NAME]",
    workTitle: "What was built",
    serviceSlugs: ["web-development-service"],
    heroImage: "/project-images/karachi-mart-hero-section.webp",
    heroImageAlt: "Karachi Mart grocery store homepage with delivery area selector",
    gallery: [{ src: "/project-images/karachi-mart-categories.webp", alt: "Karachi Mart product categories grid" }],
    liveUrl: "https://nimble-naiad-1bcc26.netlify.app/",
    proofUrl: "",
    proofLabel: "",
    challenge:
      "Grocery delivery in Karachi depends on the neighbourhood. Shoppers need to know straight away whether their area is covered, and the store has to stay fast on budget phones and mobile data.",
    work: [
      {
        title: "Delivery area selector",
        body: "Shoppers choose their area first, so they only see what can be delivered to them.",
      },
      {
        title: "Category navigation",
        body: "A clean grid for dairy, beverages, cooking oil, pulses, household items and fresh produce.",
      },
      {
        title: "Deals and ration bundles",
        body: "Dedicated blocks for monthly ration bundles and buy-one-get-one offers.",
      },
      {
        title: "No framework, fast load",
        body: "Plain HTML, CSS and JavaScript, so there is very little code for a phone to download.",
      },
    ],
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Netlify"],
    results: [],
  },

  // ------------------------------------------------------------------
  {
    slug: "respiro-shopify-store",
    name: "Blueprint Respiro",
    metaTitle: "Respiro: Premium Shopify Page & Funnel Build | MZA Dev",
    metaDescription:
      "How MZA Dev replaced a stock Shopify theme with a custom Liquid design and Funnelish checkout flow for the Blueprint Respiro partnership offer.",
    h1: "Blueprint Respiro: premium Shopify design and funnel",
    summary:
      "A Fiverr client sold a high-value partnership programme through a stock Shopify theme that looked like every other store. I built a custom design in Shopify Liquid and connected Funnelish for the checkout flow.",
    cardLine: "Custom Liquid design and Funnelish funnel for a premium offer.",
    client: "Blueprint Respiro",
    location: "Italy",
    industry: "E-commerce / partnership programme",
    year: "2026",
    platform: "Shopify",
    projectType: "Client project (via Fiverr)",
    serviceSlugs: ["shopify-funnels"],
    heroImage: "/project-images/respiro-hero-section.webp",
    heroImageAlt: "Blueprint Respiro custom Shopify page hero section",
    gallery: [
      { src: "/project-images/Partnership-Blueprint-respiro.webp", alt: "Blueprint Respiro partnership offer page" },
      { src: "/project-images/respiro-shopify-funnel.webp", alt: "Respiro Shopify funnel flow" },
      { src: "/project-images/respiroitalia-products-respiro-nastro-premium.webp", alt: "Respiro product page" },
    ],
    liveUrl: "[LIVE URL]",
    proofUrl: "",
    proofLabel: "",
    challenge:
      "For a high-ticket offer, the page has to earn trust before the buyer looks at the price. A stock theme with default sections made the programme look average.",
    work: [
      {
        title: "Custom Liquid design",
        body: "Theme defaults were overridden and the key sections were written in Shopify Liquid, giving full control over layout and typography.",
      },
      {
        title: "Editorial layout",
        body: "The page moved away from the standard product grid to a layout with clear hierarchy, whitespace and trust elements placed where buyers look.",
      },
      {
        title: "Funnelish checkout flow",
        body: "Funnelish was connected for funnel routing, checkout and upsells without adding weight to the main page.",
      },
      {
        title: "Mobile-first and lean",
        body: "Layouts built from small screens up, with images lazy-loaded and third-party scripts deferred.",
      },
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "Funnelish"],
    results: ["[NATEEJA: e.g. conversion rate before vs after — sirf verified]"],
  },
  // ------------------------------------------------------------------
  {
    slug: "hyderabad-car-rental-website",
    name: "Indus Drive Car Rental",
    metaTitle: "Car Rental Website in Next.js for Hyderabad | MZA Dev",
    metaDescription:
      "Case study: a rent a car website with instant pricing, WhatsApp booking and an owner dashboard, built in Next.js by MZA Dev in Hyderabad, Pakistan.",
    h1: "Car rental website for Hyderabad with instant pricing and an owner dashboard",
    summary:
      "Indus Drive is a car rental website I designed and built as a working demo for rent a car businesses in Hyderabad, Sindh. Customers pick a service and a car, see the full price instantly, and send a ready-written booking request. The owner gets a dashboard to manage bookings and the fleet.",
    cardLine: "Rent a car demo with instant pricing, WhatsApp booking and an owner dashboard.",
    client: "Indus Drive Rentals",
    location: "Hyderabad, Pakistan",
    industry: "Car rental and transport",
    year: "2026",
    platform: "Next.js, React, TypeScript",
    projectType: "Portfolio demo (not a real company)",
    serviceSlugs: ["web-development-service"],
    heroImage: "/project-images/hyderabad-car-rental-hero.webp",
    heroImageAlt: "Indus Drive car rental website homepage for Hyderabad with instant price widget",
    gallery: [
      { src: "/project-images/hyderabad-car-rental-owner-dashboard.webp", alt: "Owner dashboard with revenue chart, fleet status and bookings table" },
      { src: "/project-images/hyderabad-car-rental-booking-page.webp", alt: "Booking page with live price summary for a wedding booking" },
    ],
    liveUrl: "https://hyd-rental-car.vercel.app/",
    proofUrl: "",
    proofLabel: "",
    challenge:
      "Most rent a car businesses in Pakistan still run on phone calls and WhatsApp. A customer asks for the rate, waits for a reply, then asks again about fuel, driver charges and the Karachi airport fare, and many give up and call the next company. Owners have the opposite problem: bookings sit in chat threads and notebooks, so it is hard to see which car is free and what the business earned this week. The goal was a website that answers the price question before the customer has to ask, and gives the owner one place to manage the work.",
    workTitle: "What was built",
    work: [
      {
        title: "Instant price widget on the homepage",
        body: "Visitors choose a service, a car and a date from the first screen and get a price in seconds, instead of waiting for a reply.",
      },
      {
        title: "Four services in one booking flow",
        body: "City pick and drop by the hour or day, Hyderabad to Karachi airport transfers on the M-9, wedding and event cars with flower decoration, and self-drive rental with a security deposit.",
      },
      {
        title: "Fleet with filters and car detail pages",
        body: "Six local favourites, from Suzuki Mehran to Honda Civic. Customers filter by size, gearbox and self-drive, and each car has its own page with every rate listed.",
      },
      {
        title: "Booking page with live price calculation",
        body: "The total updates as the customer changes hours, days, round trip, number of wedding cars or decoration. Phone numbers are checked against the Pakistani mobile format.",
      },
      {
        title: "WhatsApp-ready booking message",
        body: "The request is written for the customer with service, car, date, pickup area, flight number and total. On a live business site it opens WhatsApp addressed to the owner; the demo shows a preview.",
      },
      {
        title: "Owner dashboard",
        body: "Weekly revenue chart, fleet status for each car and driver, and a bookings table with status filters, search and one-click actions to confirm, start or complete a trip.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "ESLint", "Playwright", "GitHub", "Vercel"],
    results: [],
    extraSections: [
      {
        title: "How it was built",
        body: "The demo went from plan to live deploy in one day. A clear scope, with no database and no login, made that possible.",
        numbered: true,
        points: [
          "Plan: services, car list, pricing rules and pages, based on how rent a car businesses in Hyderabad take bookings.",
          "Design: a visual identity drawn from Sindhi ajrak, with indigo, madder red and saffron, so it doesn't look like a generic template.",
          "Build: pages, reusable components, pricing logic and the dashboard in Next.js and TypeScript.",
          "Test: production build, ESLint, and screenshot checks on desktop and a 390px phone screen.",
          "Deploy: pushed to GitHub and deployed on Vercel.",
        ],
      },
      {
        title: "Speed, SEO and accessibility decisions",
        points: [
          "No database in the demo. Cars, prices and sample bookings live in TypeScript files, so the site never goes down and costs nothing to host.",
          "Static pages. The homepage, fleet and every car page are generated at build time, so they load fast on mobile data.",
          "Accessible by default: real form labels, keyboard focus styles, clear validation messages and reduced motion respected.",
          "The demo is set to noindex so it is never mistaken for a real rental company in Google.",
        ],
      },
      {
        title: "What a real client version adds",
        body: "For a real rent a car business, the same site can be connected to a database and owner login, send booking alerts by WhatsApp or SMS, take advance payments for weddings through JazzCash or Easypaisa, and add Urdu and Sindhi pages. That version is scoped and quoted per business, because the right features depend on fleet size and how bookings are handled today.",
      },
    ],
    faqs: [
      {
        q: "Who built the Indus Drive car rental website?",
        a: "It was designed and developed by Muhammad Zubair Abid of MZA Dev, a web developer based in Hyderabad, Pakistan, who has been building websites since 2019.",
      },
      {
        q: "Is Indus Drive a real rent a car company?",
        a: "No. Indus Drive is a portfolio demo that shows what a car rental website can do. The design, booking flow and dashboard are real and can be built for an actual business.",
      },
      {
        q: "Can you build a car rental website for my city?",
        a: "Yes. The cars, services, pickup areas and prices are all editable, so the same system works for Karachi, Lahore, Islamabad or any other city, in Pakistan or abroad.",
      },
      {
        q: "Can customers book a rental car through WhatsApp?",
        a: "Yes. The booking page writes the full request, including car, date, pickup and price, and opens WhatsApp addressed to the owner, which is how most Pakistani customers prefer to book.",
      },
      {
        q: "How much does a car rental website cost in Pakistan?",
        a: "It depends on the features. A booking website without a database costs less than one with owner login, online payments and SMS alerts. Send your requirements and you get a fixed quote before any work starts.",
      },
    ],
  },
];

export const workPage = {
  metaTitle: "Portfolio & Client Case Studies | MZA Dev",
  metaDescription:
    "Client projects by MZA Dev: WooCommerce, Shopify, WordPress and custom JavaScript builds, each with the problem, the work done and the result.",
  h1: "Work and case studies",
  intro:
    "Each project below shows what the client needed, what I built or fixed, and the tools used. Live links are included wherever the site is still online.",
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
