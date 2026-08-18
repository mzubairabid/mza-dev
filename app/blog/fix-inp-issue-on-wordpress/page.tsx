import Link from "next/link";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-data";
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
  AlertTriangle,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

const post = getPostBySlug("fix-inp-issue-on-wordpress")!;

export default function FixInpWordPress2026PostPage() {
  const codeSnippets = {
    observer: `const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 200) {
      console.warn(\`Slow interaction: \${entry.name} | Duration: \${entry.duration.toFixed(1)}ms | Target:\`, entry.target);
    }
  }
});
observer.observe({ type: 'event', buffered: true, durationThreshold: 50 });`,
    phpDefer: `<?php
/**
 * Surgically apply defer/async to specific script handles.
 * Never defer: jquery, jquery-migrate, or handles with registered inline dependents.
 */
function my_defer_async_scripts( $tag, $handle, $src ) {
    $defer_handles = [
        'slick-carousel',
        'contact-form-7',
        'google-recaptcha',
        'wp-embed',
    ];

    $async_handles = [
        'google-analytics',
        'hotjar-tracking',
    ];

    if ( in_array( $handle, $defer_handles, true ) ) {
        return '<script defer src="' . esc_url( $src ) . '"></script>' . "\n";
    }

    if ( in_array( $handle, $async_handles, true ) ) {
        return '<script async src="' . esc_url( $src ) . '"></script>' . "\n";
    }

    return $tag;
}
add_filter( 'script_loader_tag', 'my_defer_async_scripts', 10, 3 );`,
    yieldScript: `async function runHeavyInit(tasks) {
    for (const task of tasks) {
        task(); // Execute one unit of work

        // Yield: hand control back to browser between each task
        await new Promise(resolve =>
            'scheduler' in window
                ? scheduler.yield().then(resolve)
                : setTimeout(resolve, 0)
        );
    }
}

// Usage: pass an array of initialization functions
runHeavyInit([initSlider, initForms, initTracking]);`,
    idleCallback: `const inits = [initSlider, initForms, initPixel];

function runNext(queue) {
    if (!queue.length) return;
    requestIdleCallback(() => {
        queue.shift()();
        runNext(queue);
    }, { timeout: 2000 });
}

document.addEventListener('DOMContentLoaded', () => runNext([...inits]));`,
  };

  const matrixData = [
    {
      feature: "JavaScript Combining",
      setting: "TURN OFF",
      impact: "Destructive",
      justification: "Creates monolithic bundles that force huge Compile & Evaluate Script Long Tasks, blocking the main thread.",
    },
    {
      feature: "JavaScript Deferral / Delay",
      setting: "TURN ON",
      impact: "High Positive",
      justification: "Pushes non-critical execution past First Input, keeping main thread idle before plugin JS competes.",
    },
    {
      feature: "DOM Node Minimization",
      setting: "ENABLE",
      impact: "High Positive",
      justification: "Fewer DOM nodes cut style-recalculation cost on every interaction, lowering presentation delay.",
    },
  ];

  const faqList = [
    {
      q: "1. Why does my WordPress site pass LCP but fail INP?",
      a: "LCP measures how fast main content loads, while INP measures real-time responsiveness when users click or type. Heavy JavaScript execution or deep DOM structures can keep your main thread frozen long after initial paint finishes.",
    },
    {
      q: "2. Does combining JavaScript files improve or hurt INP scores in 2026?",
      a: "Combining JS files hurts INP in 2026. Merging scripts creates large, monolithic bundles that trigger massive compile and evaluation Long Tasks. Serving uncombined, deferred HTTP/2 scripts parsed in parallel is significantly faster.",
    },
    {
      q: "3. How do third-party scripts like GA4 impact INP, and what is the fastest fix?",
      a: "Third-party tracking scripts constantly execute on the main thread during user events. Offloading analytics scripts (GA4, GTM, Meta Pixel) to a Web Worker via Partytown removes execution burden from the main thread entirely.",
    },
    {
      q: "4. Can Elementor cause input delays even with caching plugins active?",
      a: "Yes. Elementor generates deeply nested DOM wrappers (often 5+ divs per widget). Style recalculation across thousands of DOM nodes during simple user interactions compounds presentation delay, regardless of caching settings.",
    },
    {
      q: "5. What is a 'good' INP score for an e-commerce WordPress site?",
      a: "A good INP score is 200 milliseconds or less measured at the 75th percentile of real-user field data (CrUX). Scores between 200ms and 500ms need improvement, while scores over 500ms trigger ranking penalties.",
    },
  ];

  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 2. Key Target Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Good INP Target</div>
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              ≤ 200ms
            </div>
            <p className="text-xs text-muted-foreground">75th percentile of real user visits (CrUX)</p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Needs Improvement</div>
            <div className="text-3xl sm:text-4xl font-bold text-amber-500">
              201ms – 500ms
            </div>
            <p className="text-xs text-muted-foreground">Requires main-thread task fragmentation</p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Poor INP Rating</div>
            <div className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400">
              &gt; 500ms
            </div>
            <p className="text-xs text-muted-foreground">Triggers negative SEO ranking signals</p>
          </div>
        </section>

        <div className="space-y-12 text-muted-foreground leading-relaxed text-base">
          {/* Section 1: Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" />
              <span>Understanding the INP Lifecycle</span>
            </h2>

            <p>
              If you want to fix the INP issue on WordPress, you must realize that Interaction to Next Paint is no longer a hidden technical metric—it is the defining factor for mobile rankings. Unlike static loading metrics, INP measures the worst interaction delay experienced across an entire visit.
            </p>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-3">
              <h4 className="text-sm font-bold text-foreground">The 3 Phases of Interaction Latency</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-muted/60 space-y-1">
                  <span className="font-bold text-foreground">1. Input Delay</span>
                  <p className="text-muted-foreground">Time spent waiting for the browser to begin processing event handlers.</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/60 space-y-1">
                  <span className="font-bold text-foreground">2. Processing Time</span>
                  <p className="text-muted-foreground">Execution time required for JavaScript event listeners to complete.</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/60 space-y-1">
                  <span className="font-bold text-foreground">3. Presentation Delay</span>
                  <p className="text-muted-foreground">Duration for layout recalculation, style recalculations, and repainting frames.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Diagnosing INP */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Diagnosing Bottlenecks: Chrome DevTools & PerformanceObserver</span>
            </h2>

            <p>
              Open Chrome DevTools → <strong>Performance</strong> tab → enable the <strong>Web Vitals</strong> lane. Record while clicking buttons, opening menus, or submitting forms.
            </p>

            <ul className="space-y-2 list-disc list-inside text-sm text-foreground">
              <li>Look for Long Tasks flagged with red corners exceeding <strong>50ms</strong>.</li>
              <li>Inspect <code className="font-mono text-xs bg-muted px-2 py-1 rounded">Compile Script</code> entries (V8 compilation costs).</li>
              <li>Evaluate <code className="font-mono text-xs bg-muted px-2 py-1 rounded">Evaluate Script</code> blocks to locate blocking plugin event handlers.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground pt-2">Real-Time Production Logging</h3>
            <p className="text-sm">
              Run this observer script to catch slow interaction targets directly in production:
            </p>

            {/* Code Snippet 1 */}
            <div className="relative rounded-2xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
              <pre>{codeSnippets.observer}</pre>
            </div>
          </div>

          {/* Section 3: Targeted Script Deferral */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Surgical Script Deferral via PHP Filter</span>
            </h2>

            <p>
              Monolithic caching plugins often minify scripts without addressing execution timing. Use WordPress's native <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">script_loader_tag</code> hook in your child theme's <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">functions.php</code> to selectively defer handles:
            </p>

            {/* Code Snippet 2 */}
            <div className="relative rounded-2xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
              <pre>{codeSnippets.phpDefer}</pre>
            </div>
          </div>

          {/* Section 4: Main-Thread Yielding */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
              <Workflow className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Main-Thread Yielding with Scheduler API</span>
            </h2>

            <p>
              Break execution loops into micro-chunks so the browser can interrupt long-running initializers to render user inputs immediately:
            </p>

            {/* Code Snippet 3 */}
            <div className="relative rounded-2xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
              <pre>{codeSnippets.yieldScript}</pre>
            </div>

            <h3 className="text-lg font-bold text-foreground pt-2">Task Fragmentation on DOMContentLoaded</h3>
            <p className="text-sm">
              Use <code className="font-mono text-xs bg-muted px-2 py-1 rounded">requestIdleCallback</code> to convert wide Long Animation Frames into sub-50ms tasks:
            </p>

            {/* Code Snippet 4 */}
            <div className="relative rounded-2xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
              <pre>{codeSnippets.idleCallback}</pre>
            </div>
          </div>

          {/* Section 5: Optimization Matrix */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Cache Plugin Optimization Matrix</span>
            </h2>

            <p className="text-sm">
              Apply these recommended settings inside LiteSpeed Cache, WP Rocket, or Perfmatters:
            </p>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase text-muted-foreground">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Setting</th>
                    <th className="p-4">INP Impact</th>
                    <th className="p-4">Technical Justification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs sm:text-sm">
                  {matrixData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-bold text-foreground">{row.feature}</td>
                      <td className="p-4 font-mono font-bold text-amber-600 dark:text-amber-400">{row.setting}</td>
                      <td className="p-4 font-mono text-muted-foreground">{row.impact}</td>
                      <td className="p-4 text-muted-foreground">{row.justification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* YouTube Promo Box */}
            <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Watch Core Web Vitals Tutorials
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Subscribe to ByteScript MZA on YouTube for live performance audits.
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
        </div>

        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />

        {/* 5. Call to Action Banner */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Need Help Passing INP & Core Web Vitals?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Let's audit your main thread, refactor heavy scripts, and optimize your WordPress architecture for green scores.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
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