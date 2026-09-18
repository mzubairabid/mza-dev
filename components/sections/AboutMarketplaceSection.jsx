import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight, Star } from "lucide-react";

export default function AboutMarketplaceSection() {
  return (
    <section className="not-prose my-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-card border border-border rounded-3xl p-8 sm:p-12 text-center shadow-xs">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
            Backed by Verified Client Reviews
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
            With years of experience delivering full-stack solutions, my 5-star profiles across Upwork and Fiverr reflect consistent quality and professional communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.upwork.com/freelancers/~018cd50705508ffb52?mp_source=share"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all shadow-2xs"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> View Upwork History ↗
            </Link>
            <Link
              href="https://www.fiverr.com/users/mzaabid/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all shadow-2xs"
            >
              <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" /> View Fiverr Gigs ↗
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}