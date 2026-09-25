"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";
import heroImg from "@/public/project-images/ai-robot.webp";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-6 sm:p-10 md:p-12">
      <ParticlesBackground className="opacity-60" 
        icons={[
      "/icons/nextjs.svg",
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/javascript.svg",
      "/icons/html5.svg",
      "/icons/css3.svg",
      "/icons/wordpress.svg",
      "/icons/shopify.svg",
      "/icons/github.svg",
    ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary">
            <Terminal className="w-3.5 h-3.5" />
            <span>Independent Full-Stack Engineer & Technical SEO Specialist</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            Expert Web Engineering. Direct Accountability.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build fast, secure, and search-engine optimized web applications for businesses that need speed, custom functionality, and measurable online visibility. Working directly with me means zero agency fluff and total technical transparency.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 rounded-xl border border-border hover:bg-muted text-foreground font-semibold text-sm transition-all"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>

        {/* Right Visual Profile Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-sm rounded-2xl p-4 bg-card border border-border shadow-xl space-y-4">
            
            {/* Image Wrapper */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border bg-muted shadow-md">
              <Image
                src={heroImg}
                alt="Muhammad Zubair Abid - Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500 block"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Profile Details */}
            <div className="space-y-1 text-center">
              <h3 className="text-base font-bold text-foreground">
                Zubair Abid (MZA)
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                Full-Stack Engineer & Founder
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-medium pt-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="whitespace-nowrap">Available for Select Client Projects</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Quick Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-border relative z-10">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
            7+ Years
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Hands-On Web Engineering
          </div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
            50+ Projects
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Custom Sites and Tools Built
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
            100%
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Direct Senior Developer Support
          </div>
        </div>
      </div>
    </section>
  );
}