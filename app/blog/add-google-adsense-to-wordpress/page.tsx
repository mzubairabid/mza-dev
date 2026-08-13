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
  FileCode2,
  ShieldCheck,
  Cpu,
  Terminal,
} from "lucide-react";

const post = getPostBySlug("add-google-adsense-to-wordpress")!;

export default function AdSenseWordPressPostPage() {
  const methodComparisonData = [
    {
      method: "Manual (functions.php)",
      impact: "Minimal impact",
      domSize: "Clean, zero extra nodes",
      maintenance: "Update script once in one file",
      recommended: true,
    },
    {
      method: "Plugin (Ad Inserter)",
      impact: "Moderate slowdown",
      domSize: "Adds wrapper divs & nodes",
      maintenance: "Plugin updates required regularly",
      recommended: false,
    },
    {
      method: "Plugin (Advanced Ads)",
      impact: "High overhead",
      domSize: "Heaviest DOM footprint",
      maintenance: "Frequent conflicts with themes",
      recommended: false,
    },
  ];

  const faqList = [
    {
      q: "Does manual AdSense code slow down WordPress sites?",
      a: "No. The manual approach adds zero extra database queries and zero plugin middleware. Loading the AdSense script directly via wp_head with async ensures your main thread stays light.",
    },
    {
      q: "Where exactly is the functions.php file located?",
      a: "It is located inside your active child theme folder at /wp-content/themes/your-child-theme/functions.php. You can edit it via FTP, cPanel File Manager, or Appearance > Theme File Editor.",
    },
    {
      q: "Is the ads.txt file required for WordPress AdSense?",
      a: "Yes. Google requires an ads.txt file to verify seller authorization. Missing it triggers policy warnings in your AdSense console and leads to lower advertiser bids.",
    },
    {
      q: "Can I use this manual method for specific page templates?",
      a: "Yes! You can wrap your wp_head hook in conditional tags like is_single() or is_page() to control exactly where AdSense scripts load across your site.",
    },
  ];

  const recommendedGuides = [
    {
      title: "Fix PageSpeed Unable to Resolve URL: Complete Handbook",
      desc: "Fix upstream DNS bottlenecks affecting your ad and asset delivery speed.",
      url: "#",
    },
    {
      title: "Best Online React Compiler 2026: Build & Deploy React Instantly",
      desc: "Explore top browser-based developer tools and real-time execution environments.",
      url: "#",
    },
    {
      title: "Core Web Vitals in 2026: What’s Changed and How to Pass",
      desc: "Learn how INP, LCP, and CLS affect your site rankings and ad viewability.",
      url: "#",
    },
  ];

  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 2. Overview Method Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Cpu className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span>Implementation Method Comparison</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4">Method</th>
                  <th className="p-4">PageSpeed Impact</th>
                  <th className="p-4">DOM Footprint</th>
                  <th className="p-4">Maintenance Effort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {methodComparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-bold text-foreground flex items-center gap-2">
                      <span>{row.method}</span>
                      {row.recommended && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td
                      className={`p-4 font-mono ${
                        row.recommended
                          ? "text-emerald-600 dark:text-emerald-400 font-bold"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {row.impact}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.domSize}</td>
                    <td className="p-4 text-muted-foreground">
                      {row.maintenance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Main Content & Code Walkthrough */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-12 text-muted-foreground leading-relaxed text-base">
            {/* Section 1: Manual Insertion Guide */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Put AdSense Code Manually in Child Theme
              </h2>

              <p>
                If you are searching for how to put Google AdSense code in
                WordPress, use your child theme’s{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  functions.php
                </code>{" "}
                file instead of editing{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  header.php
                </code>{" "}
                directly. When you update your parent theme, changes inside{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  header.php
                </code>{" "}
                will be overwritten, whereas child theme files persist
                indefinitely.
              </p>

              <ol className="space-y-3 list-decimal list-inside text-sm sm:text-base text-foreground font-medium">
                <li>
                  Log in to your WordPress dashboard. Navigate to{" "}
                  <strong>Appearance &gt; Theme File Editor</strong>.
                </li>
                <li>
                  Select your active <strong>Child Theme</strong> from the top
                  dropdown menu.
                </li>
                <li>
                  Open the{" "}
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-orange-600 dark:text-orange-400">
                    functions.php
                  </code>{" "}
                  file.
                </li>
                <li>
                  Paste the PHP hook snippet shown below at the end of the file.
                </li>
                <li>
                  Replace{" "}
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                    YOUR ADSENSE SCRIPT HERE
                  </code>{" "}
                  with your auto-ads tag.
                </li>
              </ol>

              {/* PHP Code Block */}
              <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-orange-500" />{" "}
                    functions.php
                  </span>
                  <span>PHP</span>
                </div>
                <pre className="text-zinc-300">
                  {`add_action('wp_head', 'mza_add_adsense_code');
function mza_add_adsense_code() {
?>
<!-- Replace with your actual Google AdSense Script -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
<?php
}`}
                </pre>
              </div>
            </div>

            {/* Section 2: Account Configuration & Ads.txt */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Configuring ads.txt and Auto Ads
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span>1. Fix ads.txt Verification</span>
                </h3>
                <p>
                  Download the{" "}
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                    ads.txt
                  </code>{" "}
                  file directly from your Google AdSense console under{" "}
                  <strong>Sites</strong>. Upload this file directly to your
                  site’s root directory via FTP or cPanel File Manager (e.g.,{" "}
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                    public_html/ads.txt
                  </code>
                  ).
                </p>
                <p className="text-sm border-l-2 border-orange-500 pl-4 py-1 italic">
                  Verify authorization by visiting:{" "}
                  <strong>yoursite.com/ads.txt</strong> in your browser.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-foreground">
                  2. Optimize Auto Ads Formats
                </h3>
                <p>
                  Inside AdSense, navigate to <strong>Ads &gt; By Site</strong>{" "}
                  and click the edit icon. Turn off anchor ads and vignette
                  popups during initial setup to preserve user experience
                  metrics and minimize bounce rates. Focus on in-page ads first
                  and evaluate field data for 14 days.
                </p>
              </div>

              {/* YouTube Channel Promo Widget */}
              <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Watch Developer Video Walkthroughs
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Check out ByteScript MZA on YouTube for live WordPress
                      optimization guides.
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

            {/* Section 3: Core Web Vitals Optimization */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3">
                Optimize Ad Layouts for Cumulative Layout Shift (CLS)
              </h2>

              <p>
                Cumulative Layout Shift (CLS) happens when dynamic ad containers
                inject content without holding initial space. The surrounding
                content shifts downward unexpectedly, degrading user experience and
                lowering your Core Web Vitals score.
              </p>

              <p>
                Fix CLS penalties by defining structural placeholders with
                explicit dimensions or modern CSS{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  aspect-ratio
                </code>{" "}
                values:
              </p>

              {/* CSS Code Snippet */}
              <div className="rounded-2xl border border-border bg-zinc-950 p-4 text-zinc-100 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-orange-500" /> styles.css
                  </span>
                  <span>CSS</span>
                </div>
                <pre className="text-zinc-300">
                  {`.ad-container {
  width: 100%;
  aspect-ratio: 728 / 90;
  overflow: hidden;
  background: transparent;
}`}
                </pre>
              </div>

              <p className="text-sm">
                For standard leaderboards, use{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  728x90
                </code>
                . For mobile banner slots, reserve a minimum height using{" "}
                <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">
                  min-height: 250px
                </code>{" "}
                to lock layout bounds prior to script execution.
              </p>
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>Recommended Guides</span>
              </h3>
              <div className="space-y-3">
                {recommendedGuides.map((guide, idx) => (
                  <Link
                    key={idx}
                    href={guide.url}
                    className="block p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group"
                  >
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between gap-2">
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

        {/* 4. FAQ Accordion Section */}
          
          <FaqAccordion faqs={faqList} />

        {/* 5. Call to Action Banner */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Need Expert Performance Optimization?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Get professional site architecture consulting to eliminate plugin
              bloat, optimize Core Web Vitals, and build fast custom web
              solutions.
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