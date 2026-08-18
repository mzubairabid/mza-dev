// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { getAllPosts, BlogPost } from "@/lib/blog-posts";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts: BlogPost[] = getAllPosts();

  // Dynamic category & counts calculation
  const categoryCounts = allPosts.reduce<Record<string, number>>((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  }));

  // Filtering posts based on active category
  const filteredPosts = category
    ? allPosts.filter(
        (post) => post.category?.toLowerCase() === category.toLowerCase()
      )
    : allPosts;

  return (
    <div className="w-full min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          
          {/* Main Content Area */}
          <main className="flex-1 w-full min-w-0">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
              Blog
            </h1>

            {/* Categories Badges with Counts */}
            <div className="flex flex-wrap gap-2 mb-8">
              {/* All Posts Badge */}
              <Link
                href="/blog"
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !category
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All ({allPosts.length})
              </Link>

              {/* Dynamic Category Badges */}
              {categories.map((cat) => {
                const isActive =
                  category?.toLowerCase() === cat.name.toLowerCase();
                return (
                  <Link
                    key={cat.name}
                    href={`/blog?category=${encodeURIComponent(cat.name)}`}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </Link>
                );
              })}
            </div>

            {/* Blog Cards Grid */}
            {filteredPosts.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border bg-card text-muted-foreground">
                Is category mein abhi koi post nahi hai.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post: BlogPost) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="group border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all flex flex-col bg-card"
                  >
                    {/* Thumbnail Image */}
                    {post.image && (
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        {post.category && (
                          <span className="font-medium text-primary">
                            {post.category}
                          </span>
                        )}
                        {post.category && post.date && <span>•</span>}
                        {post.date && <span>{post.date}</span>}
                      </div>

                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2 text-card-foreground">
                        {post.title}
                      </h2>

                      {post.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
            <Sidebar />
          </aside>

        </div>
      </div>
    </div>
  );
}