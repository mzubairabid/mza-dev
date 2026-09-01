import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import heroImage from "@/public/project-images/about-web-development.webp";
import { FadeIn } from "@/components/animations/fade-in";
import FaqSchema from "@/components/FaqSchema";
import { FaqSection } from "@/components/sections/faq-section";

import {
  CheckCircle2,
  Code2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Web Developer & SEO",
  description: "Full-Stack Web Developer and Technical SEO Specialist specializing in Next.js, React, and Core Web Vitals optimization.",
  alternates: {
    canonical: "https://mzadev.com/about",
  },
  openGraph: {
    title: "About Muhammad Zubair Abid (MZA Dev)",
    description: "Full-Stack Web Developer and Technical SEO Specialist specializing in Next.js, React, and Core Web Vitals optimization.",
    url: "https://mzadev.com/about",
    type: "website",
    images: [{ url: "https://mzadev.com/public/project-images/about-web-development.webp", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const coreSkills = [
    "Next.js / React / TypeScript",
    "Tailwind CSS & Modern UI/UX",
    "Technical SEO & Core Web Vitals",
    "Node.js & Custom API Integrations",
    "Shopify Storefront Optimization",
    "WordPress & WooCommerce Customization",
  ];

  const servicesBreakdown = [
    {
      title: "Full-Stack Web Applications",
      description:
        "Building scalable web applications using Next.js, React, and Tailwind CSS. Clean component architecture optimized for fast dynamic rendering and high Core Web Vitals scores.",
    },
    {
      title: "E-Commerce & Storefront Optimization",
      description:
        "Custom Shopify liquid themes and WooCommerce speed optimization. Fixing checkout bottlenecks, database query lags, and mobile responsiveness to maximize sales.",
    },
    {
      title: "Custom Interactive Web Tools",
      description:
        "Engineering high-converting, hand-coded JavaScript calculators, financial tools, and custom web widgets tailored to capture qualified organic search leads.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Technical Discovery & SEO Audit",
      description:
        "Analyzing your business goals, target audience, site speed hurdles, and technical SEO requirement gaps before writing a single line of code.",
    },
    {
      step: "02",
      title: "Clean Architecture & Design",
      description:
        "Creating responsive wireframes and accessible UI layouts in Tailwind CSS with semantic HTML structure for optimal user experience.",
    },
    {
      step: "03",
      title: "Custom Development & Testing",
      description:
        "Writing clean, modular TypeScript code with fast API endpoints, structured schema markups, and cross-browser testing across mobile devices.",
    },
    {
      step: "04",
      title: "Deployment & Speed Tuning",
      description:
        "Configuring server setups, CDN cache headers, Core Web Vitals, and Google indexation tools to ensure an immediate high PageSpeed score upon launch.",
    },
  ];

  const faqs = [
    {
      q: "Who is Muhammad Zubair Abid (MZA Dev)?",
      a: "Muhammad Zubair Abid, known professionally as MZA Dev, is an independent Full-Stack Web Developer and Technical SEO Specialist with an Honors degree in Information Technology (completed in 2018). He specializes in Next.js, React, TypeScript, custom Shopify Liquid, and Core Web Vitals performance tuning.",
    },
    {
      q: "What is Muhammad Zubair Abid's background and development experience?",
      a: "His career began with enterprise software development and relational database management before shifting toward the modern JavaScript ecosystem. He manages the technology media platform Gadget Crunchie (launched in October 2022) and the technical YouTube channel ByteScript MZA.",
    },
    {
      q: "Why hire an independent developer like MZA Dev instead of an agency?",
      a: "Working with MZA Dev guarantees direct, high-level engineering without junior offshore handoffs. Every line of code, database query, speed optimization, and security check is handled directly by a senior full-stack engineer.",
    },
    {
      q: "What core technologies and frameworks does MZA Dev specialize in?",
      a: "MZA Dev specializes in Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, custom API integrations, custom Shopify Liquid theme development, WooCommerce speed optimization, and hardcoded JSON-LD structured schema.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      {/* Inject JSON-LD Schema */}
      <FaqSchema
        faqList={faqs.map((item) => ({
          question: item.q,
          answer: item.a,
        }))}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full-Stack Web Developer & SEO Engineer</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Crafting High-Performance{" "}
                <span className="text-primary font-normal">Digital Solutions</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I am Muhammad Zubair Abid (MZA Dev) specializing in engineering
                high-speed Next.js web applications, custom Shopify & WordPress
                architectures, and executing deep Core Web Vitals optimizations
                built to scale and rank on search engines.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-3.5 rounded-xl border border-border hover:bg-muted text-foreground font-semibold text-sm transition-all inline-flex items-center"
                >
                  View Projects
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Image Wrapper */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <FadeIn direction="left" delay={0.3}>
              <div className="relative w-full max-w-120 rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src={heroImage}
                  alt="Muhammad Zubair Abid"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Story & Experience Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground tracking-tight">
              My Path in Professional Web Development
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p>
              My journey into computer science began in 2018 after completing my
              Bachelor degree in Information Technology (Hons). Early in my
              career, I was given the technical responsibility of upgrading
              legacy enterprise desktop systems and converting complex
              relational database software under tight delivery deadlines.
              Working directly with raw data structures and performance
              constraints laid a strong engineering foundation for my career.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p>
              Over the years, I shifted my focus toward the modern JavaScript web
              ecosystem. As a freelance full-stack developer, I specialized in
              building custom Next.js web applications, responsive Tailwind CSS
              layouts, custom Shopify themes, and optimizing WooCommerce stores
              for high traffic conversions.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p>
              To test my technical SEO strategies and server performance
              configurations on live traffic, I launched my tech blog, Gadget
              Crunchie, in October 2022. Managing an independent publication
              provided real-world testing grounds for Google search algorithm
              updates, Core Web Vitals optimization, and structured schema
              implementation.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <p>
              I also run my technical YouTube channel, ByteScript MZA, where I
              publish step-by-step coding guides and tutorials to help other
              developers master full-stack web technologies and speed tuning
              techniques.
            </p>
          </FadeIn>

          {/* YouTube Section */}
          <FadeIn direction="up" delay={0.6}>
            <div className="p-5 rounded-2xl border border-border bg-muted/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary text-primary-foreground rounded-xl shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-sans">
                    ByteScript MZA Tutorials
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Practical guides on modern web development and performance tuning.
                  </p>
                </div>
              </div>
              <a
                href="https://youtube.com/@mzadev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
              >
                <span>Visit Channel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn direction="left" delay={0.2}>
            <div className="p-6 sm:p-8 border border-border rounded-2xl bg-muted/40 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Code2 className="w-5 h-5 text-primary shrink-0" />
                <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
                  Core Stack and Technical Skills
                </h3>
              </div>

              <ul className="space-y-3">
                {coreSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-xs sm:text-sm text-foreground font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <div className="p-6 border border-border rounded-2xl bg-card space-y-3">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm font-sans">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>Why Work With an Independent Developer?</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Agencies often delegate work to junior staff after a contract is
                signed. When you work with me, every single line of code, technical
                architecture decision, and security check is handled directly by an
                experienced full-stack developer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Specialized Custom Web Services Grid */}
      <section className="space-y-8">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif text-foreground tracking-tight">
              Specialized Web Solutions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Tailored engineering services designed to fix performance
              bottlenecks and grow business revenue.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesBreakdown.map((service, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-muted/30 space-y-4 hover:border-primary/40 transition-all duration-300 h-full">
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Development Process & Workflow */}
      <section className="space-y-8">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-serif text-foreground tracking-tight">
              Development Process & Workflow
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              A structured four-step engineering methodology to bring your custom
              project from idea to launch.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="p-6 rounded-2xl border border-border bg-card space-y-3 relative h-full">
                <div className="text-2xl font-mono font-extrabold text-primary">
                  {item.step}
                </div>
                <h3 className="text-base font-serif text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* 6. Call to Action Banner */}
      <FadeIn direction="up" delay={0.2}>
        <section className="rounded-3xl border border-border bg-card text-foreground p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-foreground leading-tight">
              Ready to Build a High-Performance Website?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Stop losing potential clients to slow loading speeds and unoptimized
              pages. Let us build a fast, secure, and search-optimized digital
              asset for your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-border bg-secondary hover:bg-muted text-foreground font-semibold text-sm transition-all flex items-center justify-center"
            >
              View Selected Work
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}