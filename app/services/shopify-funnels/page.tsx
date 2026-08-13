"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import {
  ShoppingBag,
  Zap,
  Gauge,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Layers,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export default function ShopifyServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatIBuild = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Custom Shopify Developer Services",
      description:
        "I build fast custom stores from scratch. No heavy themes or slow apps. Only clean code that runs fast.",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "E-Commerce Conversion Funnel Development",
      description:
        "I code clean e-commerce funnel pages and smooth checkout flows to turn your daily store traffic into buyers.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Deep Performance Tuning",
      description:
        "I optimize your storefront speed so you easily pass Core Web Vitals and stop cart abandonment.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Custom Sales Funnel Strategy",
      description:
        "I plan your sales funnel website structure to stop user drop-offs before writing any code.",
    },
    {
      step: "02",
      title: "Clean Liquid Engineering",
      description:
        "I write clean theme code and add valid Google schema markup so your store ranks well.",
    },
    {
      step: "03",
      title: "Store Speed Profiling",
      description:
        "I remove heavy scripts and layout shifts to get your store speed scores above 90.",
    },
    {
      step: "04",
      title: "Launch & Post-Live Scale",
      description:
        "Safe launch with zero downtime and live tracking to make sure your store sales keep running smoothly.",
    },
  ];

  const executionProof = [
    {
      title: "High-Volume Product Funnel Redesign",
      description:
        "Rebuilt a slow brand store with clean code, replacing heavy apps to make the checkout fast.",
      badge: "Result: Sales Conversion Up",
    },
    {
      title: "Custom Financial Tools & Web Apps",
      description:
        "Coded a custom dashboard with JavaScript logic to automate internal nursery earnings reports and track metrics easily.",
      badge: "Result: Custom Javascript Code",
    },
    {
      title: "Enterprise Store Speed Tuning",
      description:
        "Cleaned theme files and optimized asset loading to lift an enterprise store’s speed score from 45 to 90+.",
      badge: "Result: PageSpeed Score 45 to 90+",
    },
  ];

  const faqs = [
    {
      q: "Why should I work with you instead of a full-service agency?",
      a: "You work directly with the senior developer building your project. No account managers, no communication delay, no junior interns, and zero agency overhead.",
    },
    {
      q: "Will my store speed drop as I scale up?",
      a: "No. Because I build with clean, custom Liquid and minimal app dependencies, your store scales smoothly without accumulating script bloat or layout shifts.",
    },
    {
      q: "Do you include the technical SEO setup standard?",
      a: "Yes! JSON-LD schema markup, clean semantic HTML5, Core Web Vitals targets, and index-ready structural optimizations are included by default.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 bg-transparent text-foreground">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-transparent p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                Custom Shopify Developer Services
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Build Fast Funnels.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I write clean code to build fast stores and grow your funnel sales. No slow themes, no heavy apps, and no agency loops. Just direct results.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>View Shopify Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground font-semibold text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Let’s Talk Funnels</span>
                </Link>
              </div>
            </div>

            {/* Hero Decorative / Image Container */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src="/project-images/ai-robot.webp"
                  alt="Shopify Development & Funnel Engineering"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </section>
      </FadeIn>
      {/* 2. What I Build Section */}
      <FadeIn>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                — What I Build
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
                Zero Theme Bloat. Native Funnel Engineering.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIBuild.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all space-y-4 shadow-xs"
              >
                <div className="p-3 w-fit rounded-xl bg-accent border border-border">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      {/* 3. Solo Vs Agency Section */}
      <FadeIn>
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              — Solo Vs Agency
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Direct Engineering. No Agency Fluff.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I am a full-stack dev running Gadget Crunchie. Your store is never outsourced to cheap interns. I handle every line of code myself for direct results.
            </p>
          </div>

          {/* Counter Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border">
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">10+</div>
              <p className="text-xs text-muted-foreground">Global Solutions Delivered</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">90+</div>
              <p className="text-xs text-muted-foreground">Core Web Vitals PageSpeed</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">7+</div>
              <p className="text-xs text-muted-foreground">Years Of Experience</p>
            </div>
          </div>

          {/* Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-accent border border-border">
            <h3 className="text-lg font-bold text-foreground">
              Skip The Agency Overhead.
            </h3>
            <a
              href="https://www.upwork.com/freelancers/~018cd50705508ffb52?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0 inline-flex items-center gap-2"
            >
              <span>Hire Me on Upwork</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </FadeIn>
      {/* 4. The Funnel Process Section */}
      <FadeIn>
        <section className="space-y-8">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              — The Funnel Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              The Development Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-3 relative overflow-hidden"
              >
                <span className="text-3xl font-mono font-bold text-primary/30 block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      {/* 5. Live Execution Proof Section */}
      <FadeIn>
        <section className="space-y-8">
          <div className="space-y-2 border-b border-border pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              — Live Execution Proof
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Results-Driven Storefront Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executionProof.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-4 flex flex-col justify-between hover:border-primary/40 transition-all"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent border border-border text-[11px] font-mono font-medium text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      {/* 6. FAQs Section */}
      <FadeIn>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-2xl bg-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-medium text-xs sm:text-sm text-foreground flex items-center justify-between gap-4 cursor-pointer hover:bg-accent/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-1 text-xs text-muted-foreground border-t border-border leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}