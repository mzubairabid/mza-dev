// next.config.mjs
import { BLOG_ALIASES, BLOG_MIGRATION, blogTarget } from "./lib/blog-migration.mjs";

// ---------------------------------------------------------------------
// Security headers. CSP jaan boojh kar "halki" hai: React compiler aur HTML
// editor tools iframe me user ka code aur unpkg.com scripts chalate hain,
// sakht script-src un ko tor deta. Ye headers clickjacking, MIME sniffing,
// plugin/base-tag hijacking aur form hijacking rokte hain.
// ---------------------------------------------------------------------
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
  },
];

// ---------------------------------------------------------------------
// Blog redirects: sab lib/blog-migration.mjs se banta hai. Wahan status badlo.
// "gone" posts ka 410 proxy.ts deta hai.
// ---------------------------------------------------------------------
function blogRedirects() {
  const out = [];
  const add = (source, destination) => out.push({ source, destination, statusCode: 301 });

  for (const slug of Object.keys(BLOG_MIGRATION)) {
    const target = blogTarget(slug);
    if (target === "GONE") continue;
    const dest = target ?? `/blog/${slug}`; // null = abhi yahin live
    if (target) add(`/blog/${slug}`, dest);
    add(`/${slug}`, dest); // purane root-level post URLs (1 hop)
    add(`/post/${slug}`, dest);
  }

  for (const [alias, real] of Object.entries(BLOG_ALIASES)) {
    const target = blogTarget(real);
    if (target === "GONE") continue;
    add(`/blog/${alias}`, target ?? `/blog/${real}`);
  }

  // Baaqi /blog/*, /post/*, /category/* URLs → WordPress: proxy.ts me
  // (taake "gone" posts ka 410 pehle chale)
  return out;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    // Cloudflare Workers: images seedha CDN se (pehle se WebP aur 150 KB se chhoti).
    // Is se har image Worker request nahi banti aur free plan ki limit bachti hai.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    const r = (source, destination) => ({ source, destination, statusCode: 301 });
    return [
      // Purane URLs — seedha final URL par, 1 hop
      r("/contact-me", "/contact"),
      r("/shopify-developer-e-commerce-funnels", "/shopify-funnels"),
      r("/web-development-service-custom-fast-seo", "/web-development-service"),

      // /services/x aur /service/x → root-level final service URLs
      r("/services/graphic-design", "/graphic-design"),
      r("/service/graphic-design", "/graphic-design"),
      r("/services/shopify-funnels", "/shopify-funnels"),
      r("/service/shopify-funnels", "/shopify-funnels"),
      r("/services/web-development-service", "/web-development-service"),
      r("/service/web-development-service", "/web-development-service"),
      r("/service/web-development", "/web-development-service"),
      r("/services/wordpress-development", "/wordpress-development"),
      r("/service/wordpress-development", "/wordpress-development"),
      r("/services/technical-seo", "/technical-seo"),
      r("/service/technical-seo", "/technical-seo"),

      // Tools
      r("/live-html-css-js-editor-tester", "/tools/live-html-css-js-editor-tester"),
      r("/html-editor", "/tools/live-html-css-js-editor-tester"),
      r("/nursery-calculator", "/tools/nursery-calculator"),
      r("/online-react-compiler-2026", "/tools/online-react-compiler-2026"),
      r("/react-compiler", "/tools/online-react-compiler-2026"),
      r("/tools/schema-generator", "/tools"),

      // Work / portfolio (/work/shopify-store kabhi bana hi nahi tha → /work)
      r("/portfolio", "/work"),
      r("/shopify-store", "/work"),
      r("/portfolio/shopify-store", "/work"),
      r("/work/shopify-store", "/work"),

      // Purane legal pages: zaroori hissa Terms mein shamil kar diya gaya
      r("/disclaimer", "/terms-and-conditions"),
      r("/copyright-policy", "/terms-and-conditions"),
      r("/affiliate-disclosure", "/terms-and-conditions"),

      // Hataya gaya test page
      r("/my-first-page", "/services"),

      ...blogRedirects(),
    ];
  },
};

export default nextConfig;
