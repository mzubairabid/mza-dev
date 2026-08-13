"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Code2, 
  ShoppingBag, 
  Globe, 
  Palette, 
  Calculator 
} from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";

// Sub-menu items ke liye icons automatic mapping function
const getDropdownIcon = (href: string) => {
  if (href.includes("shopify")) return <ShoppingBag className="w-4 h-4" />;
  if (href.includes("web-development")) return <Globe className="w-4 h-4" />;
  if (href.includes("graphic-design")) return <Palette className="w-4 h-4" />;
  if (href.includes("calculator")) return <Calculator className="w-4 h-4" />;
  return <Code2 className="w-4 h-4" />;
};

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="font-serif font-medium text-lg tracking-tight text-foreground">
          MZA<span className="text-primary">.</span>
        </Link>

        {/* Navigation Links from content.ts */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          {NAV_LINKS.map((item) => {
            // Case 1: Simple Links (About, Work, Blog)
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            // Case 2: Dropdown Links (Services or Tools)
            const isServices = item.label.toLowerCase() === "services";
            const isOpen = isServices ? isServicesOpen : isToolsOpen;
            const setIsOpen = isServices ? setIsServicesOpen : setIsToolsOpen;

            return (
              <div
                key={item.label}
                className="relative group py-2 cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <Link href={item.href}>{item.label}</Link>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>

                {/* Sub-Menu Dropdown Card */}
                {isOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50">
                    <div className="p-2 rounded-2xl border border-border bg-card shadow-xl space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-accent transition-colors group/item"
                        >
                          <div className="p-2 rounded-lg bg-accent text-primary border border-border group-hover/item:border-primary/40 shrink-0">
                            {getDropdownIcon(child.href)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground group-hover/item:text-primary transition-colors flex items-center justify-between">
                              <span>{child.title}</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-tight">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button */}
        <Link
          href="/contact"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}

export default Header;