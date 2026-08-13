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
};

// 2. Main Navigation Links
export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        title: "Shopify Funnels",
        href: "/services/shopify-funnels",
        description: "High-converting Shopify landing pages & custom funnels.",
      },
      {
        title: "Web Development",
        href: "/services/web-development-service",
        description: "Custom web applications built with Next.js & React.",
      },
      {
        title: "Graphic Design",
        href: "/services/graphic-design",
        description: "Brand identity, visual design & digital assets.",
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
  { label: "Web Development", href: "/category/web-development" },
  { label: "JavaScript & React", href: "/category/javascript" },
  { label: "Next.js & Full-Stack", href: "/category/nextjs" },
  { label: "Developer Tools", href: "/tools" },
  { label: "Coding Tutorials", href: "/category/tutorials" },
] as const;

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
] as const;

export const BOTTOM_BAR_SOCIALS: readonly FooterLink[] = [
  { label: "GitHub", href: "https://github.com/gadgetcrunchie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mzadev/" },
  { label: "YouTube", href: "https://www.youtube.com/@mzadev" },
] as const;