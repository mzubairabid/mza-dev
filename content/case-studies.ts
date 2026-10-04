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
