"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, ArrowUpRight, ChevronDown, Scale, CheckCircle2 } from "lucide-react";

export default function TermsAndConditionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I use code snippets from Codeomist in my own projects?",
      a: "Yes! You can use shared code snippets for personal or commercial projects. However, you cannot republish the raw articles, re-sell custom interactive tools, or claim the site's brand design as your own.",
    },
    {
      q: "Are the tutorials and web tools guaranteed to be error-free?",
      a: "While all tools and tutorials are thoroughly tested before publishing, they are provided 'as is'. You are advised to test scripts in a isolated development environment before pushing to live production servers.",
    },
    {
      q: "What laws govern these Terms and Conditions?",
      a: "These terms are governed by and construed in accordance with the laws of Pakistan.",
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 bg-transparent text-foreground">
      
      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
          <Scale className="w-4 h-4" />
          <span>Legal Agreement</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight leading-tight">
          Terms and Conditions
        </h1>
        
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          Last Updated: March 25, 2026
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
          ! These Terms and Conditions outline the rules and regulations for the use of my website, located at{" "}
          <Link href="/" className="text-primary hover:underline font-mono text-xs sm:text-sm">
            https://www.mzadev.com
          </Link>
          .
        </p>
        <p>
          By accessing this website, I assume you accept these terms and conditions. Do not continue to use Codeomist if you do not agree to all of the terms and conditions stated on this page.
        </p>
      </section>

      {/* 2. Main Terms Content */}
      <section className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        
        {/* 1. Terminology */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">01.</span> Terminology
          </h2>
          <ul className="space-y-2 pl-4 border-l-2 border-border/60">
            <li>
              <strong className="text-foreground">“Client”, “You”, “Your”:</strong> Refers to you, the person logging on to this website and compliant with the Developer’s terms.
            </li>
            <li>
              <strong className="text-foreground">“The Developer”, “I”, “My”, “Me”:</strong> Refers to Zubair Abid, the owner and solo developer of Codeomist.
            </li>
            <li>
              <strong className="text-foreground">“Party”, “Parties”:</strong> Refers to both the Client and myself.
            </li>
          </ul>
        </div>

        {/* 2. Intellectual Property Rights */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">02.</span> Intellectual Property Rights (License)
          </h2>
          <p>
            Unless otherwise stated, Zubair Abid and/or its licensors own the intellectual property rights for all material on Codeomist. All intellectual property rights are reserved.
          </p>
          <div className="space-y-2 pt-2">
            <p className="font-semibold text-foreground">You must not:</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Republish material (articles, code snippets, or custom tools) from Codeomist without my prior written consent.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Sell, rent, or sub-license my custom-coded tools or premium developer content.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Reproduce, duplicate, or copy my visual design assets or core brand identity.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Redistribute content from Codeomist (unless content is specifically made and tagged for redistribution).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. User Comments & Content */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">03.</span> User Comments & Content
          </h2>
          <p>
            Parts of this website offer an opportunity for users to post feedback and exchange opinions. I do not filter, edit, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Zubair Abid.
          </p>
          <p>
            I reserve the right to monitor all feedback/comments and to remove any submission which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
          </p>
        </div>

        {/* 4. Hyperlinking to My Content */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">04.</span> Hyperlinking to My Content
          </h2>
          <p>
            The following organizations may link to my website without prior written approval:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li>Search engines (Google, Bing, DuckDuckGo, etc.).</li>
            <li>Tech news organizations and software publications.</li>
            <li>Government agencies and educational institutions.</li>
            <li>Trusted web developer directories.</li>
          </ul>
          <p className="text-xs sm:text-sm pt-2">
            I may consider and approve link requests from consumer/business information sources, technology blogs, and developer communities if I determine that the link does not reflect unfavorably on my professional brand.
          </p>
        </div>

        {/* 5. iFrames */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">05.</span> iFrames
          </h2>
          <p>
            Without prior approval and explicit written permission, you may not create frames around my Webpages that alter in any way the visual presentation, framing, or appearance of Codeomist.
          </p>
        </div>

        {/* 6. Content Liability */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">06.</span> Content Liability
          </h2>
          <p>
            I shall not be held responsible for any content that appears on your Website if you are linking to me. You agree to protect and defend me against all claims rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal.
          </p>
        </div>

        {/* 7. Reservation of Rights */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">07.</span> Reservation of Rights
          </h2>
          <p>
            I reserve the right to request that you remove all links or any particular link to my Website. You approve to immediately remove all links to my Website upon request. I also reserve the right to amend these terms and conditions and its linking policy at any time.
          </p>
        </div>

        {/* 8. Disclaimer of Warranties */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">08.</span> Disclaimer of Warranties
          </h2>
          <p>
            To the maximum extent permitted by applicable law, I exclude all representations, warranties, and conditions relating to my website and the use of this website.
          </p>
          <div className="p-4 rounded-2xl bg-background/60 border border-border/60 text-xs sm:text-sm text-amber-500/90 space-y-1">
            <p className="font-bold text-foreground">Important Note for Developers:</p>
            <p>
              As an independent solo developer, I am not liable for any loss or damage of any nature resulting from the use of my shared code snippets, compiler tools, or technical tutorials. Use them at your own risk.
            </p>
          </div>
        </div>

        {/* 9. Governing Law */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">09.</span> Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
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