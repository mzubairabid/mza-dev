"use client";

import React, { useState } from "react";
// Sections Imports
import { Hero } from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import { Work } from "@/components/sections/work";
import { Capabilities } from "@/components/sections/capabilities";
import { Approach } from "@/components/sections/approach";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import FaqSchema from '@/components/FaqSchema';
import { FadeIn } from "@/components/animations/fade-in";

import {
  Palette,
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Star,
  Layout,
  Layers,
  Monitor,
} from "lucide-react";

export const dynamic = "force-static";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
    const toggleFaq = (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
    };

  const faqs = [
  {
    q: "Who is Muhammad Zubair Abid (MZA Dev)?",
    a: "Muhammad Zubair Abid, known as MZA Dev, is a Full-Stack Web Developer, Technical SEO Specialist, and Digital Solutions Architect specializing in Next.js, React, custom WordPress, and Shopify platforms.",
  },
  {
    q: "What services, web tools, and resources are available on this platform?",
    a: "This platform features custom full-stack web development services, specialized web engineering tools, technical SEO frameworks, real-world case studies, and performance optimization solutions.",
  },
  {
    q: "Why choose custom Next.js engineering over traditional page builders?",
    a: "Custom Next.js architectures deliver instant load times, top Core Web Vitals scores, better data security, and structured schema that help you rank higher on Google and AI search engines.",
  },
  {
    q: "How can I start a project or work with MZA Dev?",
    a: "You can reach out through the Contact page or click 'Let's Discuss Your Project'. MZA Dev reviews all inquiries directly within 24 hours to provide a transparent scope and roadmap.",
  },
];
  return (
    <main className="w-full flex flex-col gap-16 sm:gap-24">
      {/* 01 / HERO SECTION */}
        <Hero />

        <TrustBar />

      {/* 02 / SELECTED WORK SECTION */}
        <Work />

      {/* 03 / CAPABILITIES SECTION */}
        <Capabilities />

      {/* 04 / APPROACH SECTION */}
        <Approach />

      {/* 05 / TECH STACK SECTION */}
        <Stack />

      {/* 06 / ABOUT SECTION */}
        <About />

      {/* 07 / CONTACT SECTION */}
        <Contact />

      {/* 2. FAQs Section (2 Columns matching your design) */}

      <section className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      {/* Header Section with FadeIn Animations */}
      <div className="w-full">
        <FadeIn direction="up" delay={0.2}>
          <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-2">
                07 / FAQs
              </span>
        </FadeIn>
      </div>
      <div className="text-center space-y-2">
        <FadeIn direction="down" delay={0.3}>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Have questions about custom web development, technical SEO audits, or project timelines? Here are answers to common queries.
          </p>
        </FadeIn>
      </div>
  
      {/* 2 Columns FAQ Grid */}
      <FadeIn direction="up" delay={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/60 rounded-2xl bg-accent/20 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-5 py-4 text-left font-medium text-sm sm:text-base text-foreground flex items-center justify-between gap-4 cursor-pointer hover:bg-accent/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-muted-foreground/90 border-t border-border/40 leading-relaxed font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
      
      {/* 3. JSON-LD FAQ Schema Injection */}
      <FaqSchema
        faqList={faqs.map((item: { q: string; a: string }) => ({
          question: item.q,
          answer: item.a,
        }))}
      />
    </main>
  );
}
