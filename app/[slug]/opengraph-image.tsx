import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService, services } from "@/content/services";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "MZA Dev";

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...caseStudies.map((c) => ({ slug: c.slug }))];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return renderOg({ title: s.h1, eyebrow: "MZA Dev Services" });
  const c = getCaseStudy(slug);
  return renderOg({ title: c?.h1 ?? "MZA Dev", eyebrow: "Case study" });
}
