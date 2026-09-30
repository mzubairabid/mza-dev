import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { toolsPage } from "@/content/tools";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = toolsPage.h1;

export default function Image() {
  return renderOg({ title: "Free browser tools: HTML editor, React compiler and more", eyebrow: "MZA Dev Tools" });
}
