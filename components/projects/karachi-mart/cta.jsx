import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

export default function ProjectCTA() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary/5 border border-primary/20 rounded-2xl p-10 shadow-xs">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want a Custom Store Like This Built for Your Business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let’s collaborate to build high-performance e-commerce frontends and web applications tailored to your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Let's Talk About Your Project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}