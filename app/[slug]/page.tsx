// app/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";
import { getPageBySlug, getAllPageSlugs } from "@/lib/pages";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

const rehypeOptions: Options = {
  theme: "github-dark",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

// 1. Static Pre-rendering (SSG) for All Posts & Pages
export async function generateStaticParams() {
  const posts = getAllPosts();
  const pages = getAllPageSlugs();

  const postParams = posts.map((post) => ({ slug: post.slug }));
  const pageParams = pages.map((page) => ({ slug: page.slug }));

  return [...postParams, ...pageParams];
}

// 2. Dynamic Metadata (WordPress-style Head Injection)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Blog Post Metadata Check
  const post = getPostBySlug(slug);
  if (post) {
    return {
      title: `${post.title} | MZA Dev`,
      description: post.description || "",
      alternates: {
        canonical: `https://mzadev.com/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description || "",
        images: post.image ? [{ url: post.image, alt: post.imageAlt || post.title }] : [],
        url: `https://mzadev.com/blog/${post.slug}`,
        type: "article",
      },
    };
  }

  // Custom MDX Page Metadata Check
  const page = getPageBySlug(slug);
  if (page) {
    // 🟢 Saare MDX pages ke liye dedicated OG images ki mapping dictionary
    const customOgImages: Record<string, string> = {
      "services": "/project-images/services-og.webp",
      "web-development-service": "/project-images/services-og.webp",
      "wordpress-development": "/project-images/services-og.webp",
      "technical-seo": "/project-images/services-og.webp",
      "shopify-funnels": "/project-images/services-og.webp",
      "german-desi-shop-zellingen-2025": "/project-images/services-og.webp",
      "karachi-mart-2026": "/project-images/services-og.webp",
      "farah-brand": "/project-images/farah-brand-2026.webp",
    };

    // Agar mapping mein image mil jaye toh woh lo, warna default logo
    const ogImage = customOgImages[page.slug] || "/mza-dev-og-logo.png";

    return {
      title: `${page.title} | MZA Dev`,
      description: page.description || "",
      alternates: {
        canonical: `https://mzadev.com/${page.slug}`,
      },
      openGraph: {
        title: page.title,
        description: page.description || "",
        url: `https://mzadev.com/${page.slug}`,
        images: [
          {
            url: `https://mzadev.com${ogImage}`,
            width: 1200,
            height: 630,
            alt: page.title,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: page.title,
        description: page.description || "",
        images: [`https://mzadev.com${ogImage}`],
      },
    };
  }

  return { title: "Not Found | MZA Dev" };
}

// 3. Render Engine
export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;

  // -------------------------------------------------------------
  // ROUTE OPTION A: Blog Post Render (With Sidebar & Metadata)
  // -------------------------------------------------------------
  const post = getPostBySlug(slug);

  if (post) {
    const isMdxPost = "isMdx" in post && post.isMdx;

    const jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      description: post.description || '',
    });

    return (
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <article className="flex-1 min-w-0 prose dark:prose-invert max-w-none">
            <header className="mb-8 border-b pb-6 not-prose">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                <span>{post.category}</span>
                {post.date && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <time className="text-muted-foreground lowercase font-normal">{post.date}</time>
                  </>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
                {post.title}
              </h1>

              {post.description && (
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  {post.description}
                </p>
              )}

              {post.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border shadow-sm my-6">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </header>

            {isMdxPost ? (
              <MDXRemote 
                source={post?.content || ''} 
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                  },
                }}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            )}
          </article>

          <aside className="w-full lg:w-80 shrink-0">
            <Sidebar />
          </aside>
        </div>
      </main>
    );
  }

  // -------------------------------------------------------------
  // ROUTE OPTION B: Dynamic Custom Page Render (Service Pages, Landings, etc.)
  // -------------------------------------------------------------
  const page = getPageBySlug(slug);

  if (page) {
    return (
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <article className="prose dark:prose-invert max-w-none">
          {/* 
            Extra top <header> block yahan se remove kar diya gaya hai.
            Ab MDX file ka custom Hero Section direct render hoga bina kisi extra title/slug text ke.
          */}
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

  // -------------------------------------------------------------
  // 404 Fallback
  // -------------------------------------------------------------
  notFound();
}