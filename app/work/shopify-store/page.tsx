import { Metadata } from "next";

// Auto SEO Metadata for this specific Case Study
export const metadata: Metadata = {
  title: "Dubai Security Firm Web Design Case Study | MZA Dev",
  description: "Detailed case study on building a high-performance 12-page multilingual web infrastructure.",
  openGraph: {
    title: "Dubai Security Firm Web Design Case Study | MZA Dev",
    description: "Detailed case study on building a high-performance 12-page multilingual web infrastructure.",
  },
};

export default function CaseStudyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Dubai Security Firm Architecture</h1>
      <p className="text-muted-foreground mb-8">Client Project • Next.js & Tailwind</p>
      
      {/* Dynamic Content / Case Study Breakdown */}
      <div className="prose max-w-none">
        <h2>Overview</h2>
        <p>Project details, challenge, and execution process...</p>
      </div>
    </article>
  );
}