// app/[slug]/page.tsx
// Sirf custom MDX pages (services, work case studies, landing pages).
// Blog posts ab sirf /blog/[slug] par khulte hain.
import { getPostBySlug } from "@/lib/blog-posts";
import { getPageBySlug, getAllPageSlugs } from "@/lib/pages";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { makeMetadata } from "@/lib/seo";
import Breadcrumbs, { SECTION_CRUMBS, type Crumb } from "@/components/Breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

// ---------------------------------------------------------------
// SEO helpers
// ---------------------------------------------------------------
const BRAND = " | MZA Dev";

// "| MZA Dev" sirf ek dafa, aur sirf tab jab 60 characters me fit ho
function seoTitle(title: string) {
  const clean = title.replace(/\s*\|\s*MZA Dev\s*$/i, "").trim();
  return clean.length + BRAND.length <= 60 ? `${clean}${BRAND}` : clean;
}

// Fallback OG images (agar MDX frontmatter me "image" na ho).
// Behtar ye hai ke har .mdx file ke frontmatter me apni hero image likhein:
// image: "/project-images/web-development.webp"
const FALLBACK_OG: Record<string, string> = {
  services: "/project-images/web-development.webp",
  "farah-brand": "/project-images/farah-brand-2026.webp",
};

// MDX frontmatter se koi bhi text field parhna (image, category, breadcrumb)
function field(page: object, key: string): string | undefined {
  const value = (page as Record<string, unknown>)[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function pageImage(page: object, slug: string): string | undefined {
  return field(page, "image") ?? FALLBACK_OG[slug];
}

// Breadcrumb: Home › (Services / Work / Tools) › Page
// Frontmatter me:  category: services   aur (optional)  breadcrumb: Technical SEO
function pageCrumbs(page: object & { title: string }, slug: string): Crumb[] {
  const name =
    field(page, "breadcrumb") ??
    page.title.split(/\s[|–—]\s/)[0].trim(); // "Technical SEO | MZA Dev" → "Technical SEO"

  const category = field(page, "category")?.toLowerCase();
  const parent = category ? SECTION_CRUMBS[category] : undefined;
  const self: Crumb = { name, href: `/${slug}` };

  // "services" page khud Services hai, to "Services › Services" na bane
  return parent && parent.href !== self.href ? [parent, self] : [self];
}

// Development me terminal par batata hai kis page ka title/description lamba hai
function checkLengths(slug: string, title: string, description: string) {
  if (process.env.NODE_ENV === "production") return;
  if (title.length > 60) console.warn(`⚠️ [SEO] /${slug} title ${title.length} chars (max 60)`);
  if (!description) console.warn(`⚠️ [SEO] /${slug} description khali hai`);
  else if (description.length > 155)
    console.warn(`⚠️ [SEO] /${slug} description ${description.length} chars (max 155)`);
}

// ---------------------------------------------------------------
// 1. Static pages build time par
// ---------------------------------------------------------------
export async function generateStaticParams() {
  return getAllPageSlugs().map((page) => ({ slug: page.slug }));
}

// ---------------------------------------------------------------
// 2. Metadata
// ---------------------------------------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  const title = seoTitle(page.title);
  const description = page.description || "";
  checkLengths(slug, title, description);

  return makeMetadata({
    title,
    description,
    path: `/${page.slug}`,
    image: pageImage(page, page.slug),
  });
}

// ---------------------------------------------------------------
// 3. Render
// ---------------------------------------------------------------
export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;

  // Blog post ka slug root par khola gaya → asli URL /blog/slug par bhejo (308)
  if (getPostBySlug(slug)) {
    permanentRedirect(`/blog/${slug}`);
  }

  const page = getPageBySlug(slug);
  if (!page) notFound();

  return (
    <main className="container mx-auto px-4 py-6 max-w-6xl">
      <Breadcrumbs items={pageCrumbs(page, page.slug)} className="mb-4" />
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote
          source={page.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </main>
  );
}
