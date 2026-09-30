// components/sections/ServiceGrid.tsx — services ke cards (home + /services)
import Link from "next/link";
import type { Service } from "@/types/content";

export function ServiceGrid({ services, headingLevel = "h3" }: { services: Service[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/${s.slug}`}
            className="card group flex h-full flex-col p-6 transition-colors hover:border-primary"
          >
            <H className="font-sans text-lg font-semibold tracking-normal group-hover:text-primary">{s.name}</H>
            <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{s.intro.split(". ")[0]}.</p>
            <span className="mt-4 text-sm font-semibold text-primary">See {s.name.toLowerCase()} details</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
