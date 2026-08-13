"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight, ChevronDown } from "lucide-react";

export default function AffiliateDisclosurePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Does clicking an affiliate link cost me extra money?",
      a: "No, absolutely not. The price remains exactly the same for you (or in some cases, you may even receive an exclusive discount code). The commission is paid directly by the product provider or vendor.",
    },
    {
      q: "Do affiliate links influence your technical reviews?",
      a: "Never. All coding guides, tool comparisons, and software reviews on Codeomist are strictly based on personal developer experience, technical benchmarks, and objective performance analysis.",
    },
    {
      q: "How do affiliate earnings support Codeomist?",
      a: "Affiliate earnings help cover high-performance hosting, domain renewals, cloud infrastructure, and the continuous development of free web-based tools for the developer community.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 bg-transparent text-foreground">
      
      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Transparency & Ethics</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight leading-tight">
          Affiliate Disclosure
        </h1>
        
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          Last Updated: March 24, 2026
        </p>
      </section>

      {/* 2. Main Disclosure Content */}
      <section className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        
        {/* Transparency and Trust */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            Transparency and Trust
          </h2>
          <p>
            Welcome to{" "}
            <Link
              href="https://codeomist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              Codeomist.com <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            . As a solo developer and tech enthusiast, I believe in being 100% upfront with my readers. This disclosure is here to explain how I maintain this site and provide free high-quality content, tutorials, and interactive web tools for the developer community.
          </p>
        </div>

        {/* What Are Affiliate Links? */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            What Are Affiliate Links?
          </h2>
          <p>
            On{" "}
            <Link
              href="https://codeomist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              Codeomist.com <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            , you will find links to various third-party products and services (such as web hosting, themes, plugins, developer utilities, and tech gadgets). Some of these are “affiliate links.” This means if you click on a link and make a purchase, I may earn a small commission at no additional cost to you.
          </p>
        </div>

        {/* Why I Use Affiliate Links */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            Why I Use Affiliate Links
          </h2>
          <p>
            Running a high-performance platform like Codeomist involves continuous costs for premium hosting (Hostinger), cloud security, domain maintenance, and the extensive time I spend coding, testing tools, and writing detailed technical guides. These commissions help me offset these professional costs and allow me to keep the content and interactive utilities on this site free and accessible for everyone.
          </p>
        </div>

        {/* My Commitment to Honesty */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            My Commitment to Honesty
          </h2>
          <p>
            My editorial integrity is not for sale. All reviews, recommendations, and coding guides on{" "}
            <Link
              href="https://codeomist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              Codeomist.com <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>{" "}
            are based on my personal experience, thorough research, or professional expertise as a developer. I only recommend tools and services that I personally use or trust to add real value to your projects. Whether I use an affiliate link or not, my opinion remains unbiased.
          </p>
        </div>

        {/* Independent Verification */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            Independent Verification
          </h2>
          <p>
            While I carefully select the products I feature to ensure they align with high-quality performance standards, I encourage you to independently verify any product claims, statistics, or technical specifications with the manufacturer or provider before making a purchase decision.
          </p>
        </div>

        {/* Your Support Matters */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            Your Support Matters
          </h2>
          <p>
            When you use my affiliate links, you are directly supporting my work as an independent creator. This support allows me to continue building valuable guides, sharing my “Learning in Public” journey on YouTube (ByteScript MZA), and continuously improving this platform for you. I sincerely appreciate your trust and support.
          </p>
        </div>

        {/* Questions & Contact */}
        <div className="space-y-4 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight">
            Questions?
          </h2>
          <p>
            If you have any questions about my affiliations or the products I recommend, please feel free to reach out to me directly:
          </p>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Email:</span>
              <a
                href="mailto:contact@codeomist.com"
                className="text-primary hover:underline transition-colors font-mono"
              >
                contact@codeomist.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Contact Page:</span>
              <Link
                href="/contact"
                className="text-primary hover:underline transition-colors font-mono"
              >
                codeomist.com/contact
              </Link>
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