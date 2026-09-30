// Legal text: components/legal/AffiliateDisclosure.tsx | title/description: content/legal.ts
import AffiliateDisclosure from "@/components/legal/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["affiliate-disclosure"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/affiliate-disclosure", defaultImage: true });

export default function Page() {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: page.name, href: "/affiliate-disclosure" }]} />
      </div>
      <AffiliateDisclosure />
    </>
  );
}
