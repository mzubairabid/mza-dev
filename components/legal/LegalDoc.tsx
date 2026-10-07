// components/legal/LegalDoc.tsx — Privacy Policy aur Terms ka design. Text: content/legal.ts
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { LEGAL_UPDATED, legalPages, type LegalDocContent, type LegalSlug } from "@/content/legal";

export function LegalDoc({ slug }: { slug: LegalSlug }) {
  const page: LegalDocContent = legalPages[slug];
  return (
    <article className="container-site max-w-3xl pt-6 pb-20">
      <Breadcrumbs items={[{ name: page.name, href: `/${slug}` }]} className="mb-8" />
      <h1 className="h1-display">{page.h1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {LEGAL_UPDATED}</p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.intro}</p>

      <div className="mt-10 space-y-10">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
            {s.points && (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            {s.paragraphs?.map((para) => (
              <p key={para} className="mt-4 leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
