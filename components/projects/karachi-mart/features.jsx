import React from "react";
import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const features = [
  {
    title: "Area-Based Location Selector",
    description: "Dynamic neighborhood filtering allowing users to select delivery areas across Karachi seamlessly.",
  },
  {
    title: "Interactive Product Categories",
    description: "Clean grid design covering dairy, beverages, oils, pulses, household, and fresh produce.",
  },
  {
    title: "Promotional Deals & Bundles",
    description: "Dedicated blocks for monthly rashan bundles and buy-one-get-one-free offers to boost conversion.",
  },
  {
    title: "Verified Customer Reviews",
    description: "Social proof section highlighting real buyer feedback to build trust and credibility instantly.",
  },
];

export default function ProjectFeatures() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Key Technical Features & Capabilities
            </h2>
            <p className="text-muted-foreground">
              Engineered with clean UI/UX standards to provide a friction-free shopping experience.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border shadow-xs flex gap-4">
              <FadeIn className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}