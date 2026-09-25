import Link from "next/link";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-data";
import {
  Sparkles,
  Gauge,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Code2,
  AlertTriangle,
  FileCode2,
  Terminal,
} from "lucide-react";

const post = getPostBySlug("core-web-vitals-in-2026")!;

export default function CoreWebVitalsPostPage() {
  const metricTableData = [
    {
      metric: "LCP (Largest Contentful Paint)",
      good: "≤ 2.5s",
      needsImprovement: "2.5s – 4.0s",
      poor: "> 4.0s",
      statusColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      metric: "CLS (Cumulative Layout Shift)",
      good: "≤ 0.1",
      needsImprovement: "0.1 – 0.25",
      poor: "> 0.25",
      statusColor: "text-blue-600 dark:text-blue-400",
    },
    {
      metric: "INP (Interaction to Next Paint)",
      good: "≤ 200ms",
      needsImprovement: "200ms – 500ms",
      poor: "> 500ms",
      statusColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  const faqList = [
    {
      q: "Does page speed directly affect Google rankings?",
      a: "Yes. Google uses Core Web Vitals as an official ranking signal. Poor field scores directly impact your search visibility and user conversion rates.",
    },
    {
      q: "What’s the fastest way to improve LCP?",
      a: "Move to a CDN-backed host, preload your hero image with fetchpriority='high', inline critical CSS, and remove render-blocking third-party scripts.",
    },
    {
      q: "Is INP harder to pass than FID was?",
      a: "Yes. FID only measured initial input delay for the first interaction. INP tracks latency for every interaction throughout the entire user journey on the page.",
    },
    {
      q: "Do Core Web Vitals matter for mobile and desktop separately?",
      a: "Yes, Google measures mobile and desktop field data independently. Mobile scores are usually harder to pass due to CPU limitations and network throttling.",
    },
  ];

  const recommendedGuides = [
    {
      title: "Fix PageSpeed Unable to Resolve URL: Complete Handbook",
      desc: "Essential roadmap to fix URL resolution errors in PageSpeed Insights.",
      url: "#",
    },
    {
      title: "The Role of APIs in Web Development: Shopify Case Study",
      desc: "Learn how modern API architectures optimize storefront speeds.",
      url: "#",
    },
    {
      title: "10 Modern CSS Layouts for Websites (2026)",
      desc: "Build zero-dependency responsive layouts using pure CSS.",
      url: "#",
    },
  ];

  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 2. Official Score Thresholds Table */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Gauge className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span>Core Web Vitals Thresholds (2026 Field Metrics)</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4">Metric</th>
                  <th className="p-4">Good (Pass)</th>
                  <th className="p-4">Needs Improvement</th>
                  <th className="p-4">Poor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm font-mono">
                {metricTableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-bold text-foreground font-sans">{row.metric}</td>
                    <td className={`p-4 font-bold ${row.statusColor}`}>{row.good}</td>
                    <td className="p-4 text-amber-600 dark:text-amber-400">{row.needsImprovement}</td>
                    <td className="p-4 text-red-600 dark:text-red-400">{row.poor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Main Article Body & Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-12 text-muted-foreground leading-relaxed text-base">
            {/* Section 1: Optimizing for the Right Metrics */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Optimizing for the Right Metrics
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Fixing Interaction to Next Paint (INP)</h3>
                <p>
                  INP fails when the main thread is blocked. Heavy JavaScript execution is usually the primary culprit. Break long tasks into smaller chunks. Use <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-orange-600 dark:text-orange-400">scheduler.yield()</code> to hand control back to the browser between long-running scripts.
                </p>
                <p>
                  Third-party scripts kill INP silently. Load them with <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">defer</code> or <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">async</code>. Audit every active pixel and tag manager—one unoptimized script can push your response times from 180ms to over 600ms overnight.
                </p>
              </div>

              {/* Live Tester Callout Box */}
              <div className="p-5 rounded-2xl border border-orange-500/30 bg-orange-500/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    Want to test your code performance live? Try the browser-based JS & CSS Tester.
                  </p>
                </div>
                <Link
                  href="/tools/code-tester"
                  className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs shrink-0 transition-all inline-flex items-center gap-1"
                >
                  <span>Try Live Editor</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">Improving Largest Contentful Paint (LCP)</h3>
                <p>
                  Your hosting environment matters more than most developers admit. A cheap shared host adds 400–800ms of Time to First Byte (TTFB) delay before a single pixel renders. Moving to a CDN-backed edge host can cut LCP by half immediately.
                </p>
                <p>
                  Preload your primary hero assets. Use <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">&lt;link rel="preload"&gt;</code> for above-the-fold elements and inline critical CSS to eliminate render-blocking stylesheets.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-6">
                Experiencing main-thread delays? Learn <Link href="/blog/fix-inp-issue-on-wordpress" className="text-blue-500 underline font-medium">How to Fix INP Issues on WordPress</Link> or read our guide on <Link href="/blog/how-to-fix-pagespeed-unable-to-resolve-url" className="text-blue-500 underline font-medium">PageSpeed Resolve URL Errors</Link>.
              </p>
            </div>

            {/* Section 2: WordPress Cleanups & Server Rules */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                How to Fix Core Web Vitals in WordPress Without Plugins
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Cleaning Up the Header and Assets</h3>
                <p>
                  WordPress loads default block library scripts and styles on pages that don't need them. Open your <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">functions.php</code> and dequeue unnecessary assets conditionally:
                </p>
              </div>

              {/* PHP Code Block */}
              <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-2"><FileCode2 className="w-4 h-4 text-orange-500" /> functions.php</span>
                  <span>PHP</span>
                </div>
                <pre className="text-zinc-300">
{`function remove_unused_assets() {
    // Dequeue default block library styles conditionally
    if (!is_single()) {
        wp_dequeue_style('wp-block-library');
    }
    // Remove default jQuery on landing pages if unneeded
    if (is_front_page()) {
        wp_dequeue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'remove_unused_assets', 100);`}
                </pre>
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
                      ByteScript MZA Performance Guides
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Watch step-by-step video tutorials on site optimization.
                    </p>
                  </div>
                </div>
                <a
                  href="https://youtube.com/@mzadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline shrink-0"
                >
                  <span>Watch Tutorials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-foreground">Server Compression & Native Lazy-Loading</h3>
                <p>
                  Brotli compresses assets 15–20% better than Gzip. Enable server-level compression inside your Apache <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">.htaccess</code> or Nginx configuration:
                </p>
              </div>

              {/* Apache Code Snippet */}
              <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-orange-500" /> .htaccess</span>
                  <span>Apache Config</span>
                </div>
                <pre className="text-zinc-300">
{`<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>`}
                </pre>
              </div>

              {/* Image Markup Example */}
              <div className="space-y-3">
                <p className="text-sm">
                  Bypass heavy lazy-loading plugins and use standard HTML attributes:
                </p>
                <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                  <pre className="text-zinc-300">
{`<!-- Hero image: Priority loading (No lazy load) -->
<img src="hero.webp" alt="Hero" fetchpriority="high" width="1200" height="630" />

<!-- Below-the-fold images: Native lazy loading -->
<img src="content.webp" alt="Content" loading="lazy" width="800" height="450" />`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Section 3: Eliminating Layout Shifts (CLS) */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Eliminating Layout Shifts for Better UX
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground font-sans">Handling Dynamic Ad Units and Font Swaps</h3>
                <p>
                  Fonts swapping late cause sudden text shifts. Fix this with <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">font-display: optional</code> or by preloading key font files.
                </p>
                <p>
                  Ad slots and dynamic banners are frequent CLS offenders. Reserve minimum height wrappers before ads inject content:
                </p>
              </div>

              {/* CSS Code Snippet */}
              <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-2"><Code2 className="w-4 h-4 text-orange-500" /> styles.css</span>
                  <span>CSS</span>
                </div>
                <pre className="text-zinc-300">
{`.ad-wrapper {
  min-height: 250px;
  width: 100%;
  contain: layout;
}`}
                </pre>
              </div>
            </div>
          </article>
        </section>

        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />

        {/* 5. Call to Action Banner (Uniform Site Style) */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Need Help Passing Core Web Vitals?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Get a comprehensive technical speed audit and code-level optimization consulting to eliminate your performance bottlenecks.
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