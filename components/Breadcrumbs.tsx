// components/Breadcrumbs.tsx
// Page par breadcrumb dikhata hai + Google ke liye BreadcrumbList schema.
// "Home" khud shuru me lag jata hai, aap sirf baaki items dein.
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export type Crumb = { name: string; href: string };

const BASE = site.baseUrl.replace(/\/$/, "");

// MDX frontmatter ki "category" → parent breadcrumb
// e.g. category: services  →  Home › Services › Page
export const SECTION_CRUMBS: Record<string, Crumb> = {
  services: { name: "Services", href: "/services" },
  work: { name: "Work", href: "/work" },
  tools: { name: "Tools", href: "/tools" },
  blog: { name: "Blog", href: "/blog" },
};

const absolute = (href: string) => (href === "/" ? BASE : `${BASE}${href}`);

export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absolute(crumb.href),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`not-prose text-sm text-muted-foreground ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((crumb, i) => {
            const isLast = i === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5 min-w-0">
                {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-60" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground truncate max-w-[60vw] sm:max-w-md">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="rounded-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
