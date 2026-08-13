import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { getAllPosts } from "@/lib/blog-posts";
import { FadeIn } from "@/components/animations/fade-in";

function formatBlogDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const metadata = {
  title: "Blog & Insights | MZA Dev",
  description: "Web development, SEO, React, and tech guides.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams?.category;

  const allPosts = getAllPosts();

  // Sidebar category selection ke mutabiq posts filter karein
  const posts = selectedCategory
    ? allPosts.filter(
        (post) =>
          post.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : allPosts;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {selectedCategory ? `${selectedCategory} Articles` : "Blog & Articles"}
          </h1>
          </FadeIn>
          <FadeIn>
          <p className="text-muted-foreground text-base">
            {selectedCategory
              ? `Showing all posts under "${selectedCategory}" category.`
              : "Latest tutorials on web development, SEO strategies, and modern frontend stack."}
          </p>
          </FadeIn>
        </div>

        {selectedCategory && (
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-medium text-primary hover:underline"
          >
            ← View All Articles
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Blog Cards */}
        <main className="lg:col-span-8">
          <FadeIn>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-lg border bg-card text-card-foreground overflow-hidden transition-all hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-4 space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="rounded px-2 py-0.5 font-medium bg-secondary text-secondary-foreground">
                          {post.category}
                        </span>
                        <span>{formatBlogDate(post.date)}</span>
                      </div>

                      <h2 className="text-base font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-xs text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-xl border border-dashed p-12 text-center">
              <h3 className="text-lg font-semibold mb-1">No articles found</h3>
              <p className="text-xs text-muted-foreground mb-4">
                No posts found under "{selectedCategory}".
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
              >
                Clear Filter
              </Link>
            </div>
          )}
          </FadeIn>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}