// lib/blog-posts.tsx
//import 'server-only'
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BLOG_POSTS, BlogPost } from "./blog-data"

export type { BlogPost }
export { BLOG_POSTS }

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getMdxPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug: data.slug || slug,
        title: data.title || "",
        description: data.description || "",
        category: data.category || "General",
        date: data.date || "",
        image: data.image || "/default-blog.webp",
        imageAlt: data.imageAlt || data.title || "",
        content,
        isMdx: true,
        draft: Boolean(data.draft), // Future safety ke liye draft flag
      }
    })
    // 1. 'my-first-post' slug ko permanently hide kare ga
    // 2. Future me jis post ke frontmatter me 'draft: true' ho ga wo bhi hide ho jaye gi
    .filter((post) => post.slug !== "my-first-post" && !post.draft)
}

export function getAllPosts(): BlogPost[] {
  const mdxPosts = getMdxPosts()
  const allPosts = [...BLOG_POSTS, ...mdxPosts]

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const all = getAllPosts()
  return all.find((post) => post.slug === slug)
}

export function getAllCategories(): { name: string; count: number }[] {
  const categoriesMap: Record<string, number> = {}
  const allPosts = getAllPosts()

  allPosts.forEach((post) => {
    categoriesMap[post.category] = (categoriesMap[post.category] || 0) + 1
  })

  return Object.entries(categoriesMap).map(([name, count]) => ({
    name,
    count,
  }))
}