import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

const metrics: Metric[] = [
  {
    value: "7+",
    label: "Years Experience",
    sublabel: "Full-Stack & Systems",
  },
  {
    value: "50+",
    label: "Handcrafted Projects",
    sublabel: "Web Apps & E-Commerce",
  },
  {
    value: "4",
    label: "Continents Served",
    sublabel: "Global Client Base",
  },
  {
    value: "0%",
    label: "Agency Markup",
    sublabel: "Direct Senior Dev Access",
  },
];

export default function TrustBar() {
  return (
    <FadeIn direction="up" delay={0.3}>
      <section className="w-full py-4 my-2">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Trusted by Growing Businesses Globally
          </p>

          <div className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md hover:shadow-primary/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200/70 dark:divide-zinc-800">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`group/item flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-0.5 ${
                    index !== 0 ? "pt-3 md:pt-0" : ""
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover/item:text-primary">
                    {metric.value}
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
        </div>
      </section>
    </FadeIn>
  );
}