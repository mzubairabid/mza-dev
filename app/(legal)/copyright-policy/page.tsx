// Legal text: components/legal/CopyrightPolicy.tsx | title/description: content/legal.ts
import CopyrightPolicy from "@/components/legal/CopyrightPolicy";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["copyright-policy"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/copyright-policy", defaultImage: true });

export default function Page() {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: page.name, href: "/copyright-policy" }]} />
      </div>
      <CopyrightPolicy />
    </>
  );
}
