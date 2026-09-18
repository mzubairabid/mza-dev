import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

export default function GermanDesiCTA() {
  return (
    <section className="not-prose my-16">
      <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-12 text-center overflow-hidden shadow-xl max-w-4xl mx-auto">
        <div className="relative z-10 space-y-4">
          <FadeIn>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              READY TO UPGRADE YOUR STORE?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Facing Issues With PayPal or Need a Complete Store Redesign?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Let's fix your payment gateway errors and build a high-converting WooCommerce platform tailored to your business.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-90 transition-opacity inline-block"
              >
                Hire Me For Your Project →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}