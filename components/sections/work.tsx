"use client";

import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const services = [
  { id: "01", name: "Full-Stack Web Apps" },
  { id: "02", name: "Custom E-Commerce" },
  { id: "03", name: "Technical SEO & Speed" },
  { id: "04", name: "WordPress & Shopify" },
  { id: "05", name: "Web Systems Architecture" },
];

const workTimeline = [
  {
    id: "01",
    year: "2019",
    title: "Software Engineering & Data Systems",
    category: "Full-Time Development",
    description: "Architected C# MVC web applications, optimized SQL backend procedures, and structured core institutional databases.",
    tags: ["C# MVC", "SQL Server", "Data Architecture"],
    version: "v1.0",
    linkText: "Core Engineering",
  },
  {
    id: "02",
    year: "2020",
    title: "Enterprise Server & Backup Networks",
    category: "Systems Administration",
    description: "Managed high-volume server backups, structured barcode data processing systems, and maintained digital records infrastructure.",
    tags: ["Server Backup", "Data Pipelines", "System Ops"],
    version: "v1.2",
    linkText: "Infrastructure",
  },
  {
    id: "03",
    year: "2021",
    title: "Full-Stack Web & Automation Tools",
    category: "Web Development",
    description: "Built custom web tools and dynamic management dashboards using Vanilla JavaScript, HTML5, and CSS3 layouts.",
    tags: ["JavaScript", "HTML5/CSS3", "Web Dashboard"],
    version: "v1.5",
    linkText: "Web Engine",
  },
  {
    id: "04",
    year: "2022",
    title: "Gadget Crunchie Platform Launch",
    category: "Platform Engineering",
    description: "Designed and deployed gadgetcrunchie.com. Scaled SEO structure and performance metrics to achieve AdSense monetization.",
    tags: ["Platform Architecture", "Technical SEO", "AdSense"],
    version: "v2.0",
    linkText: "Live Platform",
  },
  {
    id: "05",
    year: "2023",
    title: "Custom CMS & WooCommerce Systems",
    category: "CMS & E-Commerce",
    description: "Developed tailored WordPress themes, WooCommerce storefront integrations, and optimized backend execution speeds.",
    tags: ["WordPress", "WooCommerce", "Core Web Vitals"],
    version: "v2.5",
    linkText: "CMS Architecture",
  },
  {
    id: "06",
    year: "2024",
    title: "Modern React & Next.js Ecosystems",
    category: "Frontend Engineering",
    description: "Engineered scalable web interfaces using Next.js, React, Tailwind CSS, and Framer Motion layout animations.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    version: "v3.0",
    linkText: "Modern Stack",
  },
  {
    id: "07",
    year: "2025",
    title: "Global Client Delivery & Web Calculators",
    category: "International Freelance",
    description: "Built e-commerce systems for German clients, localized sites in Dubai, and complex JS calculation engines for US platforms.",
    tags: ["Vanilla JS Engines", "Shopify / WooCommerce", "Localization"],
    version: "v3.5",
    linkText: "Global Case Study",
  },
  {
    id: "08",
    year: "2026",
    title: "Upwork Milestones & Cloud Virtualization",
    category: "Full-Stack & Cloud",
    description: "Achieved major Upwork milestones and designed 4-week WHMCS & Proxmox VPS deployment blueprints for enterprise hosting.",
    tags: ["Proxmox Virtualization", "WHMCS", "Full-Stack Next.js"],
    version: "v4.0",
    linkText: "Active Portfolio",
  },
];

const DURATION_MS = 5000;

