// app/tools/page.tsx — Text: content/tools.ts
import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/sections/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { tools, toolsPage } from "@/content/tools";
import { itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: toolsPage.metaTitle, description: toolsPage.metaDescription, path: "/tools" });

export default function ToolsPage() {
  return (
    <>
      <JsonLd data={itemListSchema("Free tools", tools.map((t) => ({ name: t.name, href: `/tools/${t.slug}` })))} />
      <PageHero crumbs={[{ name: "Tools", href: "/tools" }]} title={toolsPage.h1} intro={toolsPage.intro} />
      <section className="section">
        <ul className="container-site grid gap-6 md:grid-cols-3">
          {tools.map((t) => (
            <li key={t.slug}>
              <Link href={`/tools/${t.slug}`} className="card group block h-full overflow-hidden hover:border-primary">
                <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                  <Image src={t.image} alt={t.imageAlt} width={600} height={375} sizes="(min-width: 768px) 23rem, 100vw" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="font-sans text-lg font-semibold tracking-normal group-hover:text-primary">{t.name}</h2>
                  <p className="mt-2 text-muted-foreground">{t.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CTABand title={toolsPage.customToolPitch.title} body={toolsPage.customToolPitch.body} />
    </>
  );
}
