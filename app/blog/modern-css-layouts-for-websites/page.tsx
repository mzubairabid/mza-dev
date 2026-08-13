import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  Sparkles,
  LayoutGrid,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Code2,
  Monitor,
  Check,
} from "lucide-react";

const post = getPostBySlug("modern-css-layouts-for-websites")!;

export default function BlogPostPage() {
  const layoutTableData = [
    {
      name: "Bento Grid",
      useCase: "Portfolio/landing page tiles",
      technique: "CSS Grid with grid-template-areas",
      impact: "No render-blocking; pure CSS",
    },
    {
      name: "Holy Grail SaaS Dashboard",
      useCase: "Admin panels with sidebar + header",
      technique: "Grid + named template columns",
      impact: "Single reflow; no JS layout shifts",
    },
    {
      name: "Auto-Fit Product Card Grid",
      useCase: "E-commerce/card listings",
      technique: "grid-template-columns: repeat(auto-fit, minmax())",
      impact: "Responsive with zero media queries",
    },
  ];

  const faqList = [
    {
      q: "Can I use CSS Grid and Flexbox together in the same layout?",
      a: "Yes, absolutely. Grid is ideal for overall layout structural architecture (two-dimensional), while Flexbox is superior for linear alignment within component structures (one-dimensional).",
    },
    {
      q: "Do Container Queries work in all major browsers?",
      a: "Yes, Container Queries have full cross-browser support across modern releases since 2023.",
    },
    {
      q: "Does writing layout CSS without a framework hurt long-term maintainability?",
      a: "No. When structured with clean naming patterns (like BEM), custom CSS is significantly easier to maintain, faster to debug, and immune to breaking framework updates.",
    },
    {
      q: "Will these layouts pass Core Web Vitals without additional optimization?",
      a: "Writing native CSS prevents layout shifts (CLS) and reduces render-blocking weight, giving your site an immediate head start to score high on Core Web Vitals.",
    },
  ];

  const resources = [
    {
      title: "Best Online React Compiler 2026",
      desc: "Need to test React code fast? See our top pick.",
      url: "#",
    },
    {
      title: "Web Development vs Website Builders (2026 Guide)",
      desc: "Stuck between coding and no-code? Find your answer.",
      url: "#",
    },
    {
      title: "The Blueprint Respiro Premium Shopify",
      desc: "See these principles in action on a live client project.",
      url: "#",
    },
  ];

  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 2. Overview Table Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span>Quick Layout Architecture Breakdown</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4">Layout Name</th>
                  <th className="p-4">Use-Case</th>
                  <th className="p-4">Primary Technique</th>
                  <th className="p-4">Speed Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {layoutTableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-bold text-foreground">{row.name}</td>
                    <td className="p-4 text-muted-foreground">{row.useCase}</td>
                    <td className="p-4 font-mono text-xs text-orange-600 dark:text-orange-400">{row.technique}</td>
                    <td className="p-4 text-muted-foreground">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Main Content & Layout Showcases */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Column */}
          <article className="lg:col-span-8 space-y-12 text-muted-foreground leading-relaxed text-base">
            {/* Core Layouts */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Core Layouts for High-Performance Pages
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">1. The Perfect Mobile-First Hero (Flexbox)</h3>
                <p>
                  Flexbox was made for one-dimensional layouts. A hero section is exactly that—one column on mobile, two columns on wider screens. No hacks, no float clearing, no grid overkill.
                </p>
                <p>
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">flex-direction: column</code> stacks content naturally on small screens. One media query flips it to row. You get alignment control, gap spacing, and full responsiveness in under 15 lines.
                </p>
              </div>

              {/* Code / Visual Box Example */}
              <div className="p-6 rounded-2xl border border-border bg-muted/30 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs text-orange-600 dark:text-orange-400 font-bold">HERO COMPONENT LAYOUT</span>
                  <span className="text-xs text-muted-foreground">Pure CSS / Flexbox</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-foreground">Build fast. Ship lean.</h4>
                  <p className="text-sm">Modern CSS layouts without the framework weight.</p>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-xs font-semibold">Get Started</button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">2. The Bento Grid Showcase (CSS Grid)</h3>
                <p>
                  Bento layouts are everywhere in 2026. Apple popularized them. Every SaaS landing page runs one now. The trick is <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">grid-template-areas</code>—it maps your layout visually right inside the CSS.
                </p>
                <p>
                  You name each zone. No wrapper divs, no nested containers, no extra markup. Each card snaps into its named area seamlessly.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">3. The Auto-Fit Product/Service Card Grid</h3>
                <p>
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">repeat(auto-fit, minmax())</code> is one of the most underused tools in modern CSS. It builds a fully responsive card grid with zero media queries and zero JavaScript.
                </p>
              </div>
            </div>

            {/* YouTube Section Integration */}
            <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Watch Video Guide on ByteScript MZA
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    See these CSS layouts built live step-by-step.
                  </p>
                </div>
              </div>
              <a
                href="https://youtube.com/@ByteScriptMZA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline shrink-0"
              >
                <span>Watch Tutorial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Advanced Utilities */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Advanced Responsive Layout Patterns
              </h2>
              <p>
                From the <strong>Holy Grail SaaS Dashboard</strong> grid to <strong>Container Queries</strong> that let cards respond to parent container width rather than viewport size—modern CSS handles complex state changes with lightning speed.
              </p>
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>Related Resources</span>
              </h3>
              <div className="space-y-3">
                {resources.map((res, idx) => (
                  <Link
                    key={idx}
                    href={res.url}
                    className="block p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group"
                  >
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between gap-2">
                      <span>{res.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {res.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />

        {/* 5. Dark CTA Section (Standard Across Site) */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Struggling with Bloated Framework Code?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Get professional custom CSS architecture and speed optimization consulting to clean your code-level bottlenecks and rank higher on Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book Performance Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center"
            >
              View Projects
            </Link>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}