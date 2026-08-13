"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight, Terminal, User } from "lucide-react";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex-1 space-y-6 text-left min-w-0">
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono w-fit">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span>Full-Stack & Technical SEO</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground leading-tight block w-full">
              Architecting fast, result-driven web systems.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed w-full">
              I specialize in engineering high-performance Next.js web applications, custom CMS architectures, and executing deep Core Web Vitals optimizations.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground hover:opacity-90 font-medium text-sm rounded-xl transition-all shadow-sm group"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-card text-foreground border border-border hover:bg-muted font-medium text-sm rounded-xl transition-all"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end shrink-0">
          <FadeIn direction="left" delay={0.3}>
            <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              {!imgError ? (
                <Image
  src="/project-images/hero-section-index.webp"
  alt="Muhammad Zubair Abid"
  width={600}
  height={400}
  priority={true}
  loading="eager"
  fetchPriority="high"
  quality={70} // 👈 70% quality (Size 30% kam hoga)
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" // 👈 Mobile load optimize hoga
  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 block"
/>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 min-h-75 bg-muted/30">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    Image Path Mismatch
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

export default Hero;
