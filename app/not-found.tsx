import Link from "next/link";
import type { Metadata } from "next";

// Google indexing se prevent karne ke liye metadata
export const metadata: Metadata = {
  title: "404 - Page Not Found | MZA Dev",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
        The page, tool, or blog post you are looking for doesn't exist or has been moved.
      </p>
      
      {/* Homepage and Blog Dual Navigation */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium rounded-lg hover:opacity-90 transition"
        >
          Go to Homepage
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium rounded-lg hover:opacity-90 transition"
        >
          Browse Blog
        </Link>
      </div>
    </div>
  );
}