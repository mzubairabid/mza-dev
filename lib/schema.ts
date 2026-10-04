// lib/schema.ts — JSON-LD structured data (Google + AI search engines ke liye)
import { absoluteUrl, profileLinks, site } from "@/lib/site";
import { isFilled } from "@/lib/placeholders";
import type { CaseStudy, FaqItem, Service } from "@/types/content";

const ORG_ID = `${site.url}/#organization`;
const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

const sameAs = profileLinks.map((p) => p.href);

export function personSchema() {
  const a = site.author;
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: a.name,
    alternateName: a.alternateName,
    jobTitle: a.jobTitle,
    image: absoluteUrl(a.image),
    url: absoluteUrl("/about"),
    worksFor: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: a.city,
      addressRegion: a.region,
      addressCountry: a.countryCode,
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Shopify",
      "Shopify Liquid",
      "WordPress",
      "WooCommerce",
      "Technical SEO",
      "Core Web Vitals",
      "Structured data",
    ],
    ...(isFilled(a.education) && { hasCredential: { "@type": "EducationalOccupationalCredential", name: a.education } }),
    sameAs,
  };
}

export function organizationSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/project-images/mza-dev-logo.webp"),
    image: absoluteUrl("/og/home.png"),
    description: site.description,
    email: site.contact.email,
    ...(isFilled(site.contact.whatsappDisplay) && { telephone: site.contact.whatsappDisplay }),
    foundingDate: site.foundingYear,
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.author.city,
      addressRegion: site.author.region,
      addressCountry: site.author.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Layout me har page par: Organization + Person + WebSite */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), personSchema(), websiteSchema()],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: Service) {
  // Schema me USD "starting price" (Google zyada tar US se crawl karta hai)
  const offers = s.packages
    .filter((p) => p.price.USD)
    .map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.bestFor,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.price.USD.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
      },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/${s.slug}`)}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absoluteUrl(`/${s.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: ["PK", "US", "GB"],
    ...(offers.length > 0 && { offers }),
  };
}

export function caseStudySchema(c: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/${c.slug}`)}#work`,
    name: c.h1,
    headline: c.metaTitle,
    description: c.metaDescription,
    url: absoluteUrl(`/${c.slug}`),
    image: absoluteUrl(c.heroImage),
    dateCreated: c.year,
    creator: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    about: c.industry,
    keywords: c.stack.join(", "),
  };
}

export function itemListSchema(name: string, items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.href),
    })),
  };
}
