// Legal text: components/legal/TermsAndConditions.tsx | title/description: content/legal.ts
import TermsAndConditions from "@/components/legal/TermsAndConditions";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["terms-and-conditions"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/terms-and-conditions", defaultImage: true });

export default function Page() {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: page.name, href: "/terms-and-conditions" }]} />
      </div>
      <TermsAndConditions />
    </>
  );
}
