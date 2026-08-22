import { Metadata } from "next";
import HtmlCssJsEditorClient from "@/components/tools/html-css-js-editor-client";

export const metadata: Metadata = {
  title: "Free Online HTML CSS JS Code Editor & Live Tester",
  description:
    "Test and execute HTML, CSS, and JavaScript code online with real-time browser preview. Fast, free, and lightweight developer IDE.",
  keywords: [
    "HTML Editor",
    "CSS Sandbox",
    "JavaScript Playground",
    "Online Code Tester",
    "Real-time HTML Compiler",
  ],
  openGraph: {
    title: "Online HTML CSS JS Editor & Tester | Free Real-Time Code Compiler",
    description: "Run and test front-end code instantly with zero latency.",
    url: "https://www.mzadev.com/tools/live-html-css-js-editor-tester",
    type: "website",
    images: [
      {
        url: "https://www.mzadev.com//project-images/html-css-js-code-editor-2026.webp", // Public folder me rakhi og-image ka exact URL
        width: 1200,
        height: 630,
        alt: "Online HTML CSS JS Editor & Tester",
      },
    ],
  },
};

export default function HtmlCssJsEditorToolPage() {
  return <HtmlCssJsEditorClient />;
}