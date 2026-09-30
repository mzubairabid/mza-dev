// components/sections/ContentSections.tsx — title + text blocks ka grid
import Link from "next/link";
import type { TextBlock } from "@/types/content";

export function ContentSections({
  title,
  intro,
  items,
  columns = 3,
  id,
}: {
  title: string;
  intro?: string;
  items: TextBlock[];
  columns?: 2 | 3;
  id?: string;
}) {
  const grid = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="section" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-site">
        <h2 id={id ? `${id}-title` : undefined} className="h2-section max-w-2xl">
          {title}
        </h2>
        {intro && <p className="lead mt-3">{intro}</p>}
        <div className={`mt-10 grid gap-x-10 gap-y-8 ${grid}`}>
          {items.map((item) => (
            <div key={item.title} className="border-t-2 border-primary/70 pt-4">
              <h3 className="font-sans text-lg font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
              {item.link && (
                <Link href={item.link.href} className="link mt-2 inline-block text-sm font-medium">
                  {item.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
