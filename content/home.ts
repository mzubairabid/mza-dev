// content/home.ts — homepage ka text
import type { FaqItem } from "@/types/content";

export const home = {
  metaTitle: "Web Developer for Next.js, Shopify & WordPress | MZA Dev",
  metaDescription:
    "Muhammad Zubair Abid builds fast Next.js, Shopify and WordPress websites for businesses in Pakistan, the US and the UK. Building websites since 2019.",
  h1: "Websites and online stores that load fast and bring in leads",
  intro:
    "I'm Muhammad Zubair Abid, a web developer from Hyderabad, Pakistan. Since 2019 I've been building Next.js, Shopify and WordPress sites for businesses in Pakistan, the US, the UK and Europe, with technical SEO built in from the start.",
  heroImages: [
    { src: "/project-images/desi-shopzellingen-hero.webp", alt: "Desi Shop Zellingen WooCommerce store" },
    { src: "/project-images/farah-brand-2026-hero.webp", alt: "Farah Brand online store" },
    { src: "/project-images/respiro-hero-section.webp", alt: "Blueprint Respiro custom Shopify page" },
  ],
  proofPoints: [
    "Building websites since 2019",
    "Client work for stores in Germany and Pakistan",
    "Hire directly or through Upwork and Fiverr",
  ],
  servicesTitle: "What I can build for you",
  workTitle: "Recent work",
  workIntro: "Real projects with the problem, the work and the live site.",
  processTitle: "How a project works",
  stackTitle: "Tools I work with",
  stack: [
    { group: "Websites and apps", items: "Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB" },
    { group: "Stores and CMS", items: "Shopify and Liquid, WordPress, WooCommerce" },
    { group: "SEO and analytics", items: "Google Search Console, GA4, PageSpeed Insights, Rank Math, Semrush, Ahrefs" },
    { group: "Hosting", items: "Hostinger, Cloudflare, Vercel, Netlify" },
  ],
  faqTitle: "Common questions",
  faqs: [
    {
      q: "Who is MZA Dev?",
      a: "MZA Dev is the web development studio of Muhammad Zubair Abid, a web developer based in Hyderabad, Pakistan. He has been building websites since 2019 and works with Next.js, React, Shopify and WordPress.",
    },
    {
      q: "Which countries do you work with?",
      a: "Clients are mainly in Pakistan, the United States, the United Kingdom and Europe. Work is done remotely, with calls and updates on WhatsApp, email or Zoom.",
    },
    {
      q: "Which platform should I choose: Next.js, Shopify or WordPress?",
      a: "Shopify suits most online stores, WordPress suits sites you want to edit yourself, and Next.js suits sites where speed and custom features matter most. I'll recommend one after hearing what you need.",
    },
    {
      q: "How do I start a project?",
      a: "Send your requirements through the contact form or WhatsApp. You'll get a written scope, a fixed price and a timeline before any work starts.",
    },
    {
      q: "Can I hire you through Upwork or Fiverr?",
      a: "Yes. You can hire directly or through Upwork or Fiverr if you prefer their payment protection. Links to both profiles are on the contact page.",
    },
    {
      q: "Do you offer support after the website is live?",
      a: "Yes. Every package includes a period of free fixes after launch, and ongoing changes can be done per task or on a monthly plan.",
    },
  ] as FaqItem[],
};
