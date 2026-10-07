"use client";
// components/layout/DesktopDropdown.tsx — desktop sub menu.
// Masla tha: link click karne ke baad focus link par reh jata tha (group-focus-within),
// aur cursor wahin ho to hover bhi menu khula rakhta tha. Ab click par menu band hota hai,
// aur dobara tab khulta hai jab cursor menu se bahar ja kar wapas aaye.
import { useState, type ReactNode } from "react";

export function DesktopDropdown({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [closed, setClosed] = useState(false);

  return (
    <li className="group relative" onMouseLeave={() => setClosed(false)}>
      {trigger}
      <div
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) {
            setClosed(true);
            (document.activeElement as HTMLElement | null)?.blur();
          }
        }}
        className={
          closed
            ? "invisible absolute left-0 top-full pt-2 opacity-0"
            : "invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
        }
      >
        {children}
      </div>
    </li>
  );
}
