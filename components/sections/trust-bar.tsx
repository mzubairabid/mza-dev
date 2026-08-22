"use client";

import React, { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";

interface Metric {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface TrustBarProps {
  showTagline?: boolean;
  taglineClassName?: string;
}

const metrics: Metric[] = [
  {
    numericValue: 7,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Full-Stack & Systems",
    icon: (
      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    numericValue: 27,
    suffix: "+",
    label: "Handcrafted Projects",
    sublabel: "Web Apps & E-Commerce",
    icon: (
      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    numericValue: 95,
    suffix: "+",
    label: "PageSpeed Score",
    sublabel: "Average PageSpeed Insights",
    icon: (
      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    numericValue: 6,
    suffix: "+",
    label: "Countries Served",
    sublabel: "International Clients",
    icon: (
      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4 10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    numericValue: 0,
    suffix: "%",
    label: "Agency Markup",
    sublabel: "Direct Senior Dev Access",
    icon: (
      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function SmoothCounter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function TrustBar({
  showTagline = true,
  taglineClassName = "",
}: TrustBarProps) {
  return (
    <FadeIn direction="up" delay={0.2}>
      <section className="w-full py-1 my-1 not-prose">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Trusted by Growing Businesses Globally
          </p>

          <div className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 p-3 md:p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md hover:shadow-primary/5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200/70 dark:divide-zinc-800">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`group/item flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-0.5 ${
                    index !== 0 ? "pt-2 md:pt-0" : ""
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover/item:text-primary">
                    {metric.icon}
                    <SmoothCounter
                      target={metric.numericValue}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {metric.label}
                  </div>
                  {metric.sublabel && (
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                      {metric.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {showTagline && (
            <p className={`mt-3 text-center text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ${taglineClassName}`}>
              ENTERPRISE-GRADE SPEED & CLEAN ARCHITECTURE | DELIVERED WITH DIRECT DEV ACCESS.
            </p>
          )}
        </div>
      </section>
    </FadeIn>
  );
}