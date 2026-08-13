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
