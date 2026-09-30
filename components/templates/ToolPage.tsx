// components/templates/ToolPage.tsx — har tool page ka wrapper (breadcrumb + schema + CTA)
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/sections/JsonLd";
import { toolsPage } from "@/content/tools";
import { absoluteUrl } from "@/lib/site";
import type { Tool } from "@/types/content";

export function ToolPage({ tool, category, children }: { tool: Tool; category: string; children: ReactNode }) {
  return (
    <>
      <div className="container-site pt-6">
        <Breadcrumbs items={[{ name: "Tools", href: "/tools" }, { name: tool.name, href: `/tools/${tool.slug}` }]} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: tool.name,
          description: tool.description,
          url: absoluteUrl(`/tools/${tool.slug}`),
          applicationCategory: category,
          operatingSystem: "Any (web browser)",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: { "@id": absoluteUrl("/#person") },
        }}
      />
      {children}
      <CTABand title={toolsPage.customToolPitch.title} body={toolsPage.customToolPitch.body} whatsappText="Hi Zubair, I'd like a custom tool/calculator on my website: " />
    </>
  );
}
