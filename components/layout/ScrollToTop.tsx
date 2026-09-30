"use client";
// components/layout/ScrollToTop.tsx
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ui/Icons";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card shadow-md hover:text-primary md:bottom-6 md:right-24"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
}
