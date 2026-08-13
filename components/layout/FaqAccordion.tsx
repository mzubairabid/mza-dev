"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs?: FaqItem[];
  items?: FaqItem[];
  title?: string;
  description?: string;
}

export default function FaqAccordion({
  faqs,
  items,
  title = "Frequently Asked Questions",
  description = "Clear answers to common questions about this topic.",
}: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqList = faqs || items || [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="space-y-6 my-10 max-w-4xl mx-auto border-t border-border pt-8">
      {/* Title & Subtitle Header */}
      <div className="space-y-2">
        {/* Left-Aligned Heading with Icon */}
        <div className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h3>
        </div>

        {/* Centered Description (Middle) */}
        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground text-center pt-1">
            {description}
          </p>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqList.map((faq, index) => (
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
  );
}