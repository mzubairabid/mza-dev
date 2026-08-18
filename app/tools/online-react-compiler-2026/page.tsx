import { Metadata } from "next";
import ReactCompilerPage from "@/components/tools/react-compiler-2026-client"; // Apne folder path ke mutabiq adjust karein

// 1. Technical SEO & Metadata Configuration
export const metadata: Metadata = {
  title: "Free Online React Compiler | Write, Test & Debug React JS Online",
  description:
    "Instant browser-based React JS compiler. Test functional components, hooks, state, and UI logic in real-time with zero Node.js setup.",
  openGraph: {
    title: "Free Online React Compiler | Write, Test & Debug React JS Online",
    description:
      "Instant browser-based React JS compiler. Test functional components, hooks, state, and UI logic in real-time with zero Node.js setup.",
    type: "website",
  },
};

// 2. Strict Static Pre-rendering Config
export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      {/* 3. JSON-LD SoftwareApplication Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Online React Compiler",
            operatingSystem: "All",
            applicationCategory: "DeveloperApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* 4. Client Tool Rendering */}
      <ReactCompilerPage />
    </>
  );
}