// Types for lib/blog-migration.mjs (TypeScript ke liye)
export type BlogStatus = "live" | "migrated" | "redirect" | "gone";
export declare const BLOG_DOMAIN: string;
export declare const BLOG_MIGRATION: Record<string, { status: BlogStatus; to?: string; note?: string }>;
export declare const BLOG_ALIASES: Record<string, string>;
export declare function blogTarget(slug: string): string | null;
export declare function hasLivePosts(): boolean;
