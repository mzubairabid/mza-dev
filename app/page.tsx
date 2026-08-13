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
export const dynamic = "force-static";

export default function Home() {
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
    </main>
  );
}
