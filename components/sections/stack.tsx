"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export function Stack() {
  const techStack = [
    { category: "Frontend", tools: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion" },
    { category: "CMS & E-Com", tools: "WordPress, WooCommerce, Shopify, Headless CMS" },
    { category: "SEO & Analytics", tools: "Google Search Console, Core Web Vitals, Rank Math, Semrush, Ahrefs" },
    { category: "Deployment", tools: "Vercel, Netlify, GitHub Workflows, Cloudflare, Proxmox / WHMCS" }
  ];

  return (
    <section id="stack" className="w-full py-16 px-6 md:px-12 max-w-6xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
      <FadeIn direction="up" delay={0.3}>
      <span className="text-xs font-mono uppercase tracking-widest text-primary">04 / Stack</span></FadeIn>
      <FadeIn direction="down" delay={0.3}>
      <h2 className="text-3xl md:text-5xl font-serif font-light mt-2 mb-8 text-zinc-900 dark:text-zinc-100">Engineering Toolchain</h2>
      </FadeIn>
      <div className="font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 bg-zinc-900 text-zinc-100 shadow-xl overflow-x-auto">
        <FadeIn direction="down" delay={0.3}>
        <div className="text-xs text-zinc-500 mb-4 pb-2 border-b border-zinc-800">// stack.config.ts</div>
        </FadeIn>
        {techStack.map((item, i) => (
          <div key={i} className="py-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <FadeIn direction="up" delay={0.3}>
            <span className="text-primary min-w-[35] shrink-0 font-semibold">{item.category}:</span>
            <span className="text-zinc-300">{item.tools}</span>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;