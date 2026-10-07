// types/content.ts — content/ folder ki saari files in types ko follow karti hain.

export type FaqItem = { q: string; a: string };

export type TextBlock = {
  title: string;
  body: string;
  /** Optional internal link: { label, href } */
  link?: { label: string; href: string };
};

/**
 * Visitor ke mulk ke hisaab se currency: Pakistan = PKR, UK = GBP, baaqi sab = USD.
 * Teeno khali ("") = site "Custom quote" dikhati hai.
 * Format: "250" (sirf number, comma ke sath bhi chalega: "45,000")
 */
export type Price = { USD: string; GBP: string; PKR: string; per?: "month" };

export type Package = {
  tier: "Basic" | "Standard" | "Premium" | "Add-on";
  name: string;
  bestFor: string;
  price: Price;
  timeline: string;
  includes: string[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  navDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  forWho: string[];
  offerings: TextBlock[];
  why: TextBlock[];
  packages: Package[];
  faqs: FaqItem[];
  relatedCaseStudies: string[];
  stack: string[];
  /** WhatsApp par pehle se likha hua message */
  whatsappText: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  /** true tabhi karo jab client ne likhit ijazat di ho */
  approved: boolean;
};

export type CaseStudy = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  /** Card par dikhne wali 1 line */
  cardLine: string;
  client: string;
  location: string;
  industry: string;
  year: string;
  platform: string;
  /** "Client project" ya "Team project" */
  projectType: string;
  /** Agar kaam kisi team member ne kiya ho: us ka naam (credit dena zaroori) */
  builtBy?: string;
  /** "What I did" ya "What was built" */
  workTitle?: string;
  serviceSlugs: string[];
  heroImage: string;
  heroImageAlt: string;
  gallery: { src: string; alt: string }[];
  liveUrl: string;
  proofUrl: string;
  proofLabel: string;
  challenge: string;
  work: TextBlock[];
  stack: string[];
  /** Sirf verified nateeje. "[...]" wali lines site par nahi dikhti. */
  results: string[];
  testimonial?: Testimonial;
  /** Optional: extra sections (process, decisions, etc.) */
  extraSections?: { title: string; body?: string; points?: string[]; numbered?: boolean }[];
  /** Optional: FAQs (FAQPage schema bhi banta hai) */
  faqs?: FaqItem[];
};

export type Tool = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};
