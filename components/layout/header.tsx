"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { 
  ChevronDown, 
  Code2, 
  ShoppingBag, 
  Globe, 
  Palette, 
  Calculator,
  Menu,
  X 
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

  // Mobile Menu States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center">
      <Image
        src="/project-images/mza-dev-logo.webp"
        alt="MZA DEV Logo"
        width={200} // High resolution aspect ratio hold karne ke liye
        height={50} // Aspect ratio baseline
        priority // Header logo immediate load hone ke liye (LCP boost)
        className="w-auto h-[25] sm:h-[30] object-contain transition-opacity hover:opacity-90"
      />
    </Link>

        {/* Desktop Navigation Links from NAV_LINKS */}
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

        {/* Right Section: Action Button & Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </Link>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Dynamically loaded from NAV_LINKS) */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {NAV_LINKS.map((item) => {
            // Case 1: Simple Links for Mobile
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-foreground hover:text-primary py-2 transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            // Case 2: Dropdown / Accordion Links for Mobile
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label} className="border-b border-border/40 py-2">
                <div className="flex items-center justify-between w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleMobileExpanded(item.label)}
                    className="p-1 text-muted-foreground hover:text-foreground"
                    aria-label={`Toggle ${item.label}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <div className="pl-3 mt-2 space-y-2 border-l-2 border-primary/20">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-2.5 text-xs text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                      >
                        <div className="p-1.5 rounded bg-accent text-primary shrink-0 mt-0.5">
                          {getDropdownIcon(child.href)}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{child.title}</div>
                          {child.description && (
                            <p className="text-[10px] text-muted-foreground leading-tight">
                              {child.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Header;