import React from "react";
// Sections Imports
import { Hero } from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import { Work } from "@/components/sections/work";
import { Capabilities } from "@/components/sections/capabilities";
import { Approach } from "@/components/sections/approach";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq-section";
import FaqSchema from "@/components/FaqSchema";

export const dynamic = "force-static";

export default function Home() {
  const faqs = [
    {
      q: "Who is Muhammad Zubair Abid (MZA Dev)?",
      a: "Muhammad Zubair Abid, known as MZA Dev, is a Full-Stack Web Developer, Technical SEO Specialist, and Digital Solutions Architect specializing in Next.js, React, custom WordPress, and Shopify platforms.",
    },
    {
      q: "What services, web tools, and resources are available on this platform?",
      a: "This platform features custom full-stack web development services, specialized web engineering tools, technical SEO frameworks, real-world case studies, and performance optimization solutions.",
    },
    {
      q: "Why choose custom Next.js engineering over traditional page builders?",
      a: "Custom Next.js architectures deliver instant load times, top Core Web Vitals scores, better data security, and structured schema that help you rank higher on Google and AI search engines.",
    },
    {
      q: "How can I start a project or work with MZA Dev?",
      a: "You can reach out through the Contact page or click 'Let's Discuss Your Project'. MZA Dev reviews all inquiries directly within 24 hours to provide a transparent scope and roadmap.",
    },
  ];

  return (
    <main className="w-full flex flex-col gap-16 sm:gap-24">
      {/* 01 / HERO SECTION */}
      <Hero />
      <TrustBar />
      
      {/* 02 / SELECTED WORK SECTION */}
      <Work />

      {/* 03 / CAPABILITIES SECTION */}
      <Capabilities />

      {/* 04 / APPROACH SECTION */}
      <Approach />

      {/* 05 / TECH STACK SECTION */}
      <Stack />

      {/* 06 / ABOUT SECTION */}
      <About />

      {/* 07 / CONTACT SECTION */}
      <Contact />

      {/* FAQs Section Component */}
      <FaqSection faqs={faqs} />

      {/* 3. JSON-LD FAQ Schema Injection */}
      <FaqSchema
        faqList={faqs.map((item: { q: string; a: string }) => ({
          question: item.q,
          answer: item.a,
        }))}
      />
    </main>
  );
}