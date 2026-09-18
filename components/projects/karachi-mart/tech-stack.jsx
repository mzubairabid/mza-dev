import React from "react";
import { FadeIn } from "@/components/animations/fade-in";

const technologies = [
  { name: "HTML5", category: "Markup" },
  { name: "CSS3 / Modern Grid", category: "Styling" },
  { name: "JavaScript (ES6+)", category: "Interactivity" },
  { name: "Responsive UI/UX", category: "Design" },
];

export default function ProjectTechStack() {
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-8">Tech Stack Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="px-5 py-3 rounded-lg bg-card border border-border shadow-xs">
                <span className="block font-semibold text-foreground">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}