// components/sections/PageHero.tsx — har inner page ka top: breadcrumb, H1, intro, CTAs, image
import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";

export function PageHero({
  crumbs,
  title,
  intro,
  image,
  actions,
  meta,
}: {
  crumbs: Crumb[];
  title: string;
  intro: ReactNode;
  image?: { src: string; alt: string };
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="container-site pt-6 pb-12 md:pb-16">
        <Breadcrumbs items={crumbs} className="mb-8" />
        <div className={image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]" : ""}>
          <div className="space-y-5">
            <h1 className="h1-display">{title}</h1>
            <div className="lead">{intro}</div>
            {meta}
            {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
          </div>
          {image && (
            <div className="overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
