import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import heroImage from "@/public/project-images/karachi-mart-hero-section.webp";

export default function ProjectHero() {
  return (
    <section className="py-12 md:py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> E-Commerce Frontend Solution
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Karachi Mart – Neighbourhood Grocery Store
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                A modern, ultra-fast, and responsive local grocery store web application featuring area-based location targeting, intuitive category navigation, and seamless checkout design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://nimble-naiad-1bcc26.netlify.app/" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Live Preview <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
                >
                  Hire Me to Build Your Store →
                </Link>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.1}>
            <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-card">
              <Image
                src={heroImage}
                alt="Karachi Mart Preview"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}