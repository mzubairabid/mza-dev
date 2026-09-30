// content/legal.ts — legal pages ka metadata (text components/legal/ me hai)
export const legalPages = {
  "privacy-policy": {
    title: "Privacy Policy | MZA Dev",
    description: "How MZA Dev collects, uses and protects personal data submitted through mzadev.com, including contact form and analytics data.",
    name: "Privacy Policy",
  },
  "terms-and-conditions": {
    title: "Terms & Conditions | MZA Dev",
    description: "The terms that apply when you use mzadev.com and when you hire MZA Dev for web development, SEO or design work.",
    name: "Terms & Conditions",
  },
  disclaimer: {
    title: "Disclaimer | MZA Dev",
    description: "Limits of responsibility for the information, free tools and guides published on mzadev.com.",
    name: "Disclaimer",
  },
  "copyright-policy": {
    title: "Copyright Policy | MZA Dev",
    description: "Copyright ownership of content, code and designs on mzadev.com, and how to report a copyright issue.",
    name: "Copyright Policy",
  },
  "affiliate-disclosure": {
    title: "Affiliate Disclosure | MZA Dev",
    description: "How affiliate links may appear on mzadev.com and how they affect, or do not affect, the recommendations made.",
    name: "Affiliate Disclosure",
  },
} as const;

export type LegalSlug = keyof typeof legalPages;
