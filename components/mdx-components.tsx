// components/mdx-components.tsx
import Image from "next/image";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/animations/fade-in";
import FaqSchema from '@/components/FaqSchema';
import TrustBar from "@/components/sections/trust-bar";
import ServicesMarketplaceSection from "@/components/sections/ServicesMarketplaceSection";
import ProjectHero from "@/components/projects/karachi-mart/hero-section";
import ProjectFeatures from "@/components/projects/karachi-mart/features";
import ProjectTechStack from "@/components/projects/karachi-mart/tech-stack";
import ProjectCTA from "@/components/projects/karachi-mart/cta";
import Categories from "@/components/projects/karachi-mart/Categories";
import Products from "@/components/projects/karachi-mart/Products";
import GermanDesiHero from "@/components/projects/german-desi/hero-section";
import GermanDesiFeatures from "@/components/projects/german-desi/features";
import GermanDesiTechStack from "@/components/projects/german-desi/tech-stack";
import GermanDesiCTA from "@/components/projects/german-desi/cta";

export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200",
    warning: "border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200",
    success: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200",
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}

export const mdxComponents = {
  // Custom React Components
  Callout,
  Button,
  FadeIn,
  FaqSchema,
  TrustBar,
  ServicesMarketplaceSection,
  ProjectHero,
  ProjectFeatures,
  ProjectTechStack,
  ProjectCTA,
  Products,
  Categories,
  GermanDesiHero,
  GermanDesiFeatures,
  GermanDesiTechStack,
  GermanDesiCTA,

  // HTML Details Override for Single-Open Accordion
  details: ({ children, ...props }: ComponentPropsWithoutRef<"details">) => (
    <details name="faq-accordion" {...props}>
      {children}
    </details>
  ),

  // Code Block & Next Link
  pre: CodeBlock,
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link
      href={href || "#"}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    >
      {children}
    </Link>
  ),

  // Next.js Image Integration
  img: (props: ComponentPropsWithoutRef<"img">) => {
    const src = typeof props.src === "string" ? props.src : "";
    return (
      <div className="my-6 overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={src}
          alt={props.alt || "Blog image"}
          width={1200}
          height={630}
          className="w-full h-auto object-cover"
        />
        {props.alt && (
          <span className="block p-2 text-center text-xs text-muted-foreground border-t border-border">
            {props.alt}
          </span>
        )}
      </div>
    );
  },

  // Hero section image
  HeroImage: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-full h-full object-cover m-0" />
  ),
  
  // Typography & Headings
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight border-b pb-2">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold tracking-tight">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="mt-4 mb-2 text-lg font-semibold tracking-tight">{children}</h4>
  ),

  // Safe Paragraph Component
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    let hasBlockElement = false;

    // Check karein ke kahin paragraph ke andar koi block element (div, p, section, etc.) toh nahi hai
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const type = child.type;
        if (
          typeof type === "string" &&
          ["div", "p", "section", "article", "ul", "ol", "table", "pre"].includes(type)
        ) {
          hasBlockElement = true;
        }
      }
    });

    // Agar block element mil gaya, toh div return karo taake <p> ke andar <p>/<div> ka HTML rule break na ho
    if (hasBlockElement) {
      return <div {...props}>{children}</div>;
    }

    // Normal text ke liye standard paragraph return karo
    return (
      <p className="my-4 leading-relaxed" {...props}>
        {children}
      </p>
    );
  },
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,

  // Bullet & Numbered Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>
  ),

  // Inline Code formatting
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  ),

  // Markdown Table Layout
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-muted border-b border-border font-medium">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="hover:bg-muted/50 transition-colors">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 align-middle text-muted-foreground">{children}</td>
  ),
};