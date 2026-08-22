import Link from "next/link";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-data"
import {
  Sparkles,
  ArrowRight,
  Gauge,
  Quote,
  ShieldCheck,
  Code2,
  TrendingUp,
  Layers,
  Smartphone,
} from "lucide-react";

const post = getPostBySlug("the-blueprint-respiro-premium-shopify-design")!;

export default function BlueprintRespiroPortfolioPage() {
  const keyFeatures = [
    {
      title: "Performance Optimization",
      desc: "Lazy-loaded assets, minified custom CSS/JS, and deferred third-party scripts. Achieved sub-2s load times on mobile 4G networks.",
      icon: Gauge,
    },
    {
      title: "Mobile-First Design",
      desc: "Fluid layouts engineered from the 320px viewport up. Typography, spacing, and CTAs re-stack with fluid precision.",
      icon: Smartphone,
    },
    {
      title: "High-Authority UX",
      desc: "Editorial visual hierarchy, trust-signal placement, and whitespace engineering—every element earns its real estate.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Liquid Templating",
      desc: "Zero dependency on bloated stock theme sections. Every component is hand-authored in Shopify Liquid for 100% control.",
      icon: Code2,
    },
    {
      title: "Conversion Architecture",
      desc: "Strategic CTA placement, subtle urgency mechanics, and social proof integration mapped directly to the buyer's journey.",
      icon: TrendingUp,
    },
    {
      title: "Funnelish Integration",
      desc: "Seamless checkout funnel routing and upsell flows embedded natively without degrading Core Web Vitals scores.",
      icon: Layers,
    },
  ];

  const keyMetrics = [
    {
      value: "↑ 40%",
      label: "Conversion Rate Lift",
      desc: "Immediate increase in high-ticket offer signups",
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      value: "< 1.8s",
      label: "Mobile Load Time",
      desc: "Optimized for high-intent mobile visitors",
      icon: Smartphone, // Fixed: Added missing icon
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      value: "98",
      label: "PageSpeed Score",
      desc: "Near-perfect score on mobile and desktop",
      icon: Gauge,
      color: "text-amber-600 dark:text-amber-400",
    },
  ];

    const faqList = [
  {
    q: "Aapka Pehla Sawaal?",
    a: "Iss sawaal ka jawab yahan aayega.",
  },
  {
    q: "Aapka Doosra Sawaal?",
    a: "Doosray sawaal ka jawab yahan aayega.",
  },
];
  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 1. Key Metrics Banner */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {keyMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div
                  className={`text-4xl sm:text-5xl font-bold font-mono tracking-tight ${metric.color}`}
                >
                  {metric.value}
                </div>
                <p className="text-xs text-muted-foreground">{metric.desc}</p>
              </div>
            );
          })}
        </section>

        {/* 2. Detailed Case Study Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* 01 — The Challenge */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-xl">
                  01.
                </span>
                <span>The Challenge: Premium Offer Trapped in a Cheap Container</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base">
                The client had built a high-value partnership program—but their
                digital storefront told a different story. Relying on a stock Shopify
                theme, the page looked identical to thousands of generic e-commerce
                stores. For a high-ticket offer, that mismatch is fatal. Buyers
                evaluate trust before they evaluate price, and every pixel of a
                commoditized template quietly signals: <em>average product, average results.</em>
              </p>

              {/* Quote Block */}
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-foreground space-y-3 relative overflow-hidden">
                <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed relative z-10">
                  "Our conversion rate wasn't reflecting the quality of the program.
                  The page looked like every other Shopify store—and our clients are
                  sophisticated. They notice. We were losing deals before the copy even loaded."
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                <strong>The Core Challenge:</strong> Build a custom web solution that
                could carry the psychological weight of a premium institutional
                brand—faster load times, zero template artifacts, and a visual language
                that commands immediate authority.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-6">
                Learn more about modern design choices in <Link href="/blog/top-web-design-trends-for-2026" className="text-blue-500 underline font-medium">Top Web Design Trends for 2026</Link> and <Link href="/blog/custom-web-development-for-small-businesses" className="text-blue-500 underline font-medium">Custom Web Development</Link>.
              </p>
            </div>

            {/* 02 — The Solution */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-xl">
                  02.
                </span>
                <span>The Solution: Architecting the Elite Institutional Aesthetic</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base">
                This wasn't a theme customization—it was a ground-up premium UI/UX
                design built directly on top of Shopify's Liquid templating engine.
                Every default stylesheet was audited and overridden. Custom JavaScript
                handled scroll-triggered interactions, progressive content reveals,
                and micro-animations timed to mirror high-converting editorial sites.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base">
                The layout architecture moved deliberately away from the standard retail
                grid, adopting asymmetric editorial compositions, generous negative
                space, and typographic hierarchy drawn from institutional publishing.
                Funnelish was integrated to power funnel routing and checkout flows
                without compromising page speed.
              </p>

              {/* YouTube Channel Banner */}
              <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Watch Behind-The-Scenes Breakdowns
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Subscribe to ByteScript MZA on YouTube for full-stack e-commerce tutorials.
                    </p>
                  </div>
                </div>
                <a
                  href="https://youtube.com/@ByteScriptMZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline shrink-0"
                >
                  <span>Watch ByteScript MZA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 03 — Key Features Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-xl">
                  03.
                </span>
                <span>Key Features: What Was Built — and Why It Works</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-border bg-card space-y-2 hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 04 — The Result & Testimonial */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-xl">
                  04.
                </span>
                <span>The Result: Business Impact, Not Just Beautiful Design</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base">
                The redesigned page immediately elevated the perceived value of the
                offer. High-ticket buyers—who previously bounced within seconds—began
                engaging with the full content flow. The premium UI/UX repositioned the
                brand from "another Shopify store" to a credible, institutional-grade
                program worth the investment.
              </p>

              {/* Client Testimonial Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-muted/30 space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground font-serif italic leading-relaxed">
                  "The page doesn't just look different—it feels different. Our
                  clients started referencing the website unprompted during sales
                  calls. That's never happened before. The investment paid for itself
                  within the first week of launch."
                </p>
                <div className="pt-2 border-t border-border/60 text-xs font-mono text-muted-foreground">
                  — Blueprint Respiro Client · E-Commerce Brand Owner
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />

        {/* 3. Call to Action Section */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Your Brand, Elevated
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Ready for a Similar Transformation?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              If your current site undersells what you actually offer, let's fix that.
              Premium UI/UX design and high-performance landing pages—built to convert.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Let's Talk Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center"
            >
              Explore More Work
            </Link>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}