import React from "react";
import Link from "next/link";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Code2,
  Cpu,
  Server,
  Workflow,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const post = getPostBySlug("apis-in-web-development")!;

export default function ApiRoleShopifyCaseStudyPostPage() {
  const protocolComparisonData = [
    {
      protocol: "REST API",
      bestFor: "Simple, predictable data fetching & edge caching",
      responseSize: "Larger, fixed fields payload",
      caching: "Highly cacheable at CDN level",
      recommended: true,
    },
    {
      protocol: "GraphQL",
      bestFor: "Complex, deeply nested multi-resource queries",
      responseSize: "Smaller, strictly query-shaped JSON",
      caching: "Requires custom client-side cache stores",
      recommended: false,
    },
  ];

  const faqList = [
    {
      q: "What is a web API in modern web development?",
      a: "A web API (Application Programming Interface) acts as a secure, structured messenger between your frontend interface and backend data stores. It accepts structured requests (like HTTP GET/POST) and returns lightweight data payloads (usually JSON) without exposing database logic.",
    },
    {
      q: "Why do APIs fail under high traffic?",
      a: "APIs typically fail due to uncoordinated client-side requests, lack of edge caching, database query bottlenecks, or CORS misconfigurations. Without a middleware caching layer, high traffic forces the origin server to repeatedly compute identical responses.",
    },
    {
      q: "How do headless APIs improve site load speed?",
      a: "Headless APIs decouple heavy backend template engines (like Shopify Liquid or WordPress PHP) from frontend rendering. By delivering raw JSON via edge CDNs to lightweight frameworks like Next.js, TTFB and PageSpeed scores improve dramatically.",
    },
  ];

  const recommendedGuides = [
    {
      title: "Add Google AdSense to WordPress Without Plugins",
      desc: "Lock layout shifts and eliminate plugin bloat with direct hook insertions.",
      url: "/blog/add-google-adsense-wordpress-without-plugins",
    },
    {
      title: "Best Online React Compiler 2026: Build & Deploy React Instantly",
      desc: "Explore top browser-based developer tools and real-time execution environments.",
      url: "#",
    },
    {
      title: "Core Web Vitals in 2026: What’s Changed and How to Pass",
      desc: "Master INP, LCP, and CLS performance optimization strategies.",
      url: "#",
    },
  ];

  // Schema Structured Data (JSON-LD) for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "The Role of APIs in Web Development: A Shopify Case Study",
    description:
      "How decoupling a high-traffic fitness storefront using Shopify Storefront API and Next.js dropped load times from 8.3s to 1.1s and reduced cart abandonment by 34%.",
    author: {
      "@type": "Person",
      name: "Muhammad Zubair Abid",
      url: "https://mzadev.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "MZA Dev",
      logo: {
        "@type": "ImageObject",
        url: "https://mzadev.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mzadev.com/blog/role-of-apis-shopify-case-study",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <BlogLayout post={post} schema={[articleStructuredData, faqStructuredData]}>
      <div className="space-y-16">
        {/* Key Metrics Showcase */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Mobile PageSpeed
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <span>41</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span>94</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Jumped to 90+ on initial deployment
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Average Load Time
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span>8.3s</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span>1.1s</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Tested on standard 4G connections
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Cart Abandonment
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <span>-34%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Recorded within the first 30 days
            </p>
          </div>
        </section>

        {/* Main Content Body & Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <article className="lg:col-span-8 space-y-12 text-muted-foreground leading-relaxed text-base">
            {/* Section 1: Client Challenge */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                <span>The Client Challenge</span>
              </h2>

              <p>
                Many people talk about the role of APIs in web development, but
                you only realize their true value when a system breaks down
                under heavy traffic. My client ran a mid-sized Shopify
                storefront selling fitness equipment. Every product page was
                loading in 8+ seconds, and checkout abandonment was through the
                roof.
              </p>

              <p>
                The problem was ugly. Their previous dev setup had mashed
                Shopify’s Liquid templates, third-party product-feed scripts, and
                a custom Node inventory checker into one tangled blob. Every
                single page load triggered{" "}
                <strong>11 separate, uncoordinated data calls</strong>.
              </p>

              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-900 dark:text-amber-200 text-sm font-mono space-y-1">
                <strong>Root Diagnostic:</strong> No server-side caching layer.
                No structural request batching. Just unthrottled, synchronous
                calls hitting backend endpoints on every user visit.
              </div>
            </div>

            {/* Section 2: What APIs Are Actually Doing */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>What APIs Are Actually Doing</span>
              </h2>

              <p>
                Here is how I explain the role of APIs in web development to my
                clients: <em>an API is a locked door with a very specific key</em>
                . You send the right request, you get clean data back. Nothing
                more, nothing less.
              </p>

              <p>
                In this project, I replaced the tangled scripts with a single
                authenticated call to Shopify’s Storefront API. The frontend
                asked for exactly the product fields it needed:{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  title
                </code>
                ,{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  price
                </code>
                ,{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  inventoryCount
                </code>
                , and{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  imageUrl
                </code>
                , returning a lightweight JSON payload.
              </p>

              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base text-foreground font-medium">
                <li>
                  <strong>Zero Bloat:</strong> Unnecessary metadata and theme
                  assets stripped entirely.
                </li>
                <li>
                  <strong>Secure Handshake:</strong> Database logic fully hidden
                  behind server proxies.
                </li>
                <li>
                  <strong>Decoupled Layer:</strong> Clear boundary between data
                  storage and visual UI.
                </li>
              </ul>
            </div>

            {/* Section 3: Custom Stack Integration */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>Decoupled Next.js Architecture</span>
              </h2>

              <p>
                I fully decoupled the storefront from Shopify’s backend rendering
                engine. The frontend became a modern Next.js application that
                treated Shopify purely as a headless data source via API.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-border bg-card space-y-2">
                  <h4 className="font-bold text-foreground text-sm">
                    Content Team Autonomy
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Content team updates product details in Shopify admin
                    without touching a line of code or deploying front-end
                    builds.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-border bg-card space-y-2">
                  <h4 className="font-bold text-foreground text-sm">
                    Edge CDN Caching
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    API responses cached globally at the edge via Vercel,
                    delivering sub-second response times for repeat visitors
                    worldwide.
                  </p>
                </div>
              </div>

              {/* YouTube Promo Box */}
              <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Watch Full Technical Breakdown
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Subscribe to MZA Dev on YouTube for in-depth web
                      dev & API tutorials.
                    </p>
                  </div>
                </div>
                <a
                  href="https://youtube.com/@ByteScriptMZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline shrink-0"
                >
                  <span>Watch Channel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Recommended Guides</span>
              </h3>
              <div className="space-y-3">
                {recommendedGuides.map((guide, idx) => (
                  <Link
                    key={idx}
                    href={guide.url}
                    className="block p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group"
                  >
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
                      <span>{guide.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {guide.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* FAQ Accordion Section */}
        
          <FaqAccordion faqs={faqList} />

        {/* Call to Action Banner */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Scaling an API or E-Commerce Architecture?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Get direct technical architecture support to decouple your frontend, optimize custom APIs, and eliminate bottleneck overhead.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}