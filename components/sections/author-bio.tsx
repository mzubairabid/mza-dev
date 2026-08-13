import Image from "next/image";
import Link from "next/link";
import { author } from "@/data/author";

export default function AuthorBio() {
  return (
    <div className="mt-12 p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-foreground text-sm">{author.name}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{author.bio}</p>
      </div>
      <Link
        href={author.contactUrl}
        className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0 self-start sm:self-center"
      >
        Get in Touch
      </Link>
    </div>
  );
}