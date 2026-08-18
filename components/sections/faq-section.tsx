"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

interface FAQItem {
  q: string;
  a: string;
}

export function FaqSection({ faqs }: { faqs: FAQItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 pb-16">
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
  );
}