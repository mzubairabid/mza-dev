/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "radix-ui"],
  },

  async redirects() {
    return [
      // ====================================================
      // 1. UPDATED OLD SITE SPECIFIC URLS (gadgetcrunchie.com -> mzadev.com)
      // ====================================================
      {
        source: "/contact-me",
        destination: "/contact",
        permanent: true, // 301 Permanent Redirect
      },
      {
        source: "/shopify-developer-e-commerce-funnels",
        destination: "/services/shopify-funnels",
        permanent: true,
      },
      {
        source: "/web-development-service-custom-fast-seo",
        destination: "/services/web-development-service",
        permanent: true,
      },

      // ====================================================
      // 2. GENERIC WILDCARD REDIRECTS
      // ====================================================
      {
        source: "/post/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/blog",
        permanent: true,
      },

      // ====================================================
      // 3. SERVICES & SUB-PAGES
      // ====================================================
      {
        source: "/service/graphic-design",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/service/shopify-funnels",
        destination: "/services/shopify-funnels",
        permanent: true,
      },
      {
        source: "/shopify-funnels",
        destination: "/services/shopify-funnels",
        permanent: true,
      },
      {
        source: "/service/web-development",
        destination: "/services/web-development-service",
        permanent: true,
      },

      // ====================================================
      // 4. TOOLS & SUB-PAGES
      // ====================================================
      {
        source: "/live-html-css-js-editor-tester",
        destination: "/tools/live-html-css-js-editor-tester",
        permanent: true,
      },
      {
        source: "/html-editor",
        destination: "/tools/live-html-css-js-editor-tester",
        permanent: true,
      },
      {
        source: "/nursery-calculator",
        destination: "/tools/nursery-calculator",
        permanent: true,
      },
      {
        source: "/online-react-compiler-2026",
        destination: "/tools/online-react-compiler-2026",
        permanent: true,
      },
      {
        source: "/react-compiler",
        destination: "/tools/online-react-compiler-2026",
        permanent: true,
      },

      // ====================================================
      // 5. WORK & PORTFOLIO SUB-PAGES
      // ====================================================
      {
        source: "/shopify-store",
        destination: "/work/shopify-store",
        permanent: true,
      },
      {
        source: "/portfolio/shopify-store",
        destination: "/work/shopify-store",
        permanent: true,
      },

      // ====================================================
      // 6. ALL 23 BLOG POSTS
      // ====================================================
      {
        source: "/best-online-react-compiler-2026",
        destination: "/blog/best-online-react-compiler-2026",
        permanent: true,
      },
      {
        source: "/modern-css-layouts-for-websites",
        destination: "/blog/modern-css-layouts-for-websites",
        permanent: true,
      },
      {
        source: "/core-web-vitals-in-2026",
        destination: "/blog/core-web-vitals-in-2026",
        permanent: true,
      },
      {
        source: "/add-google-adsense-to-wordpress",
        destination: "/blog/add-google-adsense-to-wordpress",
        permanent: true,
      },
      {
        source: "/apis-in-web-development",
        destination: "/blog/apis-in-web-development",
        permanent: true,
      },
      {
        source: "/how-to-fix-pagespeed-unable-to-resolve-url",
        destination: "/blog/how-to-fix-pagespeed-unable-to-resolve-url",
        permanent: true,
      },
      {
        source: "/fix-inp-issue-on-wordpress",
        destination: "/blog/fix-inp-issue-on-wordpress",
        permanent: true,
      },
      {
        source: "/the-blueprint-respiro-premium-shopify-design",
        destination: "/blog/the-blueprint-respiro-premium-shopify-design",
        permanent: true,
      },
      {
        source: "/design-website-for-beginners",
        destination: "/blog/design-website-for-beginners",
        permanent: true,
      },
      {
        source: "/website-redesign-2026",
        destination: "/blog/website-redesign-2026",
        permanent: true,
      },
      {
        source: "/custom-web-development-for-small-businesses",
        destination: "/blog/custom-web-development-for-small-businesses",
        permanent: true,
      },
      {
        source: "/on-page-seo-checklist-2026",
        destination: "/blog/on-page-seo-checklist-2026",
        permanent: true,
      },
      {
        source: "/web-development-vs-website-builders",
        destination: "/blog/web-development-vs-website-builders",
        permanent: true,
      },
      {
        source: "/increase-website-traffic-without-ads-2026",
        destination: "/blog/increase-website-traffic-without-ads-2026",
        permanent: true,
      },
      {
        source: "/build-a-fast-seo-friendly-website",
        destination: "/blog/build-a-fast-seo-friendly-website",
        permanent: true,
      },
      {
        source: "/dark-mode-vs-light-mode-ux",
        destination: "/blog/dark-mode-vs-light-mode-ux",
        permanent: true,
      },
      {
        source: "/professional-website-redesign-2026",
        destination: "/blog/professional-website-redesign-2026",
        permanent: true,
      },
      {
        source: "/best-seo-strategies-2026",
        destination: "/blog/best-seo-strategies-2026",
        permanent: true,
      },
      {
        source: "/top-web-development-frameworks",
        destination: "/blog/top-web-development-frameworks",
        permanent: true,
      },
      {
        source: "/top-web-design-trends-for-2026",
        destination: "/blog/top-web-design-trends-for-2026",
        permanent: true,
      },
      {
        source: "/website-design-and-development-services",
        destination: "/blog/website-design-and-development-services",
        permanent: true,
      },
      {
        source: "/google-seo-update-2026",
        destination: "/blog/google-seo-update-2026",
        permanent: true,
      },
      {
        source: "/build-agentic-web-experiences",
        destination: "/blog/build-agentic-web-experiences",
        permanent: true,
      },
      {
        source: '/blog/add-google-adsense-wordpress-without-plugins',
        destination: '/blog/add-google-adsense-to-wordpress',
        permanent: true,
      },
      {
        source: '/blog/role-of-apis-in-web-development-shopify-case-study',
        destination: '/blog/apis-in-web-development',
        permanent: true,
      },
      {
        source: '/tools/schema-generator',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/tools/core-web-vitals',
        destination: '/tools/core-web-vitals-in-2026',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
