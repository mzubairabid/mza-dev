import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

export default function ContactMarketplaceSection() {
  return (
    <section className="not-prose my-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/30 border border-border rounded-2xl p-6 sm:p-8 text-center">
        <FadeIn>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Prefer Escrow or Marketplace Protection?
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 max-w-lg mx-auto">
            If you prefer initiating our contract through a secure third-party platform, you can reach out directly via my verified profiles.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="https://www.upwork.com/freelancers/~018cd50705508ffb52?mp_source=share"
              target="_blank"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Upwork Profile <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="https://www.fiverr.com/users/mzaabid/"
              target="_blank"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Fiverr Profile <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}