import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export default function GermanDesiTechStack() {
  const techs = ["WordPress", "WooCommerce", "PayPal API", "PHP", "Custom CSS", "Basic SEO"];

  return (
    <section className="not-prose my-16">
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-semibold">
            ARCHITECTURE & TOOLS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight m-0 mt-1">
            Technology Stack Utilized
          </h2>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex items-center justify-center p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground text-center shadow-2xs">
              {tech}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}