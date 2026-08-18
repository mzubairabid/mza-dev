import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import heroImage from "@/public/project-images/web-dev-services.webp";
import FeaturedProjects from "@/components/featuredprojects";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Work & Selected Portfolio | M Zubair Abid",
  description:
    "Explore a curated showcase of custom web applications, high-converting e-commerce builds, and localized enterprise web systems.",
  alternates: {
    canonical: "https://yourdomain.com/work",
  },
};

export default function WorkPage() {
  const clientProof = [
    {
      name: "Desi Shop Zellingen",
      country: "Germany",
      type: "E-Commerce / WooCommerce",
      desc: "Complete store redesign, custom PayPal integration, and localized checkout flow.",
    },
    {
      name: "Pitch N Pick",
      country: "USA",
      type: "Shopify / 100+ Products",
      desc: "High-speed product listings with optimized metadata and custom layout tuning.",
    },
    {
      name: "Bugbanebar Lottery",
      country: "Australia",
      type: "Custom Web App",
      desc: "Secure, high-traffic custom lottery platform built for fast performance.",
    },
    {
      name: "Modern HVAC",
      country: "USA",
      type: "Lead Gen & SEO",
      desc: "Custom-engineered site targeted for local search rankings and high service conversions.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Built on <span className="text-primary font-normal">Results</span>, Not Promises.
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Fast code, clean SEO, and zero bloated templates. Explore MZA Dev's curated showcase of custom Next.js web applications, high-converting e-commerce builds, and performance-tuned enterprise systems.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#featured-projects"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Browse Case Studies</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl border border-border bg-muted hover:bg-accent text-foreground font-semibold text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Start a Project</span>
                </a>
              </div>
            </div>

            {/* Hero Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src={heroImage}
                  alt="M Zubair Abid - Developer Portfolio"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 2. FEATURED PROJECTS SECTION */}
      <FadeIn>
        <div id="featured-projects">
          <FeaturedProjects />
        </div>
      </FadeIn>

      {/* 3. Global Client Work & Trust Grid */}
      <FadeIn>
        <section className="p-8 sm:p-12 rounded-3xl border border-border bg-muted/40 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              <Layers className="w-4 h-4" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground">
              Trusted by Businesses Across 4 Continents
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              From custom code solutions to high-performance e-commerce stores, here is how custom web development delivers measurable value for business owners worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clientProof.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-border bg-card space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary font-semibold">
                    {item.country}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {item.type}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 4. Bottom CTA Banner */}
      <FadeIn>
        <section className="p-8 sm:p-12 md:p-16 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center space-y-6 shadow-sm">
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight max-w-3xl leading-tight text-foreground">
            Ready to Build a High-Performance Website?
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Stop losing customers to slow loading times. Let’s work together to build a secure, SEO-optimized, fast web application engineered for real business growth.
          </p>

          <div className="pt-2">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Let’s Outline Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}