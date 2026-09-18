import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import categoriesImg from "@/public/project-images/karachi-mart-categories.webp";

export default function Categories() {
  return (
    <section className="not-prose my-16">
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-semibold">
            ORGANIZED SHOPPING
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight m-0 mt-1">
            Browse By Categories
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground m-0">
            Quickly filter daily essentials, fresh produce, and household goods through an intuitive categorized layout.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Category Description / Details */}
        <div className="lg:col-span-6 space-y-6">
          <FadeIn direction="left" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-foreground">Seamless Department Navigation</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Karachi Mart is structured to segment products logically, reducing search friction for users looking for dairy, vegetables, pantry staples, and beverages. Every category grid is optimized for quick touch interactions on mobile screens.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">✓ Instant filter response without page reload</li>
                <li className="flex items-center gap-2">✓ High-converting grid layout for fast item discovery</li>
                <li className="flex items-center gap-2">✓ Mobile-first touch-friendly category cards</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Category Image */}
        <div className="lg:col-span-6 flex justify-center items-center w-full">
          <FadeIn direction="right" delay={0.2}>
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <Image
                src={categoriesImg}
                alt="Karachi Mart Products Section"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}