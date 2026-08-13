"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export function Capabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Full-Stack Development",
      description: "Building responsive, modern, and high-speed web platforms using React, Next.js, and TypeScript."
    },
    {
      num: "02",
      title: "CMS & E-Commerce",
      description: "Tailored Shopify storefronts, custom WooCommerce architectures, and clean headless CMS builds."
    },
    {
      num: "03",
      title: "Technical SEO & Speed",
      description: "Deep Core Web Vitals audit, schema structured data, indexation setup, and performance tuning."
    }
  ];

  return (
    <section id="capabilities" className="w-full py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
      <FadeIn direction="down" delay={0.3}>
      <span className="text-xs font-mono uppercase tracking-widest text-primary">02 / Capabilities</span>
      <h2 className="text-3xl md:text-5xl font-serif font-light mt-2 mb-12 text-foreground">Core Specializations</h2>
      </FadeIn>
      <FadeIn direction="up" delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div key={item.num} className="p-8 border border-border rounded-2xl bg-card hover:border-primary/50 transition-colors">
              <span className="text-xs font-mono text-muted-foreground">{item.num}</span>
              <h3 className="text-xl font-medium mt-4 mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default Capabilities;