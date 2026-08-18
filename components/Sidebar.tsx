"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Mail, ArrowUpRight, Check } from "lucide-react";
// Import updated functions from blog-data:
import { getClientCategories, getClientPosts } from "@/lib/blog-data";
import { AUTHOR_PROFILE } from "@/lib/author";

function SidebarContent() {
  // 1. Hydration Guard State
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Updated function calls:
  const categories = getClientCategories().sort((a, b) => a.name.localeCompare(b.name));
  const recentPosts = getClientPosts().slice(0, 4);
  const searchParams = useSearchParams();

  // 2. Client-side mount hone ke baad hi URL searchParam execute hoga
  const activeCategory = mounted ? searchParams.get("category") : null;

  return (
    <aside className="w-full space-y-6">
      {/* 1. Author Box */}
      <div className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted">
            <Image
              src={AUTHOR_PROFILE.avatar}
              alt={AUTHOR_PROFILE.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base leading-tight">
              {AUTHOR_PROFILE.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {AUTHOR_PROFILE.role}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {AUTHOR_PROFILE.bio}
        </p>
        <Link
          href={AUTHOR_PROFILE.profileUrl}
          className="inline-flex items-center text-xs font-medium text-primary hover:underline gap-1"
        >
          View full profile <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 2. Recent Posts */}
      <div className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-base">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-center gap-3"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="48px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Categories */}
      <div className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-base">Categories</h3>
          {activeCategory && (
            <Link
              href="/blog"
              scroll={false}
              className="text-[11px] text-primary hover:underline font-medium"
            >
              Clear Filter
            </Link>
          )}
        </div>
        <ul className="space-y-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <li key={cat.name}>
                <Link
                  href={`/blog?category=${encodeURIComponent(cat.name)}`}
                  scroll={false}
                  className={`flex items-center justify-between text-xs px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground font-medium shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <Check className="h-3 w-3" />}
                    {cat.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {cat.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 4. Web Development Services Widget */}
      <Link
        href="/services/web-development-service"
        className="group block rounded-2xl border bg-card text-card-foreground p-6 shadow-sm hover:border-primary transition-all"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
            Web Development Services
          </h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Custom Next.js apps, Shopify storefronts, and performance audits.
        </p>
      </Link>

      {/* 5. Get a Free Consultation Widget */}
      <Link
        href="/contact"
        className="group block rounded-2xl border bg-card text-card-foreground p-6 shadow-sm hover:border-primary transition-all"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
            Get a Free Consultation
          </h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Discuss your project goals and get a tailored technical roadmap.
        </p>
      </Link>

      {/* 6. Stay Updated (Newsletter Box) */}
      <div className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-base">Stay Updated</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          Get new web development guides and tool reviews straight to your inbox.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-primary text-primary-foreground py-2 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}

export function Sidebar() {
  return (
    <Suspense fallback={<div className="w-full h-96 rounded-2xl border bg-card/50 animate-pulse" />}>
      <SidebarContent />
    </Suspense>
  );
}

export default Sidebar;