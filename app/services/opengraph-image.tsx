import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { servicesHub } from "@/content/services";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = servicesHub.h1;

export default function Image() {
  return renderOg({ title: "Web development, Shopify, WordPress and technical SEO services", eyebrow: "MZA Dev Services" });
}
