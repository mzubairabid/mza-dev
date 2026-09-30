import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { contact } from "@/content/contact";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = contact.h1;

export default function Image() {
  return renderOg({ title: contact.h1, eyebrow: "MZA Dev" });
}
