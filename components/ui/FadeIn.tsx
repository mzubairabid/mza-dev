// components/ui/FadeIn.tsx
// Purane tools isay use karte the (framer-motion). Ab ye sirf wrapper hai:
// scroll par har section ka animation mobile par INP/TBT kharab karta tha.
import type { ReactNode } from "react";

export function FadeIn({ children }: { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) {
  return <div>{children}</div>;
}
