// lib/seo.ts
import type { Metadata } from "next";
import { site } from "@/data/site";

// data/site.ts me baseUrl = "https://www.mzadev.com" hona chahiye (end me "/" nahi)
const BASE = site.baseUrl.replace(/\/$/, "");
const DEFAULT_IMAGE = "/project-images/mza-dev-og-logo.png";

export function makeMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${BASE}${path}`;
  const img = image ?? DEFAULT_IMAGE;
  const imageUrl = img.startsWith("http") ? img : `${BASE}${img}`;

  return {
    // "absolute" = kisi layout ka title template ise dobara "| MZA Dev" nahi jorega
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      ...(type === "article" && publishedTime && { publishedTime }),
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const PAGE_SEO = {
  about: makeMetadata({
    title: "About MZA Dev | Full-Stack Developer & Technical SEO Expert", // 59
    description:
      "Meet Muhammad Zubair Abid, a full-stack developer with 7+ years building fast Next.js, React and WordPress sites with strong technical SEO.", // 139
    path: "/about",
    image: "/project-images/about-og.webp",
  }),
  contact: makeMetadata({
    title: "Contact MZA Dev | Hire a Next.js & Technical SEO Developer", // 58
    description:
      "Contact Muhammad Zubair Abid for custom Next.js apps, WordPress or Shopify builds and technical SEO audits. Share your project, get a reply in 24 hours.", // 152
    path: "/contact",
    image: "/project-images/contact-og.webp",
  }),
  blog: makeMetadata({
    title: "Web Development, SEO & Next.js Blog | MZA Dev", // 45
    description:
      "Practical guides on Next.js, WordPress, Shopify, technical SEO and Core Web Vitals from MZA Dev, written for developers and business owners.", // 140
    path: "/blog",
  }),
};
