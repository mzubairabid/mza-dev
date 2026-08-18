// lib/pages.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export type PageData = {
  slug: string;
  title: string;
  description?: string;
  content: string;
};

export function getPageBySlug(slug: string): PageData | null {
  try {
    const fullPath = path.join(pagesDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllPageSlugs() {
  if (!fs.existsSync(pagesDirectory)) return [];
  const filenames = fs.readdirSync(pagesDirectory);
  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}