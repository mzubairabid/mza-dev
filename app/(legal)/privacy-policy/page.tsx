// Text: content/legal.ts | Design: components/legal/LegalDoc.tsx
import { LegalDoc } from "@/components/legal/LegalDoc";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["privacy-policy"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/privacy-policy", noindex: true });

export default function Page() {
  return <LegalDoc slug="privacy-policy" />;
}
