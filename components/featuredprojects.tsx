import React from "react";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
}

// Local Projects Array (Sanity ki jagah ab yeh use hoga)
const featuredProjects: Project[] = [
  {
    id: "1",
    title: "German E-Commerce Store & PayPal Integration",
    category: "WooCommerce / Custom Dev",
    description: "Full store redesign with custom PayPal payment gateway integration and localized checkout flow.",
    image: "/project-images/portfolio-hero-day.png", // public/project-images/ se apni image ka path dein
    tags: ["WordPress", "WooCommerce", "PayPal API", "PHP"],
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Enterprise Electronic Security Platform",
    category: "Web System & SEO",
    description: "12-page web platform deployed in Dubai featuring localized Arabic content and rapid Google indexing architecture.",
    image: "/project-images/portfolio-hero-day.png",
    tags: ["Next.js", "Tailwind CSS", "Technical SEO", "Arabic i18n"],
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Custom Interactive Financial Engine",
    category: "JavaScript / Custom Tools",
    description: "Custom vanilla JavaScript calculation engine integrated into WordPress to generate real-time financial reporting.",
    image: "/project-images/portfolio-hero-day.png",
    tags: ["JavaScript", "WordPress", "Custom Math Logic"],
    liveUrl: "https://example.com",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2">
            <Code2 className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground">
            Selected Case Studies
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
          Hand-coded web applications and platforms built for speed, clean SEO, and maximum business conversion.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Image Box */}
              <div className="relative h-52 w-full bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-foreground font-medium border border-border">
                  {project.category}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Footer Tags & Link */}
            <div className="p-6 pt-0 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-muted text-[11px] font-mono text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <div className="pt-2 border-t border-border/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}