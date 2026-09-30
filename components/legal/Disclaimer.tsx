"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight, ChevronDown, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function DisclaimerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Am I guaranteed zero bugs when using code tutorials from Codeomist?",
      a: "No. Software dependencies and framework versions update rapidly. While all tutorials are tested before publishing, code snippets are provided 'as is' for educational purposes.",
    },
    {
      q: "Does clicking an affiliate link cost me anything extra?",
      a: "No. Clicking an affiliate link does not cost you any extra money. It simply pays a small commission to support site hosting and free developer tool maintenance.",
    },
    {
      q: "Are third-party external links controlled by Codeomist?",
      a: "No. External websites linked from Codeomist (such as third-party documentation or tool providers) operate under their own independent terms and privacy policies.",
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 bg-transparent text-foreground">
      
      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>General Disclaimer & Liability</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight leading-tight">
          Disclaimer
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
            href="https://www.mzadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            mzadev.com <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          . Please read this disclaimer carefully before using any shared tutorials, interactive web tools, or technical guides on this platform.
        </p>
      </section>

      {/* 2. Main Disclaimer Content */}
      <section className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        
        {/* 1. Personal Insights Only */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">01.</span> Personal Insights Only
          </h2>
          <p>
            The information provided on{" "}
            <Link
              href="https://www.mzadev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              mzadev.com <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>{" "}
            is for general informational and educational purposes only. This website is owned and operated by me, Zubair Abid. All content reflects my personal research, professional experience as a Web Developer, and my journey in the tech industry.
          </p>
        </div>

        {/* 2. No Professional Advice */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">02.</span> Educational Content & Liability
          </h2>
          <p>
            While I offer custom Web Development and digital engineering services, the tutorials, code snippets, and tech guides shared on this blog are provided strictly for educational use. I am not responsible for any technical issues, data loss, or server crashes that may occur if you implement these scripts on your own production environments. For specific project requirements, I recommend hiring me directly or consulting a qualified developer.
          </p>
        </div>

        {/* 3. Accuracy and Reliability */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">03.</span> Accuracy and Reliability
          </h2>
          <p>
            I strive to provide accurate, high-quality, and up-to-date content. However, web technologies and frameworks change rapidly. I do not guarantee that all software dependencies, coding methods, or developer tool benchmarks are 100% error-free or current at the time of your reading. Your reliance on any information found on this platform is strictly at your own risk.
          </p>
        </div>

        {/* 4. Affiliate and Ad Disclosure */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">04.</span> Affiliate and Ad Disclosure
          </h2>
          <p>
            To support the server infrastructure, cloud hosting, and domain maintenance costs of Codeomist, I may use affiliate links and display performance advertisements (such as Google AdSense). If you click on an affiliate link and make a purchase, I may earn a small commission at no extra cost to you. I only recommend tools, hosting solutions, and gadgets that I personally find valuable.
          </p>
        </div>

        {/* 5. External Links and Third-Party Content */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">05.</span> External Links and Third-Party Content
          </h2>
          <p>
            My website contains links to external platforms, including my YouTube channel (ByteScript MZA) and client portfolio work. I do not control or take responsibility for the content, privacy policies, or practices of any third-party websites or services.
          </p>
        </div>

        {/* 6. Limitation of Liability */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">06.</span> Limitation of Liability
          </h2>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 text-xs sm:text-sm text-amber-500/90 space-y-1">
            <div className="flex items-center gap-2 font-bold text-foreground">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Legal Protection Notice</span>
            </div>
            <p className="text-muted-foreground">
              In no event shall Zubair Abid or Codeomist be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website, shared code snippets, compiler tools, or third-party recommendations.
            </p>
          </div>
        </div>

        {/* 7. Contact Me */}
        <div className="space-y-4 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">07.</span> Contact Me
          </h2>
          <p>
            If you have any questions or concerns regarding this disclaimer, please feel free to reach out directly:
          </p>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Email:</span>
              <a
                href="mailto:contact@mzadev.com"
                className="text-primary hover:underline font-mono"
              >
                contact@mzadev.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Contact Page:</span>
              <Link
                href="/contact"
                className="text-primary hover:underline font-mono"
              >
                mzadev.com/contact
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

    </div>
  );
}