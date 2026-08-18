import { Metadata } from "next";
import HtmlCssJsEditorClient from "@/components/tools/html-css-js-editor-client";

export const metadata: Metadata = {
  title: "Online HTML CSS JS Editor & Tester | Free Real-Time Code Compiler",
  description:
    "Test, debug, and preview your HTML, CSS, and JavaScript code instantly in your browser. Free online code compiler built for web developers and beginners.",
  keywords: [
    "HTML Editor",
    "CSS Sandbox",
    "JavaScript Playground",
    "Online Code Tester",
    "Real-time HTML Compiler",
  ],
  openGraph: {
    title: "Online HTML CSS JS Editor & Tester",
    description: "Run and test front-end code instantly with zero latency.",
    type: "website",
  },
};

export default function HtmlCssJsEditorToolPage() {
  return <HtmlCssJsEditorClient />;
}