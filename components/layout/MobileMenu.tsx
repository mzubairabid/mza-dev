"use client";
// components/layout/MobileMenu.tsx — sirf mobile par. Desktop menu server-rendered hai.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import type { NavItem } from "@/lib/site";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-10 items-center justify-center rounded-md hover:bg-accent"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background">
          <nav aria-label="Mobile" className="container-site py-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.href}>
                  <NavAnchor item={item} className="text-lg font-semibold" />
                  {item.children && (
                    <ul className="mt-3 space-y-3 border-l border-border pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <NavAnchor item={c} className="text-muted-foreground" />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function NavAnchor({ item, className }: { item: NavItem; className?: string }) {
  if (item.external)
    return (
      <a href={item.href} className={className} target="_blank" rel="noopener">
        {item.label}
      </a>
    );
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}
