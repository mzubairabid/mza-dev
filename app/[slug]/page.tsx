// app/[slug]/page.tsx
// Root-level pages jin ke URLs final hain:
//  - services:      /web-development-service, /shopify-funnels, /graphic-design, /wordpress-development, /technical-seo
//  - case studies:  /german-desi-shop-zellingen-2025, /farah-brand, /karachi-mart-2026, /respiro-shopify-store
// Text content/services.ts aur content/case-studies.ts me hai.
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/templates/CaseStudyPage";
import { ServicePage } from "@/components/templates/ServicePage";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService, services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false; // list ke bahar ka koi bhi slug = 404

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...caseStudies.map((c) => ({ slug: c.slug }))];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}` });
  const c = getCaseStudy(slug);
  if (c) return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/${c.slug}`, type: "article" });
  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return <ServicePage service={s} />;
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i >= 0) return <CaseStudyPage study={caseStudies[i]} next={caseStudies[(i + 1) % caseStudies.length]} />;
  notFound();
}
