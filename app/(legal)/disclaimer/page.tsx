// Legal text: components/legal/Disclaimer.tsx | title/description: content/legal.ts
import Disclaimer from "@/components/legal/Disclaimer";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { legalPages } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

const page = legalPages["disclaimer"];
export const metadata = buildMetadata({ title: page.title, description: page.description, path: "/disclaimer", defaultImage: true });

export default function Page() {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: page.name, href: "/disclaimer" }]} />
      </div>
      <Disclaimer />
    </>
  );
}
