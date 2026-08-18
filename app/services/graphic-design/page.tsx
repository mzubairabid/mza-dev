import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import FaqSchema from "@/components/FaqSchema";
import { FaqSection } from "@/components/sections/faq-section";

import {
  Zap,
  ArrowUpRight,
  Check,
  Star,
  Layout,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Graphic Design & Brand Visuals | MZA Dev",
  description:
    "Professional graphic design, UI/UX visual assets, brand identity, and media design tailored to elevate your digital presence and engage target audiences.",
};

export default function GraphicDesignServicesPage() {
  const servicesTable = [
    {
      service: "Premium Logo Design",
      whatYouGet: "Unique, scalable vector logos",
      howItHelps: "Builds an instant 'Elite' brand identity",
    },
    {
      service: "Social Media Graphics",
      whatYouGet: "High-impact posts & story visuals",
      howItHelps: "Boosts organic engagement & trust",
    },
    {
      service: "Website Banners",
      whatYouGet: "Custom-coded hero & landing visuals",
      howItHelps: "Improves first impressions & bounce rates",
    },
    {
      service: "High-CTR Thumbnails",
      whatYouGet: "Psychology-based YouTube thumbnails",
      howItHelps: "Drives more clicks for creators & brands",
    },
    {
      service: "Full Brand Kit",
      whatYouGet: "Color palettes, typography & rules",
      howItHelps: "Ensures 100% visual consistency",
    },
    {
      service: "Print-Ready Materials",
      whatYouGet: "Business cards, flyers & brochures",
      howItHelps: "Professional offline brand promotion",
    },
  ];

  const designPhilsophy = [
    {
      title: "1. Research & Brand Archetype",
      desc: "Before opening Photoshop or Illustrator, I study your niche and target audience to align your visual identity with your core Brand Archetype.",
    },
    {
      title: "2. Minimalist & Matte Aesthetic",
      desc: "Specializing in clean, modern, minimalist layouts—using matte palettes that give your brand a high-end, authoritative feel.",
    },
    {
      title: "3. SEO-Optimized Web Graphics",
      desc: "Assets are optimized for WebP/SVG standards with proper ALT-text structures to pass performance targets without quality loss.",
    },
  ];

  const faqs = [
    {
      q: "Who provides custom graphic design and visual branding services?",
      a: "Muhammad Zubair Abid (MZA Dev) provides custom visual branding, vector logo design, high-CTR YouTube thumbnails, marketing media assets, and digital design services.",
    },
    {
      q: "Do you offer custom design styles, or do you stick to one aesthetic?",
      a: "While I specialize in modern minimalist and clean aesthetic branding, I adapt my design style entirely to fit your target market, brand archetype, and industry standards.",
    },
    {
      q: "In what formats do you deliver the final design files?",
      a: "You receive print-ready vector files (AI, EPS, PDF) along with web-optimized digital assets (PNG, JPG, WebP, SVG) and organized source files depending on your package.",
    },
    {
      q: "Do you design specialized media for YouTube creators and social channels?",
      a: "Absolutely. I design high-CTR, psychology-based YouTube thumbnails, channel banners, social media ad creatives, and stream overlays tailored to capture attention and boost engagement.",
    },
    {
      q: "Can I request revisions if I need changes to the designs?",
      a: "Yes, 100%! All packages come with built-in revision rounds, and the Premium plan offers unlimited revisions to ensure you get the exact look you want.",
    },
    {
      q: "What is the typical delivery timeline for graphic design assets?",
      a: "Individual graphics and YouTube thumbnails are usually delivered within 24 to 48 hours. Complete brand identity packages or multi-asset designs take around 3 to 7 days.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 bg-transparent text-foreground">
      {/* Inject JSON-LD Schema */}
      <FaqSchema 
        faqList={faqs.map((item: { q: string; a: string }) => ({ 
          question: item.q, 
          answer: item.a 
        }))} 
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-transparent p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                Creative Graphic Design Services
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Designs That Speak Your Brand’s Language
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Graphic Design & Visual Branding Services by MZA Dev focus on engineering high-impact, psychology-backed brand identities and visual assets. Created by Muhammad Zubair Abid, these design solutions combine custom vector branding, high-CTR YouTube thumbnails, conversion-driven UI graphics, and web-optimized media formats designed to elevate visual authority across digital platforms.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>View My Design Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground font-semibold text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Contact Me</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <FadeIn>
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src="/project-images/graphic-design.webp"
                  alt="Creative Graphic Design Services"
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

      {/* 2. Visual Identity Value Section */}
      <section className="p-8 sm:p-12 rounded-3xl border border-border/60 bg-accent/20 space-y-6">
        <div className="max-w-3xl space-y-4">
          <FadeIn>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Minimalist Brand Identity
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Why Visual Identity Matters in the Digital Economy
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The digital landscape is crowded. With the rise of AI-generated content, human-centric, purposeful design has become a premium asset. A strong visual identity helps your business stand out in today’s competitive world.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I offer personalized creative graphic design services crafted to leave a lasting impression. From the “Matte Aesthetic” to high-end minimalist luxury, I ensure your brand doesn’t just exist—it dominates.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Synergy of Design and Development */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-border/60 pb-6">
          <FadeIn>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              The Developer-Designer Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              The Synergy of Design and Development
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-accent/20 space-y-3">
            <Zap className="w-6 h-6 text-primary" />
            <FadeIn>
              <h3 className="text-base font-bold text-foreground">Performance First</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Website banners are optimized for modern WebP/SVG formats to keep your LCP score green and loading speeds fast.
              </p>
            </FadeIn>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-accent/20 space-y-3">
            <Layout className="w-6 h-6 text-primary" />
            <FadeIn>
              <h3 className="text-base font-bold text-foreground">UI/UX Integration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Icons and visual elements are designed around real user experience journeys that naturally guide eyes to your primary CTAs.
              </p>
            </FadeIn>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-accent/20 space-y-3">
            <Monitor className="w-6 h-6 text-primary" />
            <FadeIn>
              <h3 className="text-base font-bold text-foreground">Platform Consistency</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every design component is tested across mobile, tablet, and ultra-wide desktop displays for pristine visual clarity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Service Overview Table */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-border/60 pb-6">
          <FadeIn>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Graphic Design Services: What I Offer
            </h2>
          </FadeIn>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border/60 bg-accent/10">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-accent/50 border-b border-border/60 text-foreground font-semibold">
              <tr>
                <th className="p-4">Design Service</th>
                <th className="p-4">What You Get</th>
                <th className="p-4">How It Helps Your Brand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-muted-foreground">
              {servicesTable.map((item, idx) => (
                <tr key={idx} className="hover:bg-accent/40 transition-colors">
                  <td className="p-4 font-bold text-foreground">{item.service}</td>
                  <td className="p-4">{item.whatYouGet}</td>
                  <td className="p-4 text-primary font-medium">{item.howItHelps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Solo Expert Approach */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
            Solo Creator Approach
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
            My Design Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designPhilsophy.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-accent/20 space-y-3">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Transparent Pricing Section */}
      <section className="space-y-10 pt-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
            Pricing Plans
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
            Transparent Pricing for Every Stage of Business
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Choose the right package that fits your current goals. No hidden fees, just pure creative value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* BASIC PLAN */}
          <div className="p-8 rounded-3xl border border-border/60 bg-accent/20 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Basic Plan</h3>
                <p className="text-xs text-muted-foreground min-h-8">
                  Perfect for startups or one-time design needs.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-mono text-foreground">$19</span>
                <span className="text-xs text-muted-foreground">/ fixed</span>
              </div>

              <div className="border-t border-border/60 pt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>1 Professional Logo or 2 Custom Banners</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>High-Resolution PNG / JPG Export</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>2 Rounds of Revisions</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Delivery: 48 Hours</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?plan=design-basic"
              className="w-full py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground text-center font-semibold text-xs sm:text-sm transition-all block"
            >
              Get Started
            </Link>
          </div>

          {/* STANDARD PLAN (POPULAR HIGHLIGHT) */}
          <div className="relative p-8 rounded-3xl border-2 border-primary bg-accent/30 space-y-6 flex flex-col justify-between shadow-lg scale-102">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Standard Plan</h3>
                <p className="text-xs text-muted-foreground min-h-8">
                  Ideal for small businesses and growing creators.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-mono text-foreground">$49</span>
                <span className="text-xs text-muted-foreground">/ fixed</span>
              </div>

              <div className="border-t border-border/60 pt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Logo Design + Social Media Starter Kit (5 Posts)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Vector Source Files Included (AI / PSD)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Brand Color Palette & Typography Guide</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Priority Support & Asset Handoff</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?plan=design-standard"
              className="w-full py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground text-center font-semibold text-xs sm:text-sm transition-all shadow-md block"
            >
              Choose Standard
            </Link>
          </div>

          {/* PREMIUM PLAN */}
          <div className="p-8 rounded-3xl border border-border/60 bg-accent/20 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Premium Plan</h3>
                <p className="text-xs text-muted-foreground min-h-8">
                  The Complete Branding Experience.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-mono text-foreground">$99</span>
                <span className="text-xs text-muted-foreground">/ fixed</span>
              </div>

              <div className="border-t border-border/60 pt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Full Brand Identity Kit & Design Guidelines</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Unlimited Revisions until 100% Satisfaction</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>YouTube Branding (Banner + 5 High-CTR Thumbnails)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Web-Ready SVG/WebP Asset Optimization</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?plan=design-premium"
              className="w-full py-3.5 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground text-center font-semibold text-xs sm:text-sm transition-all block"
            >
              Select Premium
            </Link>
          </div>
        </div>
      </section>

      {/* 7. The Human Factor / EEAT Section */}
      <section className="p-8 sm:p-12 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
          The Human Factor
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
          Why Hire a Solo Developer-Designer?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Google’s E-E-A-T guidelines emphasize Experience and Authoritativeness. When you hire me, you get years of hands-on experience in both web development backend architectures and frontend design aesthetics.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          I understand how a logo renders inside a sticky glassmorphic header, and how social media posts look on dark-mode displays. This dual expertise ensures your visual identity works seamlessly across all platforms.
        </p>
      </section>

      {/* 8. FAQs Section (Rendered via Client Component) */}
      <FaqSection faqs={faqs} />

      {/* 9. Final CTA */}
      <section className="p-8 sm:p-12 rounded-3xl border border-border/60 bg-accent/30 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
            Let’s Build Your Visual Future Today
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Your brand deserves a visual identity that works as hard as you do. Let’s elevate your digital assets with high-converting graphic design.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
        >
          <span>Hire Me</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}