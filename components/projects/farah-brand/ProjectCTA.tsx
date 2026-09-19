import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCTA() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-lg relative overflow-hidden">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Let's Build Something Amazing
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-foreground">
            Want a High-Performance E-Commerce Store Like This?
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether it's WordPress, WooCommerce, or custom Next.js frontend applications, I can help you design and build a scalable store tailored to your brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-90 transition-opacity inline-block"
              >
                Hire Me For Your Project →
              </Link>
          </div>

        </div>
      </div>
    </section>
  );
}