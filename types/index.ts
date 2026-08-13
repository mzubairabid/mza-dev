// types/index.ts
export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  content: any; // Sanity Portable Text
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  description: string;
  tags: string[];
}