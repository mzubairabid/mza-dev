"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import {
  FOOTER_CATEGORIES,
  FOOTER_LEGAL_LINKS,
  BOTTOM_BAR_SOCIALS,
  type FooterLink,
} from "@/lib/navigation";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="w-full border-t border-border/60 bg-accent/20 text-foreground pt-12 pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 4-Column Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Column 1: Brand Info & About */}
          <div className="space-y-3">
            <Link href="/" className="inline-block font-serif text-2xl font-bold text-foreground tracking-tight">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <h3 className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">
              {SITE_CONFIG.tagline}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Column 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-mono uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {FOOTER_CATEGORIES.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="hover:text-primary transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-mono uppercase tracking-wider">
              Legal Pages
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {FOOTER_LEGAL_LINKS.map((legal) => (
                <li key={legal.href}>
                  <Link href={legal.href} className="hover:text-primary transition-colors">
                    {legal.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Form */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground font-mono uppercase tracking-wider">
              Quick Contact
            </h4>
            {submitted ? (
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message sent successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full text-xs px-3 py-2 rounded-lg bg-background border border-border/80 focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
                <textarea
                  required
                  rows={2}
                  placeholder="Your message..."
                  className="w-full text-xs px-3 py-2 rounded-lg bg-background border border-border/80 focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full text-xs font-mono font-medium py-2 px-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs">
            {BOTTOM_BAR_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;