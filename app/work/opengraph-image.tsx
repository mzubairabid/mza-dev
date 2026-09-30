import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { workPage } from "@/content/case-studies";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = workPage.h1;

export default function Image() {
  return renderOg({ title: workPage.h1, eyebrow: "MZA Dev" });
}
