import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Wrench,
  Calculator,
  Code2,
  ExternalLink,
  Search,
  ArrowRight,
  Terminal,
  Cpu,
  Code,
  Zap,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Web Tools & Developer Utilities | MZA Dev",
  description:
    "Explore free custom-engineered web tools, live compilers, JSON-LD schema generators, and performance calculators engineered by Muhammad Zubair Abid (MZA Dev).",
  alternates: {
    canonical: "https://www.mzadev.com/tools",
  },
  openGraph: {
    title: "Interactive Web Tools & Developer Utilities | MZA Dev",
    description:
      "Explore free custom-engineered web tools, live compilers, JSON-LD schema generators, and performance calculators engineered by Muhammad Zubair Abid (MZA Dev).",
    url: "https://www.mzadev.com/tools",
    type: "website",
    images: [
      {
        url: "https://www.mzadev.com/og-image.jpg", // Tools hub page ki default OG image URL
        width: 1200,
        height: 630,
        alt: "MZA Dev Interactive Web Tools",
      },
    ],
  },
};
interface ToolItem {
  id: string;
  title: string;
  description: string;
  category: "Calculators" | "Web Utility" | "Compilers & Editors";
  status: "Live" | "In Development" | "Beta";
  href: string;
  icon: LucideIcon;
  techStack: string[];
}

interface PageProps {
  searchParams: Promise<{ q?: string; category?: string }> | { q?: string; category?: string };
}

export default async function ToolsDirectoryPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams?.q || "";
  const selectedCategory = resolvedParams?.category || "All";

  const tools: ToolItem[] = [
    {
      id: "live-html-css-js-editor-tester",
      title: "Live HTML, CSS & JS Code Tester",
      description:
        "Instant browser-based frontend playground with live preview, real-time error tracking, and responsive viewport toggles.",
      category: "Compilers & Editors",
      status: "Live",
      href: "/tools/live-html-css-js-editor-tester",
      icon: Code,
      techStack: ["Vanilla JS", "Iframe Sandbox", "Monaco/CodeMirror"],
    },
    {
      id: "online-react-compiler-2026",
      title: "Online React Compiler (2026)",
      description:
        "High-speed React JSX sandbox powered by instant live bundling. Test React components, hooks, and state in real-time.",
      category: "Compilers & Editors",
      status: "Live",
      href: "/tools/online-react-compiler-2026",
      icon: Zap,
      techStack: ["Next.js", "React 19/18", "Babel Standalone", "Tailwind"],
    },
    {
      id: "nursery-calculator",
      title: "Nursery Earnings Calculator",
      description:
        "Custom vanilla JS financial projection tool built for automated yield and revenue calculation with dynamic parameters.",
      category: "Calculators",
      status: "Live",
      href: "/tools/nursery-calculator",
      icon: Calculator,
      techStack: ["Vanilla JS", "Tailwind CSS", "Dynamic Math Engine"],
    },
    {
      id: "pagespeed-auditor",
      title: "Core Web Vitals Estimator",
      description:
        "Performance measurement tool mapping script execution overhead and layout shifts before deploying custom Shopify code.",
      category: "Web Utility",
      status: "Live",
      href: "/tools/core-web-vitals",
      icon: Cpu,
      techStack: ["Next.js", "PageSpeed API", "TypeScript"],
    },
    {
      id: "schema-generator",
      title: "JSON-LD Schema Engineering Tool",
      description:
        "High-authority structured data builder for e-commerce products, technical blog posts, and local business rich snippets.",
      category: "Web Utility",
      status: "Beta",
      href: "/tools/schema-generator",
      icon: Code2,
      techStack: ["React State", "JSON Validation", "SEO Engine"],
    },
  ];

  const categories = [
    "All",
    "Compilers & Editors",
    "Calculators",
    "Web Utility",
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive Web Tools</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
            Developer & Web Engineering Utilities
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A suite of custom-engineered interactive tools, live compilers, and
            performance calculators designed for modern web developers.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border bg-card">
          <form method="GET" className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              name="q"
              defaultValue={searchQuery}
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-foreground"
            />
            {selectedCategory !== "All" && (
              <input type="hidden" name="category" value={selectedCategory} />
            )}
          </form>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const queryParams = new URLSearchParams();
              if (cat !== "All") queryParams.set("category", cat);
              if (searchQuery) queryParams.set("q", searchQuery);
              const queryString = queryParams.toString();
              const href = queryString ? `?${queryString}` : "?";
              const isActive = selectedCategory === cat;

              return (
                <Link
                  key={cat}
                  href={href}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                          tool.status === "Live"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {tool.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {tool.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                    >
                      <span>Launch Tool</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 border border-dashed border-border rounded-2xl space-y-3">
              <Terminal className="w-8 h-8 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">
                No tools match your filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Custom Request Banner */}
        <div className="p-6 sm:p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              Need a Custom Interactive Tool or Calculator?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              I design dynamic JavaScript tools tailored for your brand&apos;s business logic.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Tool</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}