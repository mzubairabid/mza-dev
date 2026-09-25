import { Metadata } from "next";
import HtmlCssJsEditorClient from "@/components/tools/html-css-js-editor-client";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  alternates: {
    canonical: "https://www.mzadev.com/tools/live-html-css-js-editor-tester",
  },
  openGraph: {
    title: "Online HTML CSS JS Editor & Tester | Free Real-Time Code Compiler",
    description: "Run and test front-end code instantly with zero latency.",
    url: "https://www.mzadev.com/tools/live-html-css-js-editor-tester",
    type: "website",
    images: [
      {
        url: "https://www.mzadev.com/project-images/html-css-js-code-editor-2026.webp", // Public folder me rakhi og-image ka exact URL
        width: 1200,
        height: 630,
        alt: "Online HTML CSS JS Editor & Tester",
      },
    ],
  },
};

export default function HtmlCssJsEditorToolPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-6 max-w-6xl">
        <Breadcrumbs items={[
          { name: "Tools", href: "/tools" },
          { name: "HTML CSS JS Editor & Tester", href: "/live-html-css-js-editor-tester" }]} />
      </div>
  
      <HtmlCssJsEditorClient />;
  </>
  );
}