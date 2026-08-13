// Site Configuration & Constants

export type SiteConfig = typeof SITE_CONFIG
export type FooterLink = {
  label: string
  href: string
}

export const SITE_CONFIG = {
  name: "MZA Dev",
  owner: "MZA",
  tagline: "Web Dev & Tech Insights",
  description:
    "MZA Dev is a platform dedicated to high-performance web development, custom JavaScript tools, React tutorials, and modern UI/UX design insights.",
  email: "contact@mzadev.com",
} as const

export const FOOTER_CATEGORIES: readonly FooterLink[] = [
  { label: "Web Development", href: "/category/web-development" },
  { label: "JavaScript & React", href: "/category/javascript" },
  { label: "Next.js & Full-Stack", href: "/category/nextjs" },
  { label: "Developer Tools", href: "/tools" },
  { label: "Coding Tutorials", href: "/category/tutorials" },
] as const

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
] as const

export const BOTTOM_BAR_SOCIALS: readonly FooterLink[] = [
  { label: "GitHub", href: "https://github.com/gadgetcrunchie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mzadev/" },
  { label: "YouTube", href: "https://www.youtube.com/@mzadev" },
] as const