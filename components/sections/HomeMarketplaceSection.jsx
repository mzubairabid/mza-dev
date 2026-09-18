import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function HomeMarketplaceSection() {
  return (
    <section className="not-prose my-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-card border border-border rounded-3xl p-8 sm:p-12 text-center shadow-xs">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
            TRUSTED COLLABORATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
            Prefer Working Through a Verified Marketplace?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Alongside direct project contracts, you can securely hire me and review my top-rated client success stories on Upwork and Fiverr.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.upwork.com/freelancers/~018cd50705508ffb52?mp_source=share"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4 text-primary" /> Upwork Profile <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </Link>
            <Link
              href="https://www.fiverr.com/users/mzaabid/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4 text-success" /> Fiverr Profile <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}