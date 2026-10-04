// scripts/generate-og.tsx — har page ki Open Graph image build se pehle PNG bana kar
// public/og/ me rakhta hai. (Runtime par image banane ka code server bundle me nahi jata,
// is liye site Cloudflare Workers ke free plan ki 3 MB limit me rehti hai.)
// `npm run build` se pehle khud chalta hai (package.json "prebuild").
import { mkdirSync, writeFileSync } from "node:fs";
import { about } from "@/content/about";
import { caseStudies, workPage } from "@/content/case-studies";
import { contact } from "@/content/contact";
import { home } from "@/content/home";
import { legalPages } from "@/content/legal";
import { services } from "@/content/services";
import { tools } from "@/content/tools";
import { ogKey } from "@/lib/seo";
import { renderOg } from "@/lib/og";

const pages: { path: string; title: string; eyebrow?: string }[] = [
  { path: "/", title: home.h1 },
  { path: "/services", title: "Web development, Shopify, WordPress, React, Next.js and technical SEO services", eyebrow: "MZA Dev Services" },
  ...services.map((s) => ({ path: `/${s.slug}`, title: s.h1, eyebrow: "MZA Dev Services" })),
  { path: "/work", title: workPage.h1 },
  ...caseStudies.map((c) => ({ path: `/${c.slug}`, title: c.h1, eyebrow: "Case study" })),
  { path: "/about", title: about.h1 },
  { path: "/contact", title: contact.h1 },
  { path: "/tools", title: "Free browser tools: HTML editor, React compiler and more", eyebrow: "MZA Dev Tools" },
  ...tools.map((t) => ({ path: `/tools/${t.slug}`, title: t.name, eyebrow: "Free tool" })),
  ...Object.entries(legalPages).map(([slug, p]) => ({ path: `/${slug}`, title: p.name })),
];

async function main() {
  mkdirSync("public/og", { recursive: true });
  for (const p of pages) {
    const res = renderOg({ title: p.title, eyebrow: p.eyebrow });
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(`public/og/${ogKey(p.path)}.png`, buf);
  }
  console.log(`OG images: ${pages.length} PNG files public/og/ me ban gayin`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
