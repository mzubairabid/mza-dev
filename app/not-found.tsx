import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page not found | MZA Dev" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="font-serif text-6xl text-primary">404</p>
        <h1 className="h2-section mt-4">This page doesn&apos;t exist</h1>
        <p className="lead mx-auto mt-3">
          It may have moved. Blog articles now live on the MZA Dev blog.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">Go to homepage</Link>
          <Link href="/services" className="btn btn-outline">See services</Link>
          <a href={site.blogUrl} className="btn btn-outline">Open the blog</a>
        </div>
      </div>
    </section>
  );
}
