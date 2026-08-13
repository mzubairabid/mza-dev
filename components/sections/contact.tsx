"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";

import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "contact@mza.dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="w-full">
          <FadeIn direction="up" delay={0.3}>
          <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-2">
            06 / Contact
          </span></FadeIn>
          <FadeIn direction="down" delay={0.3}>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-foreground">
            Let&apos;s build something exceptional.
          </h2></FadeIn>
          <FadeIn direction="up" delay={0.3}>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base w-full">
            Have a project in mind, need a custom web application, or want to audit your website&apos;s technical SEO?
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm w-full">
            Feel free to reach out directly via email or copy the address to start a discussion.
          </p></FadeIn>
        </div>

        {/* Right Side */}
        <div className="p-8 border border-border rounded-2xl bg-primary/5 space-y-4 w-full">
          <FadeIn direction="left" delay={0.3}>
          <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
            Get in Touch
          </h3></FadeIn>
          
          <div className="flex flex-col gap-3 pt-2">
            <FadeIn direction="right" delay={0.3}>
            <a
              href={`mailto:${email}`}
              className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-primary hover:opacity-90 text-primary-foreground font-medium text-sm rounded-xl transition-all shadow-xs group"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Start a Conversation
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
            <button
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-card hover:bg-muted text-foreground font-mono text-xs rounded-xl border border-border transition-all"
            >
              <span>{email}</span>
              {copied ? (
                <span className="text-primary font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Copied
                </span>
              ) : (
                <span className="text-muted-foreground flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> Copy
                </span>
              )}
            </button></FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;