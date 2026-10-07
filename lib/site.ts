// lib/site.ts
// =====================================================================
// Poori site ki settings EK jagah. Naam, URL, contact, profiles,
// nav menu, footer aur tracking IDs yahin se badlo.
// "[ ... ]" = abhi khali hai. Khali value site par nahi dikhti.
// =====================================================================

export const site = {
  name: "MZA Dev",
  url: "https://www.mzadev.com", // end me "/" nahi
  locale: "en_US",
  description:
    "MZA Dev is the web development studio of Muhammad Zubair Abid: Next.js, Shopify and WordPress websites, plus technical SEO, for businesses in Pakistan, the US and the UK.",
  foundingYear: "2019",

  author: {
    name: "Muhammad Zubair Abid",
    alternateName: "M Zubair Abid",
    jobTitle: "Web Developer",
    image: "/project-images/author-mza.webp",
    startedYear: 2019,
    city: "Hyderabad",
    region: "Sindh",
    country: "Pakistan",
    countryCode: "PK",
    /** Khali = site par nahi dikhta. Degree dikhani ho to yahan likho. */
    education: "",
  },

  contact: {
    email: "contact@mzadev.com",
    /** Sirf digits, country code ke sath, "+" ke baghair. Misal: 923001234567 */
    whatsapp: "923341308684",
    /** Site par dikhne wala number. Misal: +92 300 1234567 */
    whatsappDisplay: "+92 334 1308684",
    responseTime: "within 24 hours",
    hours: "Mon–Sat, 10am–8pm Pakistan time (PKT)",
  },

  blogUrl: "https://blog.mzadev.com",

  social: {
    upwork: "https://www.upwork.com/freelancers/~018cd50705508ffb52",
    fiverr: "https://www.fiverr.com/mzaabid",
    linkedin: "https://www.linkedin.com/in/mzubairabid/",
    github: "https://github.com/mzubairabid",
    youtube: "https://www.youtube.com/@mzadev",
  },

  tracking: {
    ga4: "G-W9DXZQFC4F",
    googleVerification: "MdNjiJrq6RgpQg24D5pfbwXpR1qP0RRSRaABJOVUS60",
    /** Bing Webmaster Tools → meta tag ka "content" */
    bingVerification: "[BING_VERIFICATION_CODE]",
  },
} as const;

export type NavLink = { label: string; href: string; description?: string; external?: boolean };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/web-development-service", description: "Next.js & React websites and web apps" },
      { label: "Shopify Stores & Funnels", href: "/shopify-funnels", description: "Store setup, custom Liquid, funnel pages" },
      { label: "WordPress & WooCommerce", href: "/wordpress-development", description: "Lightweight builds and speed fixes" },
      { label: "Technical SEO", href: "/technical-seo", description: "Indexing, Core Web Vitals, schema" },
      // Graphic design menu se hata diya (page live hai, footer aur /services mein link hai)
    ],
  },
  { label: "Work", href: "/work" },
  // Tools menu se hata diye. Pages live hain: footer → "Free tools" (/tools)
  { label: "About", href: "/about" },
  { label: "Blog", href: site.blogUrl, external: true },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services" },
      { label: "Web Development", href: "/web-development-service" },
      { label: "Shopify Stores & Funnels", href: "/shopify-funnels" },
      { label: "WordPress & WooCommerce", href: "/wordpress-development" },
      { label: "Technical SEO", href: "/technical-seo" },
      { label: "Graphic Design", href: "/graphic-design" },
    ],
  },
  {
    title: "MZA Dev",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Free tools", href: "/tools" },
      { label: "Blog", href: site.blogUrl, external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

/** Schema "sameAs" + footer icons */
export const profileLinks = [
  { label: "Upwork", href: site.social.upwork },
  { label: "Fiverr", href: site.social.fiverr },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "YouTube", href: site.social.youtube },
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path === "/" ? "" : path}`;
}

export function whatsappLink(text?: string) {
  const n = site.contact.whatsapp;
  if (n.includes("[")) return null;
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${n}${q}`;
}
