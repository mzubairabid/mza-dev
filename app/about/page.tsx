// app/about/page.tsx — Text: content/about.ts
import Image from "next/image";
import { CheckList, ContentSections } from "@/components/sections/ContentSections";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { about } from "@/content/about";
import { isFilled } from "@/lib/placeholders";
import { buildMetadata } from "@/lib/seo";
import { profileLinks, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: about.metaTitle,
  description: about.metaDescription,
  path: "/about",
  type: "profile",
});

export default function AboutPage() {
  const a = site.author;
  return (
    <>
      <section className="border-b border-border bg-card/40">
        <div className="container-site pt-6 pb-14">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} className="mb-8" />
          <div className="grid items-start gap-10 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5">
              <h1 className="h1-display">{about.h1}</h1>
              {about.intro.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/contact">Work with me</ButtonLink>
                <ButtonLink href="/work" variant="outline">
                  See my work
                </ButtonLink>
              </div>
            </div>
            <figure className="card overflow-hidden">
              <Image src={a.image} alt={`${a.name}, web developer from ${a.city}, ${a.country}`} width={345} height={369} priority className="h-auto w-full" />
              <figcaption className="space-y-1 p-5 text-sm">
                <p className="font-semibold">{a.name}</p>
                <p className="text-muted-foreground">
                  {a.jobTitle}, {a.city}, {a.country}
                </p>
                <p className="text-muted-foreground">Building websites since {a.startedYear}</p>
                {isFilled(a.education) && <p className="text-muted-foreground">{a.education}</p>}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <div className="container-site">
          <h2 id="timeline-title" className="h2-section">
            {about.timelineTitle}
          </h2>
          <ol className="mt-10 border-l-2 border-border">
            {about.timeline.map((t) => (
              <li key={t.year} className="relative pb-8 pl-8 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-primary" />
                <p className="font-serif text-xl text-primary">{t.year}</p>
                <h3 className="mt-1 font-sans text-lg font-semibold tracking-normal">{t.title}</h3>
                <p className="mt-1 max-w-2xl text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContentSections title={about.principlesTitle} items={about.principles} />

      <section className="section border-t border-border">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h2-section">{about.skillsTitle}</h2>
            <CheckList items={about.skills} className="mt-6" />
          </div>
          <div>
            <h2 className="h2-section">Find me online</h2>
            <ul className="mt-6 space-y-3">
              {profileLinks.map((p) => (
                <li key={p.label}>
                  <a href={p.href} target="_blank" rel="noopener me" className="link">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={about.faqs} title="About MZA Dev" />
      <CTABand />
    </>
  );
}
