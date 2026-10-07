// components/templates/CaseStudyPage.tsx — SAARI case studies isi template se
import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSections } from "@/components/sections/ContentSections";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/sections/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { getService } from "@/content/services";
import { filled, isFilled } from "@/lib/placeholders";
import { caseStudySchema } from "@/lib/schema";
import type { CaseStudy, Service } from "@/types/content";

export function CaseStudyPage({ study: c, next }: { study: CaseStudy; next?: CaseStudy }) {
  const services = c.serviceSlugs.map(getService).filter(Boolean) as Service[];
  const results = filled(c.results);
  const t = c.testimonial;
  const showTestimonial = t && t.approved && isFilled(t.quote) && isFilled(t.author);

  const facts = [
    { label: "Client", value: c.client },
    { label: "Location", value: c.location },
    { label: "Industry", value: c.industry },
    { label: "Platform", value: c.platform },
    { label: "Year", value: c.year },
    { label: "Project", value: c.projectType },
    { label: "Built by", value: c.builtBy ?? "" },
  ].filter((f) => isFilled(f.value));

  return (
    <>
      <JsonLd data={caseStudySchema(c)} />
      <PageHero
        crumbs={[
          { name: "Work", href: "/work" },
          { name: c.name, href: `/${c.slug}` },
        ]}
        title={c.h1}
        intro={c.summary}
        image={{ src: c.heroImage, alt: c.heroImageAlt }}
        actions={
          <>
            {isFilled(c.liveUrl) && (
              <ButtonLink href={c.liveUrl} variant="outline">
                Visit live site
              </ButtonLink>
            )}
            {isFilled(c.proofUrl) && (
              <ButtonLink href={c.proofUrl} variant="outline">
                {c.proofLabel || "Proof"}
              </ButtonLink>
            )}
          </>
        }
      />

      <section className="section pb-0">
        <div className="container-site grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="h2-section">The problem</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.challenge}</p>
          </div>
          <dl className="card grid grid-cols-2 gap-4 p-6 text-sm">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-muted-foreground">{f.label}</dt>
                <dd className="mt-0.5 font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContentSections id="work" title={c.workTitle ?? "What I did"} items={c.work} columns={2} />

      {c.gallery.length > 0 && (
        <section className="section pt-0" aria-label="Screenshots">
          <div className="container-site grid gap-6 md:grid-cols-2">
            {c.gallery.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-xl border border-border bg-muted">
                <Image src={g.src} alt={g.alt} width={900} height={600} sizes="(min-width: 768px) 36rem, 100vw" className="h-auto w-full" />
                <figcaption className="border-t border-border bg-card px-4 py-2 text-sm text-muted-foreground">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section border-y border-border bg-card/40">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h2-section">Tech stack</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <li key={s} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {results.length > 0 && (
            <div>
              <h2 className="h2-section">Result</h2>
              <CheckList items={results} className="mt-5 text-lg" />
            </div>
          )}
        </div>
      </section>

      {c.extraSections?.map((sec) => {
        const List = sec.numbered ? "ol" : "ul";
        return (
          <section key={sec.title} className="section pb-0">
            <div className="container-site">
              <h2 className="h2-section">{sec.title}</h2>
              {sec.body && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{sec.body}</p>}
              {sec.points && (
                <List className={`mt-5 max-w-3xl space-y-3 leading-relaxed text-muted-foreground ${sec.numbered ? "list-decimal" : "list-disc"} pl-5`}>
                  {sec.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </List>
              )}
            </div>
          </section>
        );
      })}

      {showTestimonial && (
        <section className="section">
          <figure className="container-site max-w-3xl">
            <blockquote className="font-serif text-2xl leading-snug">&ldquo;{t!.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-muted-foreground">
              {t!.author}, {t!.role}
            </figcaption>
          </figure>
        </section>
      )}

      {services.length > 0 && (
        <section className="section pb-0">
          <div className="container-site">
            <h2 className="h2-section">Related services</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="btn btn-outline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            {next && (
              <p className="mt-8 text-muted-foreground">
                Next case study:{" "}
                <Link href={`/${next.slug}`} className="link">
                  {next.name}
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      {c.faqs && c.faqs.length > 0 && <FAQ items={c.faqs} title="Common questions" />}

      <CTABand title="Want something similar?" whatsappText={`Hi Zubair, I saw the ${c.name} case study. I need: `} />
    </>
  );
}
