// lib/og.tsx — har page ki Open Graph image (1200x630) isi aik design se banti hai
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOg({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#93c5fd" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#10b981" }} />
          {eyebrow ?? site.name}
        </div>
        <div style={{ fontSize: title.length > 60 ? 58 : 68, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#cbd5e1" }}>
          <span>{site.author.name}</span>
          <span>mzadev.com</span>
        </div>
      </div>
    ),
    ogSize
  );
}
