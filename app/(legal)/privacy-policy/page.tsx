// Legal text: components/legal/PrivacyPolicy.tsx | title/description: content/legal.ts
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["privacy-policy"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/privacy-policy", defaultImage: true });

export default function Page() {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: page.name, href: "/privacy-policy" }]} />
      </div>
      <PrivacyPolicy />
    </>
  );
}
