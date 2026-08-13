import type { Metadata } from "next";
import { site } from "@/data/site";

export function makeMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
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
    },
  };
}