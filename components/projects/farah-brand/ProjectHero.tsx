import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
// Agar aapke project mein FadeIn component alag path se import hota hai toh path adjust kar lein:
import { FadeIn } from "@/components/animations/fade-in";

export default function ProjectHero() {
  return (
    <section className="py-12 md:py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-card">
              <Image 
                src="/project-images/farah-brand-2026.webp" 
                alt="Handcrafted Baby Frock by Farah Brand" 
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Right Side: Content */}
          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> WordPress E-Commerce & UI/UX
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6 font-serif">
                Handcrafted Baby Frocks for Your Little Princess
              </h1>
              
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                Premium katan silk, hand-stitched gota work, and timeless designs tailored specially for girls up to 15 years. Crafted with love, right from our home to yours.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="https://farahbrand.com/" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                    Live Preview <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                    href="https://www.fiverr.com/s/X0LERVk" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-all shadow-2xs"
                >
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    Verified Fiverr Order ↗
                </Link>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}