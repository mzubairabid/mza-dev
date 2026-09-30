"use client";
// components/layout/ThemeToggle.tsx — light/dark. Pehli paint se pehle theme
// app/layout.tsx ka inline script lagata hai, is liye flash nahi hota.
import { MoonIcon, SunIcon } from "@/components/ui/Icons";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-accent"
      aria-label="Switch between light and dark theme"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}

