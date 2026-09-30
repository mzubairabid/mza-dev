// lib/seo.ts — har page ka metadata isi aik function se banta hai.
import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** true = site ki default OG image (jin routes ki apni opengraph-image.tsx NAHI hai) */
  defaultImage?: boolean;
};

/**
 * - title "absolute" hai: layout koi "| MZA Dev" dobara nahi jorega
 * - canonical har page ka apna
 * - OG image har route ki apni opengraph-image.tsx se aati hai (file convention),
 *   is liye yahan images set nahi karte
 */
export function buildMetadata({ title, description, path, type = "website", noindex, defaultImage }: SeoInput): Metadata {
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
      ...(defaultImage && { images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(defaultImage && { images: [`${site.url}/opengraph-image`] }),
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
