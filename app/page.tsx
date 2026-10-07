// app/page.tsx — Homepage. Text: content/home.ts
import Image from "next/image";
import Link from "next/link";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { processSteps } from "@/content/shared";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: home.metaTitle,
  description: home.metaDescription,
  path: "/",
});

export default function HomePage() {
  const [first, second, third] = home.heroImages;
  return (
    <>
      {/* Hero: asli client screenshots, koi fake stat nahi */}
      <section className="overflow-hidden border-b border-border">
        <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <h1 className="h1-display">{home.h1}</h1>
            <p className="lead">{home.intro}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Get a quote</ButtonLink>
              <WhatsAppButton text="Hi Zubair, I found you on mzadev.com. I need a website: " />
              <ButtonLink href="/work" variant="outline">
                See my work
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              {home.proofPoints.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span aria-hidden className="size-1.5 rounded-full bg-success" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto h-[20rem] w-full max-w-lg sm:h-[24rem]">
            <Link href="/farah-brand" className="rise absolute right-0 top-0 w-[70%] overflow-hidden rounded-lg border border-border bg-card shadow-lg" style={{ animationDelay: "0.2s" }}>
              <Image src={second.src} alt={second.alt} width={640} height={420} sizes="22rem" className="h-auto w-full" />
            </Link>
            <Link href="/respiro-shopify-store" className="rise absolute bottom-0 right-6 w-[60%] overflow-hidden rounded-lg border border-border bg-card shadow-lg" style={{ animationDelay: "0.35s" }}>
              <Image src={third.src} alt={third.alt} width={560} height={360} sizes="19rem" className="h-auto w-full" />
            </Link>
            <Link href="/german-desi-shop-zellingen-2025" className="rise absolute left-0 top-12 w-[72%] overflow-hidden rounded-lg border border-border bg-card shadow-xl">
              <Image src={first.src} alt={first.alt} width={680} height={440} priority sizes="(min-width: 1024px) 23rem, 72vw" className="h-auto w-full" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="services-title" className="h2-section">
              {home.servicesTitle}
            </h2>
            <Link href="/services" className="link text-sm font-medium">
              All services
            </Link>
          </div>
          <div className="mt-10">
            <ServiceGrid services={services.filter((s) => s.slug !== "graphic-design")} />
          </div>
        </div>
      </section>

      <section className="section border-t border-border" aria-labelledby="work-title">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="work-title" className="h2-section">
                {home.workTitle}
              </h2>
              <p className="lead mt-2">{home.workIntro}</p>
            </div>
            <Link href="/work" className="link text-sm font-medium">
              All case studies
            </Link>
          </div>
          <div className="mt-10">
            <CaseStudyGrid items={caseStudies.slice(0, 4)} />
          </div>
        </div>
      </section>

      <ProcessSteps title={home.processTitle} steps={processSteps} />

      <section className="section" aria-labelledby="about-title">
        <div className="container-site grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Image
            src={site.author.image}
            alt={`${site.author.name}, web developer`}
            width={220}
            height={235}
            className="rounded-xl border border-border"
          />
          <div>
            <h2 id="about-title" className="h2-section">
              Who you&apos;ll be working with
            </h2>
            <p className="lead mt-3">
              {site.author.name}, web developer in {site.author.city}, {site.author.country}. Building websites since{" "}
              {site.author.startedYear}, with work for clients in Pakistan, Germany, Italy, the US and the UK.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="outline">
                About me
              </ButtonLink>
              <ButtonLink href={site.social.upwork} variant="outline">
                Upwork profile
              </ButtonLink>
              <ButtonLink href={site.social.fiverr} variant="outline">
                Fiverr profile
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-border" aria-labelledby="stack-title">
        <div className="container-site">
          <h2 id="stack-title" className="h2-section">
            {home.stackTitle}
          </h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {home.stack.map((s) => (
              <div key={s.group} className="border-l-2 border-primary/60 pl-4">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="mt-1 text-muted-foreground">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FAQ items={home.faqs} title={home.faqTitle} />
      <CTABand />
    </>
  );
}
