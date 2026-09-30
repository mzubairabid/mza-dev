// components/templates/ServicePage.tsx — SAARI service pages isi aik template se banti hain
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { CheckList, ContentSections } from "@/components/sections/ContentSections";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/sections/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTable } from "@/components/sections/PricingTable";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { getCaseStudy } from "@/content/case-studies";
import { processSteps } from "@/content/shared";
import { serviceSchema } from "@/lib/schema";
import type { CaseStudy, Service } from "@/types/content";

export function ServicePage({ service: s }: { service: Service }) {
  const related = s.relatedCaseStudies.map(getCaseStudy).filter(Boolean) as CaseStudy[];
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <PageHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: s.name, href: `/${s.slug}` },
        ]}
        title={s.h1}
        intro={s.intro}
        image={{ src: s.heroImage, alt: s.heroImageAlt }}
        actions={
          <>
            <ButtonLink href="/contact">Get a quote</ButtonLink>
            <WhatsAppButton text={s.whatsappText} />
          </>
        }
      />

      <section className="section pb-0" aria-labelledby="for-who">
        <div className="container-site grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <h2 id="for-who" className="h2-section">
            Who this is for
          </h2>
          <CheckList items={s.forWho} className="text-lg" />
        </div>
      </section>

      <ContentSections id="what" title={`What's included in ${s.name.toLowerCase()}`} items={s.offerings} />

      {related.length > 0 && (
        <section className="section border-t border-border" aria-labelledby="related-work">
          <div className="container-site">
            <h2 id="related-work" className="h2-section">
              {s.name} work
            </h2>
            <div className="mt-10">
              <CaseStudyGrid items={related} />
            </div>
          </div>
        </section>
      )}

      <ContentSections id="why" title="Why work with me" items={s.why} />
      <ProcessSteps title="How the project works" steps={processSteps} />
      <PricingTable packages={s.packages} serviceName={s.name} />

      <section className="pb-4" aria-label="Tools and platforms">
        <div className="container-site">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Tools and platforms: </span>
            {s.stack.join(", ")}
          </p>
        </div>
      </section>

      <FAQ items={s.faqs} title={`${s.name} questions`} />
      <CTABand title={`Need help with ${s.name.toLowerCase()}?`} whatsappText={s.whatsappText} />
    </>
  );
}
