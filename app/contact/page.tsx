"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/public/project-images/ai-robot.webp";
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

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const email = "contact@gadgetcrunchie.com";

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
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
              Your Vision, My <span className="text-orange-600 dark:text-orange-500">Technical Excellence</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              Leveraging 7+ years of full-stack experience and a solid IT Honors foundation to deliver secure, scalable, and SEO-optimized digital solutions for your brand.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact-form"
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
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
            <div className="relative w-full max-w-90 aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-2 flex items-center justify-center shrink-0">
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
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Let’s Build Your Next Digital Success
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Whether you have a fully-baked idea or just a spark of inspiration, I’m here to engineer the solution. As a solo developer, you get my direct attention—no middlemen, just expert execution.
          </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Direct Contact Card */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Direct Contact
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                M Zubair Abid (Founder & Developer)
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Hyderabad, Sindh, Pakistan (Global Remote)
              </p>
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="text-xs font-mono text-orange-600 dark:text-orange-400 flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  {email}
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Client Support Card */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Client Support
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Existing Clients
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Need an update or a bug fix for a project we finished? I’ve got you covered. Priority Response for my active partners.
              </p>
            </FadeIn>  
          </div>

          {/* Start a Project Card */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-4">
            <FadeIn>
              <div className="p-3 w-fit rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Start a Project
              </h3>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Project Strategy & Inquiries
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Let’s discuss your project scope, SEO needs, or custom WordPress development directly.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
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
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm space-y-6">
          <FadeIn>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Let’s Engineer Your Digital Success
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Ready to scale your business? Fill out the form below with your project details. Whether it’s a custom WordPress build or an SEO audit, I’ll get back to you with a tailored strategy within 24 hours.
              </p>
            </div>
          </FadeIn>
          {formSubmitted ? (
            <FadeIn>
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <Check className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been sent. I will get back to you within 24 hours.</span>
              </div>
            </FadeIn>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FadeIn>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </FadeIn>
              </div>

              <div className="space-y-1.5">
                <FadeIn>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Project Type / Service
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-orange-500">
                    <option className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">Custom Web Application (Next.js / React)</option>
                    <option className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">WordPress / WooCommerce Customization</option>
                    <option className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">Technical SEO Audit & Speed Tuning</option>
                    <option className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">Interactive Web Tool / Calculator</option>
                    <option className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">General Inquiry / Advisory</option>
                  </select>
                </FadeIn>
              </div>

              <div className="space-y-1.5">
                <FadeIn>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, timelines, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 resize-none"
                  />
                </FadeIn>
              </div>
              <FadeIn>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-orange-500/5 space-y-4">
              <FadeIn>
                <h3 className="font-mono text-xs uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold">
                  Get in Touch Directly
                </h3>
              </FadeIn>
              <div className="flex flex-col gap-3 pt-2">
                <FadeIn>
                  <a
                    href={`mailto:${email}`}
                    className="w-full inline-flex items-center justify-between px-5 py-4 bg-zinc-900 hover:bg-orange-600 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-orange-500 dark:hover:text-white font-medium text-xs sm:text-sm rounded-xl transition-all shadow-xs group"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Start a Conversation
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={handleCopy}
                    className="w-full inline-flex items-center justify-between px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs sm:text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
                  >
                    <span>{email}</span>
                    {copied ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </span>
                    )}
                  </button>
                </FadeIn>  
            </div>
          </div>

          {/* Digital Presence */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/40 space-y-4">
            <div className="space-y-1">
              <FadeIn>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold">
                  Digital Presence
                </span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
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
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:border-red-500 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>ByteScript MZA</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>Gadget Crunchie</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-500 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                    <span>Gadget Crunchie</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}