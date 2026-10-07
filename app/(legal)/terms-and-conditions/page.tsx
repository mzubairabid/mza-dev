// Text: content/legal.ts | Design: components/legal/LegalDoc.tsx
import { LegalDoc } from "@/components/legal/LegalDoc";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["terms-and-conditions"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/terms-and-conditions", noindex: true });

export default function Page() {
  return <LegalDoc slug="terms-and-conditions" />;
}
