// lib/blog-migration.mjs
// =====================================================================
// BLOG MIGRATION CONTROL PANEL  (www.mzadev.com  →  blog.mzadev.com)
// =====================================================================
// Har post ki sirf "status" line badlo. next.config.mjs, proxy.ts aur
// sitemap.ts sab isi file se chalte hain.
//
//  (Migration mukammal: ab koi post is site par "live" nahi. app/blog delete ho chuka hai.
//   /blog, /blog/*, /post/*, /category/* ke baaqi sab URLs proxy.ts WordPress par bhejta hai.)
//  "migrated"  → WordPress par SAME slug se publish ho chuki hai.
//                /blog/<slug>, /<slug>, /post/<slug>  →  301  →  blog.mzadev.com/<slug>
//  "redirect"  → 301 kisi page par (field "to" me path likho)
//  "gone"      → 410 Gone (Google ko batata hai post jaan boojh kar hatayi gayi)
//
// ⚠️ "migrated" TABHI karo jab blog.mzadev.com/<slug> khul raha ho.
//    WordPress → Settings → Permalinks → "Post name" hona chahiye.
// ⚠️ "gone" karne se pehle Search Console → Performance → Pages me dekh lo
//    ke pichle 3 mahine me us post par clicks to nahi aa rahe.
// =====================================================================

export const BLOG_DOMAIN = "https://blog.mzadev.com";

/** @type {Record<string, { status: "live" | "migrated" | "redirect" | "gone", to?: string, note?: string }>} */
export const BLOG_MIGRATION = {
  // ---------- blog.mzadev.com par publish ho chuki hain (301 → WordPress) ----------
  "core-web-vitals-in-2026": { status: "migrated" },
  "fix-inp-issue-on-wordpress": { status: "migrated" },
  "how-to-fix-pagespeed-unable-to-resolve-url": {
    status: "redirect",
    to: "https://blog.mzadev.com/pagespeed-unable-to-resolve-url/",
    note: "WordPress par slug chhota rakha gaya (how-to-fix- ke baghair)",
  },
  "build-a-fast-seo-friendly-website": { status: "migrated" },
  "on-page-seo-checklist-2026": { status: "migrated" },
  "web-development-vs-website-builders": { status: "migrated" },
  "custom-web-development-for-small-businesses": { status: "migrated" },
  "website-design-and-development-services": { status: "migrated", note: "WP par 'How to choose a web developer'" },
  "professional-website-redesign-2026": { status: "migrated", note: "website-redesign-2026 isi me merge hui" },
  "website-redesign-2026": {
    status: "redirect",
    to: "https://blog.mzadev.com/professional-website-redesign-2026/",
    note: "Merge ho gayi",
  },

  // ---------- Hata di gayin (410) ----------
  "add-google-adsense-to-wordpress": { status: "gone" },
  "apis-in-web-development": { status: "gone" },

  // ---------- Main site ke pages par shift ----------
  "the-blueprint-respiro-premium-shopify-design": { status: "redirect", to: "/respiro-shopify-store" },
  "best-online-react-compiler-2026": { status: "redirect", to: "/tools/online-react-compiler-2026" },

  // ---------- Drop (410 Gone) ----------
  "modern-css-layouts-for-websites": { status: "gone" },
  "top-web-development-frameworks": { status: "gone" },
  "design-website-for-beginners": { status: "gone" },
  "top-web-design-trends-for-2026": { status: "gone" },
  "dark-mode-vs-light-mode-ux": { status: "gone" },
  "google-seo-update-2026": { status: "gone" },
  "best-seo-strategies-2026": { status: "gone" },
  "increase-website-traffic-without-ads-2026": { status: "gone" },
  "build-agentic-web-experiences": { status: "gone" },
};

/** Purane URLs jo kisi post ke doosre naam the */
export const BLOG_ALIASES = {
  "add-google-adsense-wordpress-without-plugins": "add-google-adsense-to-wordpress",
  "role-of-apis-in-web-development-shopify-case-study": "apis-in-web-development",
};

/** Kisi post ka final destination (null = abhi isi site par live, "GONE" = 410) */
export function blogTarget(slug) {
  const entry = BLOG_MIGRATION[slug];
  if (!entry) return null;
  if (entry.status === "migrated") return `${BLOG_DOMAIN}/${slug}/`; // WordPress URLs "/" par khatam hote hain
  if (entry.status === "redirect") return entry.to;
  if (entry.status === "gone") return "GONE";
  return null; // live
}

export const hasLivePosts = () =>
  Object.values(BLOG_MIGRATION).some((e) => e.status === "live");
