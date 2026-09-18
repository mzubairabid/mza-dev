import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/public/project-images/desi-shopzellingen-hero.webp";

export default function GermanDesiHero() {
  return (
    <section className="not-prose my-6 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="down" delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> CLIENT SUCCESS STORY • JULY 2025
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground m-0 mt-1 leading-tight">
                German Desi Shop:
              </h1>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight m-0 mt-1">
                E-Commerce Redesign & PayPal Fix
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="text-muted-foreground text-sm sm:text-base leading-relaxed m-0">
              A comprehensive store redesign and critical PayPal payment gateway fix for a German-based client. Engineered a seamless, localized checkout flow and optimized basic site structure for faster search indexing.
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="https://desishopzellingen.com/" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Live Preview <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.fiverr.com/s/X0LERVk" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-all shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Verified Fiverr Order ↗
             </Link>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <FadeIn direction="right" delay={0.3}>
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <Image 
                src={heroImg} 
                alt="German Desi Shop Zellingen" 
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}