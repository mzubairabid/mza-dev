import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

export default function ServicesMarketplaceSection() {
  return (
    <section className="not-prose my-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-card border border-border rounded-3xl p-8 sm:p-12 text-center shadow-xs">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
            FLEXIBLE HIRING OPTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
            Ready to Start Your Project Package?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Choose custom milestones on Upwork for full web app development, or secure fixed-price gigs on Fiverr for store setups and bug fixes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.upwork.com/freelancers/~018cd50705508ffb52?mp_source=share"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Hire on Upwork <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.fiverr.com/users/mzaabid/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all shadow-2xs"
            >
              Order on Fiverr <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}