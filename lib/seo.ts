import type { Metadata } from "next";
import { site } from "@/data/site";

export function makeMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const imageUrl = image ? `${site.baseUrl}${image}` : `${site.baseUrl}/mza-dev-og-logo.png`;
  return {
    title,
    description,
    alternates: {
      canonical: `${site.baseUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${site.baseUrl}${path}`,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

// 🟢 Bas yeh naya hissa apni `lib/seo.ts` ke aakhir mein add kar dein:
export const PAGE_SEO = {
  about: makeMetadata({
    title: "About Me — Full-Stack Developer & Designer",
    description: "Full-Stack Web Developer and Technical SEO Specialist specializing in Next.js, React, and Core Web Vitals optimization.",
    path: "/about",
    image: "/project-images/about-web-development.webp",
  }),
  contact: makeMetadata({
    title: "Contact | Hire Full-Stack Developer",
    description: "Get in touch with Muhammad Zubair Abid for custom web development, Next.js applications, WordPress solutions, and technical SEO audits.",
    path: "/contact",
    image: "/project-images/contact.webp",
  }),
};