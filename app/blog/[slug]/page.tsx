// app/blog/[slug]/page.tsx
// Har blog post ab sirf yahan khulta hai: https://www.mzadev.com/blog/<slug>
import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { makeMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE = site.baseUrl.replace(/\/$/, "");
const BRAND = " | MZA Dev";
const EXCLUDED_SLUGS = ["my-first-post"];

const rehypeOptions: Options = {
  theme: "github-dark",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

function seoTitle(title: string) {
  const clean = title.replace(/\s*\|\s*MZA Dev\s*$/i, "").trim();
  return clean.length + BRAND.length <= 60 ? `${clean}${BRAND}` : clean;
}

function checkLengths(slug: string, title: string, description: string) {
  if (process.env.NODE_ENV === "production") return;
  if (title.length > 60) console.warn(`⚠️ [SEO] /blog/${slug} title ${title.length} chars (max 60)`);
  if (!description) console.warn(`⚠️ [SEO] /blog/${slug} description khali hai`);
  else if (description.length > 155)
    console.warn(`⚠️ [SEO] /blog/${slug} description ${description.length} chars (max 155)`);
}

// 1. Saare posts build time par ban jayen
export async function generateStaticParams() {
  return getAllPosts()
    .filter((post) => !EXCLUDED_SLUGS.includes(post.slug))
    .map((post) => ({ slug: post.slug }));
}

// 2. Metadata (canonical, OG, Twitter — sab www)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = seoTitle(post.title);
  const description = post.description || "";
  checkLengths(slug, title, description);

  return makeMetadata({
    title,
    description,
    path: `/blog/${post.slug}`,
    image: post.image || undefined, // featured image hi OG image banegi
    type: "article",
    publishedTime: post.date,
  });
}

// 3. Render
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || EXCLUDED_SLUGS.includes(slug)) notFound();

  const isMdxPost = "isMdx" in post && post.isMdx;
  const url = `${BASE}/blog/${post.slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http") ? post.image : `${BASE}${post.image}`
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || "",
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(imageUrl && { image: [imageUrl] }),
    author: {
      "@type": "Person",
      name: "Muhammad Zubair Abid",
      url: `${BASE}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "MZA Dev",
      url: BASE,
    },
  };

  return (
    <main className="container mx-auto px-4 py-10 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <article className="flex-1 min-w-0 prose dark:prose-invert max-w-none">
          <header className="mb-8 border-b pb-6 not-prose">
            <Breadcrumbs
              className="mb-4"
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              <span>{post.category}</span>
              {post.date && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <time dateTime={post.date} className="text-muted-foreground lowercase font-normal">
                    {post.date}
                  </time>
                </>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-base md:text-lg text-muted-foreground mb-6">{post.description}</p>
            )}

            {post.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border shadow-sm my-6">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {isMdxPost ? (
            <MDXRemote
              source={post.content || ""}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                },
              }}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          )}
        </article>

        <aside className="w-full lg:w-80 shrink-0">
          <Sidebar />
        </aside>
      </div>
    </main>
  );
}
