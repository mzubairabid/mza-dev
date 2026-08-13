"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export function Approach() {
  const steps = [
    { step: "01", title: "Analyze & Define", desc: "Understanding core project requirements, SEO strategy, and target user journeys." },
    { step: "02", title: "Architect & Build", desc: "Writing clean, scalable code with modern components and optimized backend logic." },
    { step: "03", title: "Optimize & Deploy", desc: "Auditing speed metrics, verifying search indexing, and launching to cloud infra." }
  ];

  return (
    <section id="approach" className="w-full py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
      <FadeIn direction="up" delay={0.3}>
      <span className="text-xs font-mono uppercase tracking-widest text-primary">03 / Process</span></FadeIn>
      <FadeIn direction="down" delay={0.3}>
      <h2 className="text-3xl md:text-5xl font-serif font-light mt-2 mb-12 text-foreground">The Development Approach</h2></FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="flex flex-col space-y-3">
            <FadeIn direction="up" delay={0.3}>
            <span className="text-2xl font-serif italic text-primary">{s.step}</span>
            <h3 className="text-lg font-medium text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Approach;