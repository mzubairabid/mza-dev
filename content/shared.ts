// content/shared.ts — kai pages par istemal hone wala text
import type { TextBlock } from "@/types/content";

/** Kaam ka tareeqa (home + service pages) */
export const processSteps: TextBlock[] = [
  {
    title: "Tell me what you need",
    body: "Send the details by form or WhatsApp: what the site is for, pages or features, examples you like and your deadline.",
  },
  {
    title: "Fixed quote and plan",
    body: "You get a written scope, price and timeline. Work starts only after you approve it.",
  },
  {
    title: "Build and review",
    body: "I share a preview link as the work progresses, so you can review it on your own phone and send changes.",
  },
  {
    title: "Launch and handover",
    body: "The site goes live on your domain and hosting, with Search Console and analytics set up, and the code or logins handed over.",
  },
];

export const ctaDefaults = {
  title: "Have a project in mind?",
  body: "Send a short description of what you need. You'll get a reply with questions or a quote, usually within 24 hours.",
};
