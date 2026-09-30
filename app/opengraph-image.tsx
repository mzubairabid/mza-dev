import { home } from "@/content/home";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "MZA Dev — web development by M Zubair Abid";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: home.h1 });
}
