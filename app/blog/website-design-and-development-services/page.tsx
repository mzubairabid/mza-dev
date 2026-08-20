import Link from "next/link";
import type { Metadata } from "next";
import BlogLayout from "@/components/layout/blog-layout";
import FaqAccordion from "@/components/layout/FaqAccordion";
import { getPostBySlug } from "@/lib/blog-data";
import {
  Sparkles,
  Video,
  HelpCircle,
  Code2,
  Smartphone,
  ShoppingBag,
  Search,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  DollarSign,
  BarChart3,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design & Development Services 2026 | MZA Dev",
  description: "High-performance website design services. Custom Next.js, WordPress, mobile-first UX, Shopify e-commerce, and SEO-first architecture.",
  openGraph: {
    title: "Website Design & Development Services 2026 | MZA Dev",
    description: "High-performance website design services. Custom Next.js, WordPress, mobile-first UX, Shopify e-commerce, and SEO-first architecture.",
    url: "https://www.mzadev.com/blog/website-design-and-development-services",
    type: "article",
    images: [{ url: "https://www.mzadev.com/public/project-images/web-dev-services.webp", width: 1200, height: 630 }],
  },
};

const post = getPostBySlug("website-design-and-development-services")!;

export default function WebsiteDesignAndDevelopmentServices2026PostPage() {

  const faqList = [
  {
    q: "What makes your service different from a large agency?",
    a: "You work directly with the developer—no account manager delays, no bloated agency pricing, and 100% focus on clean, custom code.",
  },
  {
    q: "How much does an affordable web developer cost?",
    a: "Pricing depends on project scope, but without agency overhead, I deliver elite custom web development tailored specifically to small business budgets.",
  },
  {
    q: "Do you provide a technical SEO audit with every build?",
    a: "Yes! Every project includes foundational technical SEO architecture, schema setup, speed optimization, and search engine index verification.",
  },
];
  return (
    <BlogLayout post={post}>
      {/* Main Content Body */}
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/90 text-sm sm:text-base leading-relaxed">
        
        {/* Introduction */}
        <section className="space-y-4">
          <p>
            In the modern digital era, a “basic” website isn’t enough. To compete in 2026, your site needs to be a conversion machine. I specialize in website design and development services that bridge the gap between stunning aesthetics and elite technical performance.
          </p>
          <p>
            As the solo lead at <strong>Gadget Crunchie</strong>, I personally handle every line of code and every pixel. This ensures that your project doesn’t get lost in a corporate “agency” shuffle. My goal is to combine mobile-first web design with deep technical SEO audit strategies to ensure you rank high and stay there.
          </p>
        </section>

        {/* Why Professional Web Design Matters */}
        <section className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-primary" /> Why Professional Website Design Matters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <strong className="text-foreground block font-bold">Instant Trust</strong>
              <p className="text-muted-foreground">A professional site builds immediate credibility with 2026's tech-savvy users.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <strong className="text-foreground block font-bold">User Experience (UX)</strong>
              <p className="text-muted-foreground">Focus on lightning-fast load times and frictionless, intuitive navigation flows.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <strong className="text-foreground block font-bold">Conversion Focus</strong>
              <p className="text-muted-foreground">Designs aren’t just pretty—they are engineered to convert visitors into paying clients.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-1">
              <strong className="text-foreground block font-bold">Individual Accountability</strong>
              <p className="text-muted-foreground">Work directly with the core developer, ensuring your requirements are never diluted.</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            To see how I leverage modern AI tools to enhance my development workflow, read my latest breakdown of <strong>What is Google Gemini AI</strong>.
          </p>
        </section>

        {/* Development Offerings */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" /> My Website Design and Development Offerings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Offering 1 */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary shrink-0" /> 1. Custom WordPress Development
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                No slow, bloated templates. Custom lightweight builds tailored for speed, maintainability, and top Core Web Vitals scores.
              </p>
            </div>

            {/* Offering 2 */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary shrink-0" /> 2. Mobile-First Web Design
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                With over 70% of web traffic coming from mobile devices, every layout is engineered from the mobile viewport upward.
              </p>
            </div>

            {/* Offering 3 */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-primary shrink-0" /> 3. E-Commerce & Shopify
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                From niche boutiques to high-volume storefronts, building secure, high-converting shopping flows with seamless payment gateways.
              </p>
            </div>

            {/* Offering 4 */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <Search className="w-4 h-4 text-primary shrink-0" /> 4. Technical SEO Audit
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Every project includes foundational technical SEO audits to resolve crawling, indexing, and schema structures prior to launch.
              </p>
            </div>

            {/* Offering 5 */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2 sm:col-span-2">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" /> 5. Performance Maintenance
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Continuous maintenance and monitoring to ensure your digital assets remain ultra-fast, secure, and immune to 2026 web security vulnerabilities.
              </p>
            </div>

          </div>
        </section>

        {/* Video Callout Box */}
        <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-4">
          <Video className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-foreground text-sm">Watch Video & Learn More</h4>
            <p className="text-xs text-muted-foreground">
              Don’t miss out! Check out my latest YouTube video for in-depth insights and exciting technical content. Click here to watch <strong>ByteScript MZA</strong> now!
            </p>
          </div>
        </div>

        {/* SEO First Development Section */}
        <section className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> The Secret Sauce: SEO-First Development
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            An attractive website is useless if no one sees it. My approach integrates search engine optimization directly into the core code architecture:
          </p>
          <ul className="text-xs sm:text-sm text-muted-foreground space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Strategic Keyword Mapping:</strong> Structuring page URLs, headings, and metadata for intent target keywords.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Schema Markup Integration:</strong> Structured data formats optimizing visibility in AI search engines.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Optimized Core Web Vitals:</strong> Zero cumulative layout shifts and sub-second interaction speed.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>High-Quality Content Hierarchy:</strong> Clean, semantic HTML structure making content easy to crawl.</span>
            </li>
          </ul>
        </section>

        {/* Why Choose Gadget Crunchie? */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Why Choose Gadget Crunchie?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <strong className="text-foreground block font-bold">Personalized Expertise</strong>
              <p className="text-muted-foreground">You get full access to a veteran developer with dedicated 1-on-1 focus.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <strong className="text-foreground block font-bold">Affordable Small Business Rates</strong>
              <p className="text-muted-foreground">Minimal operational overhead means agency-grade results at a reasonable investment.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <strong className="text-foreground block font-bold">Data-Driven Metrics</strong>
              <p className="text-muted-foreground">Focusing on organic traffic growth, qualified lead generation, and sales conversions.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <strong className="text-foreground block font-bold">Direct Communication</strong>
              <p className="text-muted-foreground">No account managers or middle layers—talk directly with the engineer building your site.</p>
            </div>
          </div>
        </section>

        {/* Real-Life Success Stories */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" /> Real-Life Success Stories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase">E-Commerce Migration</span>
              <h3 className="font-bold text-foreground text-base">Shopify Store Redesign</h3>
              <p className="text-xs text-muted-foreground">
                Migrated a retail brand from a slow builder to an optimized setup. Achieved a <strong>200% increase in mobile traffic</strong> and a <strong>150% boost in sales</strong> within 6 months.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase">SEO Rank Scaled</span>
              <h3 className="font-bold text-foreground text-base">Tech Startup Launch</h3>
              <p className="text-xs text-muted-foreground">
                Executed a full technical SEO audit and clean code architecture, propelling the startup to <strong>Page 1 Google rankings</strong> for primary target keywords within 90 days.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Final Verdict: Work with a Specialist, Not a Factory
          </h2>
          <p>
            Don’t let your business settle for a generic template. Choose a engineering partner who understands the modern 2026 web ecosystem inside out.
          </p>

          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" /> Ready to Transform Your Online Presence?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Contact Gadget Crunchie today for a free 1-on-1 technical consultation. Let’s build a web platform that delivers real bottom-line results.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FaqAccordion Component */}
        <FaqAccordion faqs={faqList} />
        
</div>
    </BlogLayout>
  );
}