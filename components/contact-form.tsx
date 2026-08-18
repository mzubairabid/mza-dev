"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/public/project-images/contact.webp";
import { FadeIn } from "@/components/animations/fade-in";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Send,
  LifeBuoy,
  MessageSquare,
  Sparkles,
} from "lucide-react";

// --- Custom Brand SVG Icons ---
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export function ContactFormContent() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const email = "contact@mzadev.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-primary/20 text-primary text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Get In Touch</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Your Vision, My <span className="text-primary">Technical Excellence</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Leveraging 7+ years of full-stack engineering experience and an IT Honors degree, Muhammad Zubair Abid delivers secure, scalable, and Core Web Vitals-optimized web solutions for global brands.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Hero Right Visual Image */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <FadeIn>
              <div className="relative w-full max-w-90 rounded-2xl overflow-hidden border border-border bg-card shadow-xl p-2 flex items-center justify-center shrink-0">
                <Image
                  src={heroImage}
                  alt="M Zubair Abid - Founder & Developer"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact & Support Breakdown */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <FadeIn>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
              Let’s Build Your Next Digital Success
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Whether you have a fully-baked idea or just a spark of inspiration, I’m here to engineer the solution. As a solo developer, you get my direct attention—no middlemen, just expert execution.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Direct Contact Card */}
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-accent text-accent-foreground">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">
                Direct Contact
              </h3>
              <p className="text-sm font-semibold text-foreground">
                M Zubair Abid (Founder & Developer)
              </p>
              <p className="text-xs text-muted-foreground">
                Hyderabad, Sindh, Pakistan (Global Remote)
              </p>
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="text-xs font-mono text-primary flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  {email}
                  {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Client Support Card */}
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-accent text-accent-foreground">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">
                Client Support
              </h3>
              <p className="text-sm font-semibold text-foreground">
                Existing Clients
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need an update or a bug fix for a project we finished? I’ve got you covered. Priority Response for my active partners.
              </p>
            </FadeIn>  
          </div>

          {/* Start a Project Card */}
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-accent text-accent-foreground">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">
                Start a Project
              </h3>
              <p className="text-sm font-semibold text-foreground">
                Project Strategy & Inquiries
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Let’s discuss your project scope, SEO needs, or custom WordPress development directly.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-success font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time: Within 24 Hours.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Interactive Contact Form & Direct Action Box */}
      <section id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Area */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border bg-card shadow-sm space-y-6">
          <FadeIn>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-card-foreground">
                Let’s Engineer Your Digital Success
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ready to scale your business? Fill out the form below with your project details. Whether it’s a custom WordPress build or an SEO audit, I’ll get back to you with a tailored strategy within 24 hours.
              </p>
            </div>
          </FadeIn>
          {formSubmitted ? (
            <FadeIn>
              <div className="p-4 rounded-xl bg-success/10 border border-success/30 text-success text-xs sm:text-sm flex items-center gap-2">
                <Check className="w-5 h-5 shrink-0 text-success" />
                <span>Thank you! Your message has been sent. I will get back to you within 24 hours.</span>
              </div>
            </FadeIn>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FadeIn>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-secondary text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-secondary text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </FadeIn>
              </div>

              <div className="space-y-1.5">
                <FadeIn>
                  <label className="text-xs font-semibold text-foreground">
                    Project Type / Service
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-input bg-secondary text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring">
                    <option className="bg-popover text-popover-foreground">Custom Web Application (Next.js / React)</option>
                    <option className="bg-popover text-popover-foreground">WordPress / WooCommerce Customization</option>
                    <option className="bg-popover text-popover-foreground">Technical SEO Audit & Speed Tuning</option>
                    <option className="bg-popover text-popover-foreground">Interactive Web Tool / Calculator</option>
                    <option className="bg-popover text-popover-foreground">General Inquiry / Advisory</option>
                  </select>
                </FadeIn>
              </div>

              <div className="space-y-1.5">
                <FadeIn>
                  <label className="text-xs font-semibold text-foreground">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, timelines, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-secondary text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-ring resize-none"
                  />
                </FadeIn>
              </div>
              <FadeIn>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </FadeIn>
            </form>
          )}
        </div>

        {/* Right Side: Quick Action Box & Digital Presence */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 border border-border rounded-3xl bg-accent/40 space-y-4">
              <FadeIn>
                <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  Get in Touch Directly
                </h3>
              </FadeIn>
              <div className="flex flex-col gap-3 pt-2">
                <FadeIn>
                  <a
                    href={`mailto:${email}`}
                    className="w-full inline-flex items-center justify-between px-5 py-4 bg-primary text-primary-foreground hover:bg-primary-hover font-medium text-xs sm:text-sm rounded-xl transition-all shadow-xs group"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Start a Conversation
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </FadeIn>
                <FadeIn>
                  <button
                    onClick={handleCopy}
                    className="w-full inline-flex items-center justify-between px-5 py-4 bg-card hover:bg-muted text-card-foreground font-mono text-xs sm:text-sm rounded-xl border border-border transition-all cursor-pointer"
                  >
                    <span>{email}</span>
                    {copied ? (
                      <span className="text-success font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </span>
                    )}
                  </button>
                </FadeIn>  
            </div>
          </div>

          {/* Digital Presence */}
          <div className="p-6 border border-border rounded-3xl bg-card space-y-4">
            <div className="space-y-1">
              <FadeIn>
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  Digital Presence
                </span>
                <h4 className="text-lg font-bold text-card-foreground">
                  Let’s Connect Online
                </h4>
              </FadeIn>
            </div>

            <div className="space-y-2 pt-1">
              <FadeIn>
                <a
                  href="https://youtube.com/@ByteScriptMZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-secondary flex items-center justify-between text-xs sm:text-sm font-semibold text-secondary-foreground hover:border-primary transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>MZA Dev</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                </a>
              </FadeIn>
              <FadeIn>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-secondary flex items-center justify-between text-xs sm:text-sm font-semibold text-secondary-foreground hover:border-primary transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>MZA Dev</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                </a>
              </FadeIn>
              <FadeIn>      
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-secondary flex items-center justify-between text-xs sm:text-sm font-semibold text-secondary-foreground hover:border-primary transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-foreground" />
                    <span>MZA Dev</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}