export function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      startTimeRef.current = null;
      return;
    }

    const updateTimer = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const currentProgress = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= DURATION_MS) {
        setCurrentIndex((prev) => (prev + 1) % workTimeline.length);
        setProgress(0);
        startTimeRef.current = timestamp;
      }

      animFrameRef.current = requestAnimationFrame(updateTimer);
    };

    animFrameRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentIndex, isPaused]);

  const resetTimer = () => {
    setProgress(0);
    startTimeRef.current = null;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % workTimeline.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? workTimeline.length - 1 : prev - 1));
    resetTimer();
  };

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  const activeProject = workTimeline[currentIndex];

  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* Top Services Bar */}
        <FadeIn direction="up" delay={0.3}>
          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {services.map((item) => (
                <div key={item.id} className="space-y-0.5">
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">{item.id}</span>
                  <h4 className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        {/* Work Timeline Showcase */}
        
          <div 
            className="space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <FadeIn direction="down" delay={0.3}>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">01 / SELECTED WORK</span>
                </FadeIn>
                <FadeIn direction="up" delay={0.3}>
                  <h2 className="text-3xl md:text-5xl font-serif font-light mt-2 mb-2 md:mb-4">
                    Engineering milestones shipped from 2019 to 2026.
                  </h2>
                </FadeIn>
              </div>
              <FadeIn direction="down" delay={0.3}>
                <span className="text-[11px] font-mono text-zinc-400 whitespace-nowrap">2019 — 2026</span>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
              
              {/* Left Timeline */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                <FadeIn direction="right" delay={0.3}>
                  <div className="space-y-1">
                    {workTimeline.map((item, idx) => {
                      const isActive = currentIndex === idx;

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(idx)}
                          className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-all flex items-center gap-3 ${
                            isActive
                              ? "bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300/80 dark:border-zinc-700 shadow-xs"
                              : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-zinc-500"
                          }`}
                        >
                          {/* SVG Dynamic Primary Color Stroke */}
                          <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                            <svg className="w-7 h-7 transform -rotate-90 absolute inset-0">
                              <circle
                                cx="14"
                                cy="14"
                                r={radius}
                                stroke="currentColor"
                                className="text-zinc-200 dark:text-zinc-800"
                                strokeWidth="2"
                                fill="transparent"
                              />
                              {isActive && (
                                <circle
                                  cx="14"
                                  cy="14"
                                  r={radius}
                                  stroke="currentColor"
                                  className="text-primary"
                                  strokeWidth="2"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={strokeDashoffset}
                                  strokeLinecap="round"
                                  fill="transparent"
                                />
                              )}
                            </svg>
                            
                            <span
                              className={`text-[10px] font-mono font-medium z-10 ${
                                isActive ? "text-primary font-bold" : "text-zinc-500"
                              }`}
                            >
                              {item.id}
                            </span>
                          </div>

                          <div className="truncate">
                            <p className={`text-xs font-semibold truncate ${isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                              {item.title}
                            </p>
                            <p className="text-[10px] font-mono text-zinc-400">{item.year}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </FadeIn>
                {/* Prev / Next Controls */}
                <div className="flex items-center gap-2 pt-2">
                  <FadeIn direction="right" delay={0.3}>
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all active:scale-95"
                    aria-label="Previous Milestone"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button></FadeIn>
                  <FadeIn direction="left" delay={0.3}>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all active:scale-95"
                    aria-label="Next Milestone"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  </FadeIn>
                </div>
              </div>

              {/* Right Showcase Card */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                
                <div className="sm:col-span-11 bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 rounded-xl p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <span>/ {activeProject.id}</span>
                      <span className="text-primary font-semibold">{activeProject.year}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">{activeProject.category}</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-zinc-900 dark:text-zinc-100 mt-1">
                        {activeProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2.5">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {activeProject.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] rounded font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between mt-6">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                      {activeProject.linkText} <ExternalLink className="w-3 h-3 text-zinc-400 ml-1" />
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Status · {activeProject.version}</span>
                  </div>
                </div>

                {/* Right Indicator Dots */}
                <div className="hidden sm:flex sm:col-span-1 flex-col items-center justify-between py-2 relative">
                  <div className="absolute top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 z-0" />
                  {workTimeline.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      className="z-10 group flex flex-col items-center focus:outline-none"
                      aria-label={`Select year ${item.year}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentIndex === idx
                            ? "bg-primary ring-2 ring-primary/30 scale-125"
                            : "bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-400"
                        }`}
                      />
                      <span className={`text-[8px] font-mono mt-0.5 transition-opacity ${
                        currentIndex === idx ? "text-zinc-900 dark:text-zinc-100 font-bold opacity-100" : "text-zinc-400 opacity-40"
                      }`}>
                        {item.year.slice(-2)}
                      </span>
                    </button>
                  ))}
                </div>

              </div>

            </div>
          </div>
        
      </div>
    </section>
  );
}

export default Work;