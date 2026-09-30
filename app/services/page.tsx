// app/services/page.tsx — services hub. Text: content/services.ts
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/sections/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { services, servicesHub } from "@/content/services";
import { processSteps } from "@/content/shared";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: servicesHub.metaTitle,
  description: servicesHub.metaDescription,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={itemListSchema("Services", services.map((s) => ({ name: s.name, href: `/${s.slug}` })))} />
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} title={servicesHub.h1} intro={servicesHub.intro} />
      <section className="section">
        <div className="container-site">
          <ServiceGrid services={services} headingLevel="h2" />
        </div>
      </section>
      <ProcessSteps title="How every project works" steps={processSteps} />
      <CTABand />
    </>
  );
}
