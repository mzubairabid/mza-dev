import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

export default function GermanDesiFeatures() {
  return (
    <section className="not-prose my-16">
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-semibold">
            PROJECT MILESTONES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight m-0 mt-1">
            What Was Fixed & Redesigned
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground m-0">
            Delivered successfully via Fiverr in July 2025, solving complex gateway bugs and upgrading user experience.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={0.1}>
          <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all space-y-4 shadow-xs h-full flex flex-col">
            <h3 className="text-lg font-bold text-foreground m-0">PayPal Integration Fix</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed m-0">
              Resolved critical API callback and checkout errors that were blocking customer transactions on the German storefront.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all space-y-4 shadow-xs h-full flex flex-col">
            <h3 className="text-lg font-bold text-foreground m-0">Full Store Redesign</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed m-0">
              Modernized WooCommerce layout, typography, and product pages to match high European e-commerce design standards.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all space-y-4 shadow-xs h-full flex flex-col">
            <h3 className="text-lg font-bold text-foreground m-0">Basic Technical SEO</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed m-0">
              Structured meta tags, image alt attributes, and site speed tweaks to jumpstart organic visibility in local search results.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}