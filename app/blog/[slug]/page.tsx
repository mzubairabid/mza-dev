import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Build time par saare 23 posts ko pre-render karne ke liye
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Automatic SEO Meta Tags for Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) return { title: "Post Not Found | MZA Dev" };

  return {
    title: `${post.title} | MZA Dev`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image, alt: post.title }],
      url: `https://mzadev.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

// 3. Single Blog Post Render Page
export default async function SingleBlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground text-sm mb-6">{post.date} - {post.category}</p>
      <div className="prose max-w-none">
        <p>{post.description}</p>
      </div>
    </div>
  );
}