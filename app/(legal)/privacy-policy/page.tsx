"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ArrowUpRight, ChevronDown, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How can I request the deletion of my personal data?",
      a: "You can send an email directly to contact@mzadev.com with the subject 'Data Deletion Request', and your personal information (such as newsletter emails or comment data) will be permanently erased.",
    },
    {
      q: "Does Codeomist sell my personal data to third parties?",
      a: "No, never. Codeomist does not sell, trade, or rent your personal identification information to any third parties.",
    },
    {
      q: "How are cookies used on Codeomist?",
      a: "Cookies are used to store basic visitor preferences, optimize user experience, and track affiliate links or site performance via privacy-compliant analytics tools.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 bg-transparent text-foreground">
      
      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-4 h-4" />
          <span>Data Protection & Privacy</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight leading-tight">
          Privacy Policy
        </h1>
        
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          Last Updated: March 25, 2026
        </p>
      </section>

      {/* Intro Box */}
      <section className="p-6 sm:p-8 rounded-3xl border border-border/60 bg-accent/20 text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4">
        <p>
          At{" "}
          <Link
            href="https://mzadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            mzadev.com <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          , your privacy is one of my main priorities. As a solo developer, I am committed to protecting the personal information you share with me. This Privacy Policy document contains types of information that is collected and recorded by Codeomist and how I use it.
        </p>
        <p>
          By using my website, you hereby consent to my Privacy Policy and agree to its terms.
        </p>
      </section>

      {/* 2. Main Privacy Policy Content */}
      <section className="p-6 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
        
        {/* 1. Information I Collect */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">01.</span> Information I Collect
          </h2>
          <p>
            I may collect the following types of information to provide you with a better experience:
          </p>
          <ul className="space-y-3 pl-4 border-l-2 border-border/60 pt-2 text-xs sm:text-sm">
            <li>
              <strong className="text-foreground">Personal Information:</strong> This includes your name and email address, which you voluntarily provide when you subscribe to my newsletter, leave a comment, or contact me for web development services.
            </li>
            <li>
              <strong className="text-foreground">Log Files:</strong> Like most websites, Codeomist follows a standard procedure of using log files. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages.
            </li>
            <li>
              <strong className="text-foreground">Cookies and Web Beacons:</strong> I use ‘cookies’ to store information including visitors’ preferences and pages accessed. This helps me optimize the user experience by customizing content.
            </li>
          </ul>
        </div>

        {/* 2. How I Use Your Information */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">02.</span> How I Use Your Information
          </h2>
          <p>
            As the sole operator of this site, I use the information I collect in various ways, including to:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Provide, operate, and maintain my website.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Improve, personalize, and expand content & tools.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Understand and analyze website usage traffic.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Develop new web tools, services, and features.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Communicate directly for support or updates.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>Send opted-in emails and prevent fraud.</span>
            </li>
          </ul>
        </div>

        {/* 3. Third-Party Privacy Policies */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">03.</span> Third-Party Privacy Policies
          </h2>
          <p>
            Codeomist’s Privacy Policy does not apply to other advertisers or third-party websites. I use trusted third-party services that may collect information used to identify you:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li><strong className="text-foreground">Google Analytics:</strong> To track site performance and user interaction metrics.</li>
            <li><strong className="text-foreground">Affiliate Partners:</strong> When you click an affiliate link, a cookie is placed to track referrals for commission purposes.</li>
            <li><strong className="text-foreground">YouTube (ByteScript MZA):</strong> Embedded video tutorials follow YouTube’s official privacy guidelines.</li>
          </ul>
        </div>

        {/* 4. Data Security & Retention */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">04.</span> Data Security & Retention
          </h2>
          <p>
            I take reasonable technical measures (including SSL encryption and secure hosting on Hostinger) to protect your data. However, please remember that no method of internet transmission is 100% secure.
          </p>
          <p className="text-xs sm:text-sm">
            <strong className="text-foreground">Retention:</strong> Personal data is kept only as long as necessary to provide services or comply with legal obligations.
          </p>
        </div>

        {/* 5. Your Data Protection Rights (GDPR/CCPA) */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">05.</span> Your Data Protection Rights (GDPR/CCPA)
          </h2>
          <p>
            I want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><strong className="text-foreground">The right to access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong className="text-foreground">The right to rectification:</strong> You have the right to request correction of inaccurate information.</li>
            <li><strong className="text-foreground">The right to erasure:</strong> You have the right to request that I erase your personal data under certain conditions.</li>
            <li><strong className="text-foreground">The right to object:</strong> You have the right to object to my processing of your personal data.</li>
          </ul>
        </div>

        {/* 6. Children’s Information */}
        <div className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">06.</span> Children’s Information
          </h2>
          <p>
            Protecting children online is another priority. Codeomist does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided this information on my website, please contact me immediately and I will promptly remove it.
          </p>
        </div>

        {/* 7. Contact Me */}
        <div className="space-y-4 border-t border-border/40 pt-6">
          <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono text-base font-bold">07.</span> Contact Me
          </h2>
          <p>
            If you have additional questions or require more information about my Privacy Policy, do not hesitate to reach out:
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

    </main>
  );
}