// content/tools.ts — /tools page
import type { Tool } from "@/types/content";

export const toolsPage = {
  metaTitle: "Free Developer Tools: HTML Editor & React Compiler | MZA Dev",
  metaDescription:
    "Free browser tools by MZA Dev: a live HTML/CSS/JS editor, an online React compiler and a UK nursery profit calculator. No signup needed.",
  h1: "Free tools",
  intro: "Browser-based tools I built and keep free to use. No signup, nothing to install.",
  customToolPitch: {
    title: "Need a calculator or tool on your own site?",
    body: "A good calculator answers a customer's question and collects leads at the same time. I build custom tools like these for business websites.",
  },
};

export const tools: Tool[] = [
  {
    slug: "live-html-css-js-editor-tester",
    name: "Live HTML, CSS & JS Editor",
    description: "Write HTML, CSS and JavaScript and see the result instantly in the browser.",
    image: "/project-images/html-css-js-code-editor-2026.webp",
    imageAlt: "Live HTML CSS JS editor interface",
  },
  {
    slug: "online-react-compiler-2026",
    name: "Online React Compiler",
    description: "Write and run React components with JSX online, with a live preview.",
    image: "/project-images/online-react-compiler.webp",
    imageAlt: "Online React compiler interface",
  },
  {
    slug: "nursery-calculator",
    name: "UK Nursery Profit Calculator",
    description: "Estimate revenue, costs and profit for a UK childcare nursery and export a PDF report.",
    image: "/project-images/openanursery-co-uk-nursery-profit-calculation-updated-version.webp",
    imageAlt: "UK nursery profit calculator",
  },
];
