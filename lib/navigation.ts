// 1. Navigation Types
export interface NavChildItem {
  title: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export type FooterLink = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

// 2. Main Navigation Links
export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        title: "Graphic Design",
        href: "/services/graphic-design",
        description: "Brand identity, visual design & digital assets.",
      },
      {
        title: "Shopify Funnels",
        href: "/services/shopify-funnels",
        description: "High-converting Shopify landing pages & custom funnels.",
      },
      {
        title: "Technical SEO",
        href: "/technical-seo",
        description: "Data-driven Technical SEO solutions.",
      },
      {
        title: "WordPress",
        href: "/wordpress-development",
        description: "Custom WordPress & WooCommerce Store.",
      },
      {
        title: "Web Development",
        href: "/web-development-service",
        description: "Custom web applications built with Next.js & React.",
      },
      
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    children: [
      {
        title: "HTML/CSS/JS Editor",
        href: "/tools/live-html-css-js-editor-tester",
        description: "Live browser code editor & testing environment.",
      },
      {
        title: "React Compiler",
        href: "/tools/online-react-compiler-2026",
        description: "Interactive online React code compiler.",
      },
      {
        title: "Nursery Calculator",
        href: "/tools/nursery-calculator",
        description: "Specialized plants & soil estimation tool.",
      },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

// 3. Footer Links
export const FOOTER_CATEGORIES: readonly FooterLink[] = [
  { label: "Web Development", href: "/web-development-service" },
  { label: "Html CSS JS", href: "/tools/live-html-css-js-editor-tester" },
  { label: "Next.js & Full-Stack", href: "/tools/online-react-compiler-2026" },
  { label: "Developer Tools", href: "/tools" },
  { label: "Coding", href: "/work" },
] as const;

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
] as const;

export const BOTTOM_BAR_SOCIALS: readonly FooterLink[] = [
  { 
    label: "GitHub", 
    href: "https://github.com/gadgetcrunchie", 
    target: "_blank", 
    rel: "noopener noreferrer nofollow" 
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/mzubairabid/", 
    target: "_blank", 
    rel: "noopener noreferrer nofollow" 
  },
  { 
    label: "YouTube", 
    href: "https://www.youtube.com/@mzadev", 
    target: "_blank", 
    rel: "noopener noreferrer nofollow" 
  },
] as const;