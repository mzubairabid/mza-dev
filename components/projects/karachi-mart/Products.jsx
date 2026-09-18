import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import productImg from "@/public/project-images/featured.webp";

export default function Products() {
  return (
    <section className="not-prose my-16">
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-semibold">
            CATALOGUE & CARTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight m-0 mt-1">
            Dynamic Product Listing & Checkout
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground m-0">
            Engineered with smooth state management to handle item cards, pricing calculations, and live cart adjustments.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Product Section Image */}
        <div className="lg:col-span-6 flex justify-center items-center w-full order-2 lg:order-1">
          <FadeIn direction="left" delay={0.1}>
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <Image
                src={productImg}
                alt="Karachi Mart Products Section"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Product Description / Details */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <FadeIn direction="right" delay={0.2}>
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-foreground">Interactive Item Cards & Pricing</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The product display layout highlights crisp item imagery, clear pricing badges, discount tags, and direct "Add to Cart" triggers. State handling ensures quantities update instantly without jarring layout shifts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">✓ Real-time subtotal calculation</li>
                <li className="flex items-center gap-2">✓ Responsive product cards for all screen sizes</li>
                <li className="flex items-center gap-2">✓ Lightweight DOM rendering for instant responsiveness</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}