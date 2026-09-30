import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { about } from "@/content/about";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = about.h1;

export default function Image() {
  return renderOg({ title: about.h1, eyebrow: "MZA Dev" });
}
