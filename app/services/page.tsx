import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import FaqSchema from "@/components/FaqSchema";
import { FaqSection } from "@/components/sections/faq-section";

import {
  Code2,
  Gauge,
  ShoppingCart,
  Layout,
  Globe,
  Star,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development & Technical SEO Services | MZA Dev",
  description:
    "Explore high-performance web development, headless e-commerce, custom web tools, and technical SEO services engineered by Muhammad Zubair Abid (MZA Dev).",
};

// Safe Inline SVGs
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function ServicesPage() {
  const coreServices = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description:
        "Custom WordPress, Shopify, and hand-coded solutions built with zero bloated page builders. Speed and conversion-focused from day one.",
    },
    {
      icon: <GoogleIcon className="w-8 h-8 text-primary" />,
      title: "SEO & Technical Optimization",
      description:
        "Hardcoded on-page optimization, clean crawl architecture, schema markup, and Core Web Vitals optimization to lock in 90+ PageSpeed scores.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Google Services & Tracking",
      description:
        "End-to-end GA4, GSC, and GTM integration. Server-side tracking setup to capture clean conversion data without losing signals to ad-blockers.",
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Brand & Graphic Design",
      description:
        "High-converting UI/UX layouts, clean custom wireframes, and conversion-focused visual elements tailored around buyer psychology.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "Blog Architecture & Writing",
      description:
        "Advanced blogging infrastructure optimized for high-volume traffic, quick ad-network approval (AdSense/Ezoic), and rapid Google indexing.",
    },
    {
      icon: <XIcon className="w-8 h-8 text-primary" />,
      title: "Ecosystem & Social Integration",
      description:
        "Custom API integrations, social synchronization, and email marketing funnels built directly into your site to automate client engagement.",
    },
  ];

  const microFeatures = [
    "WordPress Customization",
    "Technical SEO Foundation",
    "Shopify Liquid Coding",
    "Speed & Core Web Vitals",
    "GA4 & Server-Side Tracking",
    "Custom HTML5/CSS3/JS",
    "E-commerce Architecture",
    "Conversion Funnel Design",
    "API & Social Integration",
  ];

  const testimonials = [
    {
      text: "Außergewöhnliche Arbeit an unserem Online-Lebensmittelgeschäft. Von der ersten Neugestaltung bis zur komplexen PayPal-Integration war die technische Ausführung von Zubair makellos. Wenn Sie einen professionellen WordPress-Entwickler suchen, der internationale E-Commerce-Standards versteht, ist Gadget Crunchie die beste Wahl.",
      name: "Luqman Ahmad",
      flag: "🇩🇪",
      title: "Founder, Desi Shop Zellingen",
    },
    {
      text: "Starting an HVAC business in the USA required a high-performance website that actually converts. Zubair (Gadget Crunchie) delivered a custom-engineered solution that exceeded my expectations. The site is fast, SEO-optimized, and was indexed by Google almost immediately.",
      name: "Arsalan Aziz",
      flag: "🇺🇸",
      title: "Founder, Modern HVAC",
    },
    {
      text: "Working with Zubair was a game-changer for our real estate business. He didn't just build a highly professional, fast WordPress website for Aqsa Property Agency, but his technical SEO skills actually pushed our site into the Top 5 on Google Maps search results within weeks!",
      name: "Aqsa Property",
      flag: "🇵🇰",
      title: "Real Estate Agency",
    },
  ];

  const faqs = [
    {
      q: "Who provides high-performance web engineering and full-stack development services?",
      a: "Muhammad Zubair Abid (MZA Dev) provides custom full-stack web engineering, Next.js applications, custom WordPress and Shopify development, server-side tracking, and technical SEO services.",
    },
    {
      q: "What platforms do you specialize in for web development?",
      a: "I specialize in Next.js, React, TypeScript, custom JavaScript, as well as lightweight, custom-coded WordPress and Shopify builds without relying on laggy page builders.",
    },
    {
      q: "Will my website be fully optimized for mobile devices and search engines?",
      a: "Yes, 100%. Mobile-first responsive layouts, strict Core Web Vitals targets, structured JSON-LD schema, and semantic HTML are baked directly into the codebase.",
    },
    {
      q: "Can you integrate advanced analytics and server-side tracking?",
      a: "Absolutely. I configure complete GA4 properties, Google Search Console, GTM, and custom server-side conversion tracking so you never lose data due to browser ad-blockers.",
    },
    {
      q: "How long does it typically take to complete a custom web project?",
      a: "Turnaround times depend on scope: single landing pages usually take 3 to 5 days, while complex full-stack web platforms or custom e-commerce stores take 2 to 3 weeks.",
    },
    {
      q: "Do you offer post-launch support and ongoing maintenance?",
      a: "Yes! Every project includes dedicated post-launch support. I also offer ongoing maintenance, core updates, performance audits, and emergency bug fixes.",
    },
    {
      q: "What do you need from me to get started on the project?",
      a: "I just need your core project objectives, existing content/assets (like logos and copy), access credentials (hosting/domain/APIs), and timely feedback on progress milestones.",
    },
    {
      q: "How do you ensure project success and clear communication?",
      a: "You work directly with me—the senior engineer—without account managers or delays. We work through clear milestone sign-offs, live staging links, and transparent updates.",
    },
    {
      q: "How much will a custom web development project cost?",
      a: "Pricing depends strictly on technical scope, feature complexity, and custom integrations. I provide transparent, fixed-rate proposals after reviewing your initial brief.",
    },
    {
      q: "What are your payment terms?",
      a: "Projects are typically structured on milestone payments—50% upfront to initiate core development and 50% upon final testing, review, and deployment.",
    },
    {
      q: "How can I book a project with you?",
      a: "Click 'Let's Discuss Your Project', fill out the quick contact form, and I will get back to you within 24 hours to set up our kick-off brief.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 bg-background text-foreground">
      {/* Inject JSON-LD Schema */}
      <FaqSchema
        faqList={faqs.map((item: { q: string; a: string }) => ({
          question: item.q,
          answer: item.a,
        }))}
      />

      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                Services
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                High-Performance Web Development That Drives Growth
              </h1>
              <p>
                Web Engineering & Full-Stack Development Services by MZA Dev (Muhammad Zubair Abid) deliver custom WordPress, Shopify, Next.js, and hand-coded web applications engineered to eliminate slow loading times, rank on Google and AI search engines, and convert cold traffic into customers. Clean architecture, server-level tracking, and zero framework bloat.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image Wrapper */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src="/project-images/web-development.webp"
                  alt="Gadget Crunchie Development Services"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Trust Stats Counter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 mt-12 border-t border-border text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-xl font-bold text-foreground">5.0/5</span>
              </div>
              <p className="text-xs text-muted-foreground">Verified Google Reviews</p>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-bold text-foreground">50+ Projects</div>
              <p className="text-xs text-muted-foreground">Global Solutions Delivered</p>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-bold text-foreground flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 text-primary" /> 90+ Score
              </div>
              <p className="text-xs text-muted-foreground">Average PageSpeed Insights</p>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-bold text-foreground flex items-center justify-center gap-1">
                <Globe className="w-4 h-4 text-primary" /> 6+ Countries
              </div>
              <p className="text-xs text-muted-foreground">International Clients Served</p>
            </div>
          </div>

          <p className="text-[10px] font-mono uppercase tracking-widest text-center text-muted-foreground mt-6">
            Clean Coding and Speed Optimization Proven by Top-Tier Google Reviews.
          </p>
        </section>
      </FadeIn>

      {/* 2. Core Web Services Grid Section */}
      <FadeIn>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Core Web Services Built For Business Outcomes
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Stop losing customers to high bounce rates. I handle the full technical stack to ensure your digital infrastructure operates at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all space-y-4 shadow-xs"
              >
                <div className="p-3 w-fit rounded-xl bg-accent border border-border">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Micro-Features Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6 max-w-5xl mx-auto">
            {microFeatures.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* YouTube Banner */}
          <div className="p-4 sm:p-5 rounded-2xl border border-primary/30 bg-primary/5 text-center text-xs sm:text-sm text-foreground max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <YoutubeIcon className="w-5 h-5 text-red-600 shrink-0" />
            <span>
              <strong>Watch Video:</strong> Don't miss out! Check out my latest YouTube video for in-depth insights and exciting content.
            </span>
            <a
              href="https://youtube.com/@ByteScriptMZA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Click here to watch MZA Dev now! <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </FadeIn>

      {/* 3. Client Testimonials Section */}
      <FadeIn>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Real Before-and-After Numbers From Real Businesses
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
              I do not showcase vanity metrics. The feedback from my global clients is about page speed jumping from 40 to 90+, organic traffic spikes, and funnels that actually convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card space-y-4 flex flex-col justify-between"
              >
                <p className="text-xs leading-relaxed text-muted-foreground italic">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      {t.name} <span>{t.flag}</span>
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 4. Reusable FAQ Section (Client Component imported into Server Component) */}
      <FaqSection faqs={faqs} />

      {/* 5. Bottom CTA Section */}
      <FadeIn>
        <section className="w-full text-center p-8 sm:p-12 rounded-3xl border border-border bg-card flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight max-w-3xl">
            Ready to See What Your Site Should Actually Look Like?
          </h2>
          <p className="text-xs sm:text-base text-muted-foreground max-w-2xl w-full leading-relaxed mx-auto text-center">
            No agency overhead. No outsourced communication. You talk directly to me, the developer building your project. Let's collaborate to build a clean, bulletproof, and lightning-fast digital presence.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}