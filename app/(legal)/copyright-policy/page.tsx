"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copyright, ArrowUpRight, ChevronDown, Mail, ShieldAlert, CheckCircle2, Ban } from "lucide-react";

export default function CopyrightPolicyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I use code snippets from Codeomist in my personal or commercial apps?",
      a: "Yes! You can use individual shared code snippets in your personal or commercial applications. However, you cannot bundle, re-sell, or republish the raw code libraries or full articles as your own product.",
    },
    {
      q: "How do I report unauthorized use of Codeomist content?",
      a: "If you find Codeomist's original articles, custom visual layouts, or interactive tool scripts republished on another platform without permission, please email contact@mzadev.com with the target link.",
    },
    {
      q: "What happens if a DMCA notice is issued?",
      a: "Unlawfully scraped or republished content will be immediately reported to hosting providers and search engines (such as Google and Bing) for formal DMCA takedown and search de-indexing.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 bg-transparent text-foreground">
      
      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
          <Copyright className="w-4 h-4" />
          <span>Intellectual Property Protection</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight leading-tight">
          Copyright Policy
        </h1>
        
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          Last Updated: August 21, 2026
        </p>
      </section>

      {/* Intro Box */}
      <section className="p-6 sm:p-8 rounded-3xl border border-border/60 bg-accent/20 text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4">
        <p>
          Welcome to{" "}
          <Link
            href="https://mzadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            mzadev.com <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          . I take intellectual property rights seriously and am committed to protecting the original technical tutorials, custom web tools, and design assets published on this platform.
        </p>
      </section>

      {/* 2. Main Copyright Content */}
      <section className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        
        {/* 1. Ownership of Content */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">01.</span> Ownership of Content
          </h2>
          <p>
            All content published on{" "}
            <Link
              href="https://mzadev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              mzadev.com <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            , including but not limited to text, specialized coding scripts (HTML, CSS, JS, React), custom-made graphic designs, web tools, website layouts, and video content from my YouTube channel (ByteScript MZA), is the exclusive intellectual property of Zubair Abid (the Founder & Solo Developer) unless otherwise explicitly stated.
          </p>
        </div>

        {/* 2. Protection of Creative Assets */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">02.</span> Protection of Creative Assets
          </h2>
          <p>
            As a solo developer and UI/UX designer, I invest significant time into creating unique visual aesthetics and high-performance web solutions. All materials on this platform are protected under the copyright laws of Pakistan and applicable international intellectual property treaties.
          </p>
        </div>

        {/* 3. Limited License (What You Can Do) */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">03.</span> Limited License (What You Can Do)
          </h2>
          <p>
            I grant you a limited, non-exclusive license to access and use my content for personal, non-commercial purposes only. You may:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pt-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Read, study, and learn from my developer tutorials and guides.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Share direct links to my articles and web tools across social platforms.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Use free code snippets in your personal or commercial projects (attribution back to Codeomist is appreciated).</span>
            </li>
          </ul>
        </div>

        {/* 4. Prohibited Use (What You Cannot Do) */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">04.</span> Prohibited Use (What You Cannot Do)
          </h2>
          <p>
            Without my express written permission, you are strictly prohibited from:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pt-1">
            <li className="flex items-center gap-2">
              <Ban className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Republishing, redistributing, or re-selling my full articles, custom components, or interactive tools as your own.</span>
            </li>
            <li className="flex items-center gap-2">
              <Ban className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Using my visual design assets (logos, UI themes, custom brand layouts) for external commercial projects.</span>
            </li>
            <li className="flex items-center gap-2">
              <Ban className="w-4 h-4 text-rose-500 shrink-0" />
              <span>“Scraping” or automated harvesting of site content for AI model training or Made-for-Ads (MFA) content farms.</span>
            </li>
            <li className="flex items-center gap-2">
              <Ban className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Removing or altering any copyright, trademark, or license headers in my original open-source files.</span>
            </li>
          </ul>
        </div>

        {/* 5. DMCA & Copyright Infringement */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">05.</span> DMCA & Enforcement Action
          </h2>
          <p>
            I respect the intellectual property rights of others and expect the same. If I discover my original content being used without authorization, I will take the following enforcement steps:
          </p>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Enforcement Protocol</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Issue a formal DMCA Takedown Notice to the host provider and domain registrar.</li>
              <li>Report unauthorized copies directly to Google and Bing for search engine de-indexing.</li>
              <li>Pursue appropriate legal remedies under applicable intellectual property laws.</li>
            </ul>
          </div>
        </div>

        {/* 6. Reporting Infringement */}
        <div className="space-y-4 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">06.</span> Reporting Infringement
          </h2>
          <p>
            If you believe that any content on Codeomist infringes upon your copyright, or if you find Codeomist content being used illegally on another platform, please contact me immediately:
          </p>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Email:</span>
              <a
                href="mailto:contact@mzadev.com?subject=Copyright Inquiry"
                className="text-primary hover:underline font-mono"
              >
                contact@mzadev.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Subject Line:</span>
              <span className="font-mono text-muted-foreground">Copyright Inquiry</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Frequently Asked Questions */}
      <section className="space-y-6 max-w-4xl mx-auto pt-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground text-center tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/60 rounded-2xl bg-accent/20 overflow-hidden transition-all"
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
                <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground border-t border-border/40 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}