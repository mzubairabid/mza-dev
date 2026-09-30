// content/about.ts — About page. Timeline aap ki asli history hai: confirm karke edit karo.
import type { FaqItem } from "@/types/content";

export const about = {
  metaTitle: "About M Zubair Abid, Web Developer Since 2019 | MZA Dev",
  metaDescription:
    "M Zubair Abid is a web developer from Hyderabad, Pakistan, building websites since 2019 with Next.js, React, WordPress and Shopify.",
  h1: "About M Zubair Abid",
  intro: [
    "I'm M Zubair Abid, the developer behind MZA Dev. I live in Hyderabad, Pakistan, and I've been building for the web since 2019.",
    "I started with C# MVC applications and SQL databases, moved into JavaScript tools and WordPress, and now build most new projects in Next.js and React. Along the way I launched my own tech site, Gadget Crunchie, which taught me how SEO works from the publisher's side.",
    "Today I work with businesses in Pakistan, the US, the UK and Europe: building websites and stores, fixing slow or broken ones, and making sure Google can find them.",
  ],
  timelineTitle: "How I got here",
  timeline: [
    { year: "2019", title: "Software development", body: "Built C# MVC web applications and worked with SQL databases and stored procedures." },
    { year: "2020", title: "Servers and data systems", body: "Managed server backups, barcode data processing and digital records systems." },
    { year: "2021", title: "JavaScript tools", body: "Built custom web tools and management dashboards with JavaScript, HTML and CSS." },
    { year: "2022", title: "Gadget Crunchie", body: "Designed and launched gadgetcrunchie.com and grew it to AdSense approval through SEO." },
    { year: "2023", title: "WordPress and WooCommerce", body: "Built WordPress themes and WooCommerce stores and worked on backend speed." },
    { year: "2024", title: "Next.js and React", body: "Moved new builds to Next.js, React and Tailwind CSS." },
    { year: "2025", title: "International clients", body: "E-commerce work for clients in Germany, localized sites and JavaScript calculators for US and UK platforms." },
    { year: "2026", title: "MZA Dev", body: "Working with clients directly and through Upwork and Fiverr, plus hosting setups with WHMCS and Proxmox." },
  ],
  principlesTitle: "How I work",
  principles: [
    { title: "One point of contact", body: "You talk to the person doing the work, from the first message to launch." },
    { title: "Scope before price", body: "Every project starts with a written scope, fixed price and timeline." },
    { title: "Nothing you can't check", body: "No invented reviews or numbers on this site. Every project links to a live site or proof where the client allows it." },
  ],
  skillsTitle: "Skills",
  skills: [
    "Next.js, React and TypeScript",
    "Node.js, Express and MongoDB",
    "Shopify and Liquid",
    "WordPress and WooCommerce",
    "Technical SEO and Core Web Vitals",
    "Structured data (JSON-LD)",
    "GA4 and Search Console",
    "Graphic design for web and social",
  ],
  faqs: [
    {
      q: "Who is M Zubair Abid?",
      a: "M Zubair Abid (Muhammad Zubair Abid) is a web developer from Hyderabad, Pakistan, and the founder of MZA Dev. He has been building websites since 2019, working with Next.js, React, Shopify and WordPress.",
    },
    {
      q: "Is MZA Dev an agency?",
      a: "No. MZA Dev is an independent studio run by M Zubair Abid. Clients work directly with him.",
    },
    {
      q: "Where can I see reviews of your work?",
      a: "Client reviews are on the Upwork and Fiverr profiles linked on this page.",
    },
  ] as FaqItem[],
};
