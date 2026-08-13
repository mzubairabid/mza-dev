"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export function About() {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn direction="up" delay={0.3}>
          <span className="text-xs font-mono uppercase tracking-widest text-primary">05 / Biography</span>
          </FadeIn>
          <FadeIn direction="down" delay={0.3}>
          <h2 className="text-3xl md:text-5xl font-serif font-light mt-2 mb-6 text-foreground">About MZA</h2></FadeIn>
          <FadeIn direction="up" delay={0.3}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am a full-stack web developer and technical SEO specialist focused on building fast, high-converting digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether engineering Next.js web applications, customizing e-commerce storefronts, or executing search engine optimizations, I bridge technical code with actual business growth.
          </p>
          </FadeIn>
        </div>
        <div className="p-8 border border-border rounded-2xl bg-primary/5">
          <FadeIn direction="left" delay={0.3}>
          <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-4">Status & Availability</h3></FadeIn>
          <FadeIn direction="right" delay={0.3}>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>🚀 Open for freelance development contracts</li>
            <li>📍 Based in Pakistan (Working Globally)</li>
            <li>💻 Specialization: Full-Stack Apps & Technical SEO</li>
          </ul></FadeIn>
        </div>
      </div>
    </section>
  );
}

export default About;