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
  Globe,
  ShieldAlert,
  Server,
  Workflow,
  Terminal,
  RefreshCw,
} from "lucide-react";

const post = getPostBySlug("how-to-fix-pagespeed-unable-to-resolve-url")!;

export default function PageSpeedUnableToResolveUrlPostPage() {
  const dnsTableData = [
    {
      type: "CNAME",
      name: "www",
      target: "yourdomain.com",
      proxy: "Proxied (Orange Cloud)",
      ttl: "Auto",
    },
  ];

  const faqList = [
    {
      q: "Why does my site open in my browser but fail on PageSpeed Insights?",
      a: "Your local browser caches DNS resolutions and SSL handshakes. When you visit your site, it reuses cached routes. PageSpeed Insights acts as an external crawler, performing fresh, un-cached DNS queries from Google's servers every single time.",
    },
    {
      q: "Do I need to upgrade my hosting plan to fix this error?",
      a: "No. 'Unable to resolve URL' is a DNS routing, SSL loop, or record misconfiguration issue—not a hosting resource limit. Fixing stale AAAA records or Cloudflare SSL modes solves it instantly on your existing host.",
    },
    {
      q: "How long does it take for Cloudflare DNS changes to fix the PageSpeed test?",
      a: "Cloudflare DNS updates take effect almost instantaneously (typically within 10 to 30 seconds). You can re-run PageSpeed Insights immediately after clearing your stale DNS records.",
    },
  ];

  const recommendedGuides = [
    {
      title: "The Role of APIs in Web Development: A Shopify Case Study",
      desc: "Learn how decoupling storefronts with Next.js & APIs dropped load times from 8.3s to 1.1s.",
      url: "/blog/role-of-apis-in-web-development-shopify-case-study",
    },
    {
      title: "Add Google AdSense to WordPress Without Plugins",
      desc: "Eliminate CLS penalties and keep your DOM light using manual functions.php hooks.",
      url: "/blog/add-google-adsense-wordpress-without-plugins",
    },
    {
      title: "Core Web Vitals in 2026: What’s Changed and How to Pass",
      desc: "Deep dive into INP, LCP, and CLS performance targets for modern web apps.",
      url: "#",
    },
  ];

  return (
    <BlogLayout post={post}>
      <div className="space-y-16">
        {/* 2. Diagnostic Highlight Box */}
        <section className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 text-foreground space-y-3">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
            <Globe className="w-5 h-5" />
            <span>The Browser Lie: Visible to You, Hidden to Google</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            When your site opens in your browser but fails Google's speed test, local DNS cache is masking a backend failure. PageSpeed Insights is an external crawler it executes an un-cached, fresh DNS lookup from Google servers every time it runs. If routing fails at the origin, PageSpeed hits a brick wall.
          </p>
        </section>

        {/* 3. Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-12 text-muted-foreground leading-relaxed text-base">
            {/* Step 1: CNAME Routing */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400 font-mono text-xl">01.</span>
                <span>The CNAME Culprit: Fix Cloudflare Routing</span>
              </h2>

              <p>
                When migrating hosts, subdomains often lose their routing target. If your root domain resolves fine but the <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">www</code> version lacks a valid CNAME pointing back to origin, Google’s crawler hits a dead end.
              </p>

              <p className="text-sm font-semibold text-foreground">
                Add this record inside your Cloudflare DNS panel:
              </p>

              {/* CNAME Table */}
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50 text-xs font-mono uppercase text-muted-foreground">
                      <th className="p-4">Type</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Target</th>
                      <th className="p-4">Proxy Status</th>
                      <th className="p-4">TTL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-xs sm:text-sm font-mono">
                    {dnsTableData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-bold text-red-600 dark:text-red-400">{row.type}</td>
                        <td className="p-4 text-foreground">{row.name}</td>
                        <td className="p-4 text-muted-foreground">{row.target}</td>
                        <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">{row.proxy}</td>
                        <td className="p-4 text-muted-foreground">{row.ttl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 2: IPv6 Stale Records */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400 font-mono text-xl">02.</span>
                <span>The IPv6 Conflict: Clean Stale AAAA Records</span>
              </h2>

              <p>
                When switching hosting providers, legacy <code className="font-mono text-xs bg-muted px-2 py-1 rounded text-foreground">AAAA</code> (IPv6) records often remain untouched in Cloudflare. Crawlers like PageSpeed Insights attempt IPv6 resolution first—if those records point to a deactivated server, the lookup times out.
              </p>

              <div className="p-5 rounded-2xl border border-border bg-card space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" /> Resolution Action Items
                </h4>
                <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-muted-foreground">
                  <li>Log in to Cloudflare and open the <strong>DNS Records</strong> panel.</li>
                  <li>Filter by type and locate every <strong>AAAA</strong> record tied to root and www.</li>
                  <li>Delete any AAAA record pointing to your old host’s IP address.</li>
                  <li>Re-run PageSpeed Insights to verify the error is cleared.</li>
                </ol>
              </div>
            </div>

            {/* Step 3: SSL Redirection Loop */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400 font-mono text-xl">03.</span>
                <span>The SSL Redirection Loop: Fix Encryption Modes</span>
              </h2>

              <p>
                When Cloudflare’s SSL encryption mode is set to <strong>Flexible</strong> while your origin server enforces HTTPS, requests bounce infinitely between proxy and server. Browsers eventually hide this by serving a cached final state, but Google's fresh audit aborts after max redirects.
              </p>

              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200 text-sm font-mono">
                <strong>Fix:</strong> Switch Cloudflare SSL/TLS setting from <em>Flexible</em> to <strong>Full (Strict)</strong>. This guarantees end-to-end encryption without triggering redirect loops.
              </div>
            </div>

            {/* Step 4: LiteSpeed Optimization */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border pb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" />
                <span>Bonus: 90+ Score Without Redis (LiteSpeed Secrets)</span>
              </h2>

              <p>
                Once DNS resolution and SSL loops are cleared, push your score into 90+ territory on standard hosting using targeted LiteSpeed Cache tweaks:
              </p>

              <ul className="space-y-3 list-disc list-inside text-sm sm:text-base text-foreground font-medium">
                <li><strong>JS Defer & Delay:</strong> Shift non-critical JavaScript to user interaction triggers to dramatically improve <em>Interaction to Next Paint (INP)</em>.</li>
                <li><strong>Database Cleanup:</strong> Clear post revisions, transient records, and orphaned metadata to speed up backend query execution.</li>
                <li><strong>Aspect Ratio Locking:</strong> Define static height/width bounds on image wrappers to protect <em>Cumulative Layout Shift (CLS)</em>.</li>
              </ul>

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
                      Watch Live Performance Audits
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Subscribe to ByteScript MZA on YouTube for web speed & DNS fixes.
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
                <BookOpen className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span>Recommended Guides</span>
              </h3>
              <div className="space-y-3">
                {recommendedGuides.map((guide, idx) => (
                  <Link
                    key={idx}
                    href={guide.url}
                    className="block p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group"
                  >
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex items-center justify-between gap-2">
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

        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />

        {/* 5. Call to Action Banner */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
              Stuck With Red PageSpeed Scores?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Let's resolve DNS conflicts, optimize backend routing, and audit your Core Web Vitals for maximum speed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
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