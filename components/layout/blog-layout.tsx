import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import AuthorBio from "@/components/sections/author-bio";
import { Sidebar } from "@/components/Sidebar";
import type { BlogPost } from "@/lib/blog-posts";

// Date Formatting Helper Function
function formatBlogDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export interface BlogLayoutProps {
  post: BlogPost & { readTime?: string };
  children: React.ReactNode;
  heroImageAlt?: string;
  /** Override the formatted date shown in the header */
  dateLabel?: string;
  /** Optional JSON-LD schema injected in the page head area */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function BlogLayout({
  post,
  children,
  heroImageAlt,
  dateLabel,
  schema,
}: BlogLayoutProps) {
  const displayDate = dateLabel ?? formatBlogDate(post.date);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="w-full min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </div>

          {/* Main Layout Container */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            {/* Main Content Area */}
            <article className="flex-1 w-full min-w-0">
              {/* Header Info */}
              <header className="mb-8">
                {post.category && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                )}

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{displayDate}</time>
                  </div>

                  {post.readTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
              </header>

              {/* Hero Image */}
              {post.image && (
                <div className="relative w-full aspect-video mb-10 overflow-hidden rounded-2xl border bg-muted">
                  <Image
                    src={post.image}
                    alt={heroImageAlt || post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                {children}
              </div>

              {/* Author Section */}
              <div className="pt-8 border-t border-border">
                <AuthorBio />
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
              <Sidebar />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}