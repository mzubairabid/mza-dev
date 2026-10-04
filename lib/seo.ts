// lib/seo.ts — har page ka metadata isi aik function se banta hai.
import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

/** "/" → "home", "/tools/nursery-calculator" → "tools-nursery-calculator" */
export function ogKey(path: string) {
  return path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-");
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** purana option (ab har page ki apni PNG hai: public/og/) */
  defaultImage?: boolean;
};

/**
 * - title "absolute" hai: layout koi "| MZA Dev" dobara nahi jorega
 * - canonical har page ka apna
 * - OG image: public/og/<page>.png (scripts/generate-og.tsx build se pehle banata hai)
 */
export function buildMetadata({ title, description, path, type = "website", noindex }: SeoInput): Metadata {
  const url = absoluteUrl(path);

  if (process.env.NODE_ENV !== "production") {
    if (title.length > 60) console.warn(`⚠️ [SEO] ${path} title ${title.length} chars (max 60)`);
    if (description.length > 155) console.warn(`⚠️ [SEO] ${path} description ${description.length} chars (max 155)`);
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: `${site.url}/og/${ogKey(path)}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/og/${ogKey(path)}.png`],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
