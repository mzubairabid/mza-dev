// app/work/page.tsx — portfolio. Case studies: content/case-studies.ts
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/sections/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudies, workPage } from "@/content/case-studies";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: workPage.metaTitle,
  description: workPage.metaDescription,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={itemListSchema("Case studies", caseStudies.map((c) => ({ name: c.name, href: `/${c.slug}` })))} />
      <PageHero
        crumbs={[{ name: "Work", href: "/work" }]}
        title={workPage.h1}
        intro={workPage.intro}
        actions={
          <>
            <ButtonLink href={site.social.upwork} variant="outline">
              Reviews on Upwork
            </ButtonLink>
            <ButtonLink href={site.social.fiverr} variant="outline">
              Profile on Fiverr
            </ButtonLink>
          </>
        }
      />
      <section className="section">
        <div className="container-site">
          <CaseStudyGrid items={caseStudies} headingLevel="h2" />
        </div>
      </section>
      <CTABand />
    </>
  );
}
