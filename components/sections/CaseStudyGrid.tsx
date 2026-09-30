// components/sections/CaseStudyGrid.tsx — case study cards (home, /work, service pages)
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/content";

export function CaseStudyGrid({ items, headingLevel = "h3" }: { items: CaseStudy[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((c) => (
        <li key={c.slug}>
          <Link href={`/${c.slug}`} className="card group block h-full overflow-hidden transition-colors hover:border-primary">
            <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted">
              <Image
                src={c.heroImage}
                alt={c.heroImageAlt}
                width={800}
                height={500}
                sizes="(min-width: 768px) 36rem, 100vw"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                {c.platform} <span aria-hidden>|</span> {c.location}
              </p>
              <H className="mt-1 font-sans text-xl font-semibold tracking-normal group-hover:text-primary">{c.name}</H>
              <p className="mt-2 leading-relaxed text-muted-foreground">{c.cardLine}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">Read the case study</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
