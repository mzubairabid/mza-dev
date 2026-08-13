"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

import {
  Code2,
  Zap,
  Globe,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Search,
  ShieldCheck,
  Check,
  Star,
} from "lucide-react";

export default function WebDevelopmentServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const differentiators = [
    {
      title: "Engineering Excellence",
      desc: "Backed by a Bachelor of IT (Hons), I follow a strict 'Clean Code' philosophy.",
    },
    {
      title: "SEO-First Mentality",
      desc: "Every line of code is written with search engines in mind.",
    },
    {
      title: "Elite Performance",
      desc: "I guarantee mobile-responsive designs with optimized Core Web Vitals.",
    },
    {
      title: "Scalable Architecture",
      desc: "Websites built to handle traffic spikes and future integrations effortlessly.",
    },
  ];

  const faqs = [
    {
      q: "Which platforms do you specialize in?",
      a: "I specialize in Next.js, React, TypeScript, custom HTML/CSS/JS, PHP, as well as highly optimized WordPress and Shopify environments without heavy page-builder bloat.",
    },
    {
      q: "How does your service improve my site’s SEO?",
      a: "I build with clean semantic HTML5, hardcoded JSON-LD schema markup, optimal crawl architecture, and strict Core Web Vitals performance targets to maximize search engine visibility from day one.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes! All packages include dedicated post-launch support and maintenance (ranging from 14 to 30+ days depending on your selected tier) to ensure a smooth transition.",
    },
    {
      q: "Can I manage my website after the project is complete?",
      a: "Absolutely. I provide full administrative control, clean content structures, and user-friendly documentation so you or your team can manage updates with ease.",
    },
    {
      q: "What is the typical project timeline?",
      a: "Landing pages and basic sites take around 3-5 days. Comprehensive multi-page platforms and complex custom e-commerce stores typically take 1 to 3 weeks.",
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
                Web Development Services
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                High-Performance Web Development Service for Scalable Growth
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I transform complex ideas into fast, secure, and SEO-friendly digital experiences that drive real business results. Leveraging years of expertise since 2018, I bridge the gap between creative UI/UX design and elite-level technical development.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Get Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src="/project-images/web-dev-services.webp"
                  alt="High Performance Web Development Services"
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
      {/* 2. Brand Positioning Section */}
      <FadeIn>
        <section className="p-8 sm:p-12 rounded-3xl border border-border bg-card space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
              Engineered High-Speed Digital Assets
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At Gadget Crunchie, I don’t just build websites; I engineer high-speed digital assets. Whether it’s a custom-coded framework or a robust CMS, my focus is always on clean code, user psychology, and 90+ PageSpeed scores.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From static architecture to complex e-commerce ecosystems, I provide end-to-end development tailored to your specific goals, ensuring your site is secure, mobile-responsive, and ready to outrank the competition.
            </p>
          </div>
        </section>
      </FadeIn>
      {/* 3. Specialized Capabilities Grid */}
      <FadeIn>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Comprehensive Web Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4 shadow-xs hover:border-primary/50 transition-all">
              <div className="p-3 w-fit rounded-xl bg-accent border border-border text-primary">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Custom-Coded Solutions (HTML, CSS, JS, PHP)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Need a website that stands out from the crowd? My Web Development Service specializes in fully custom-coded websites built from the ground up. By utilizing modern technologies, I ensure your platform is lightweight, incredibly fast, and perfectly scalable as your business expands.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4 shadow-xs hover:border-primary/50 transition-all">
              <div className="p-3 w-fit rounded-xl bg-accent border border-border text-primary">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Strategic WordPress Development & SEO
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                As a developer with deep roots in SEO, I don’t just “install themes.” I build custom WordPress environments designed for high authority. Every site is integrated with advanced Schema Markup and Rank Math optimization to ensure you capture maximum search engine visibility from day one.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4 shadow-xs hover:border-primary/50 transition-all">
              <div className="p-3 w-fit rounded-xl bg-accent border border-border text-primary">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Conversion-Focused Shopify Stores
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In the world of E-commerce, speed is money. I design professional Shopify stores that prioritize user journey and smooth checkout experiences. My goal is to reduce friction and turn your visitors into loyal customers through data-driven design.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* 4. Portfolio Showcase Banner */}
      <FadeIn>
        <section className="p-8 sm:p-12 rounded-3xl border border-border bg-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Proven Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
              My Web Development Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every line of code I write is a step toward your business growth. Since 2018, I have helped clients from Germany to the USA transition from slow, outdated sites to high-performance digital assets. Explore my portfolio to see how I combine clean code with user psychology to deliver results that exceed expectations.
            </p>
          </div>
          <Link
            href="/work"
            className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0 inline-flex items-center gap-2"
          >
            <span>Explore My Case Studies & Recent Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </FadeIn>
      {/* 5. Why Gadget Crunchie Is Different */}
      <FadeIn>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Why Gadget Crunchie is Different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-3"
              >
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="text-base font-bold text-foreground">
                  {diff.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>      
      {/* 6. Pricing Packages Section */}
      <FadeIn>
        <section className="space-y-10 pt-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Pricing Plans
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Transparent Pricing for Every Stage of Business
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Choose the right package that fits your current goals. No hidden fees, just high-performance web engineering and measurable growth.
            </p>
          </div>

          {/* 3 Best Pricing Cards Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* BASIC PLAN */}
            <div className="p-8 rounded-3xl border border-border bg-card space-y-6 flex flex-col justify-between hover:border-primary/30 transition-all shadow-xs">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Basic Plan</h3>
                  <p className="text-xs text-muted-foreground min-h-8">
                    Perfect for landing pages, simple portfolios, or blogs.
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-mono text-foreground">$149</span>
                  <span className="text-xs text-muted-foreground">/ fixed</span>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>1 Premium Responsive Page (WordPress/HTML)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Basic On-Page SEO Setup (RankMath/Yoast)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Core Web Vitals Speed Optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Social Media & Domain Integration</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Delivery: 3 – 5 Days</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Priority Support & Analytics Setup</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?plan=basic"
                className="w-full py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground text-center font-semibold text-xs sm:text-sm transition-all block"
              >
                Get Started
              </Link>
            </div>

            {/* STANDARD PLAN (POPULAR HIGHLIGHT) */}
            <div className="relative p-8 rounded-3xl border-2 border-primary bg-card space-y-6 flex flex-col justify-between shadow-xl scale-102">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Most Popular
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Standard Plan</h3>
                  <p className="text-xs text-muted-foreground min-h-8">
                    Ideal for growing businesses and professional content creators.
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-mono text-foreground">$249</span>
                  <span className="text-xs text-muted-foreground">/ fixed</span>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Up to 5 Complete Pages (WordPress or Shopify)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Complete Technical & Blog SEO Architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Google Search Console & GA4 Tracking Setup</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Modern UI Design & Interactive CTAs</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>14 Days Post-Launch Maintenance & Support</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Priority Technical Direct Support</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?plan=standard"
                className="w-full py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground text-center font-semibold text-xs sm:text-sm transition-all shadow-md block"
              >
                Choose Standard
              </Link>
            </div>

            {/* PREMIUM PLAN */}
            <div className="p-8 rounded-3xl border border-border bg-card space-y-6 flex flex-col justify-between hover:border-primary/30 transition-all shadow-xs">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Premium Plan</h3>
                  <p className="text-xs text-muted-foreground min-h-8">
                    Advanced full-stack solutions, custom storefronts, and deep tracking.
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-mono text-foreground">$349</span>
                  <span className="text-xs text-muted-foreground">/ fixed</span>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Unlimited Pages / Complete Custom E-commerce Store</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Custom JavaScript/PHP Feature Enhancements</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Advanced Schema Markup & Deep Keyword Framework</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Comprehensive Server-Level GTM Tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Unlimited Revisions until 100% Satisfaction</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-foreground">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>30 Days Premium Tech Support & Dedicated Maintenance</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?plan=premium"
                className="w-full py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground text-center font-semibold text-xs sm:text-sm transition-all block"
              >
                Select Premium
              </Link>
            </div>

          </div>
        </section>
      </FadeIn>
      {/* 7. FAQs Section */}
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