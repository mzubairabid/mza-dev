// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { footerNav, profileLinks, site, whatsappLink } from "@/lib/site";
import { isFilled } from "@/lib/placeholders";

export function Footer() {
  const wa = whatsappLink();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-card/40">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2" aria-label={`${site.name} home`}>
            <Image
              src="/project-images/mza-dev-logo-2026.webp"
              alt=""
              width={48}
              height={39}
              className="h-9 w-auto"
            />
            <span className="font-serif text-xl">{site.name}</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Web development, Shopify, WordPress and technical SEO by {site.author.name}, {site.author.city},{" "}
            {site.author.country}. Building websites since {site.author.startedYear}.
          </p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-primary">
                {site.contact.email}
              </a>
            </li>
            {wa && isFilled(site.contact.whatsappDisplay) && (
              <li>
                <a href={wa} target="_blank" rel="noopener" className="hover:text-primary">
                  WhatsApp: {site.contact.whatsappDisplay}
                </a>
              </li>
            )}
          </ul>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {profileLinks.map((p) => (
              <li key={p.label}>
                <a href={p.href} target="_blank" rel="noopener me" className="text-muted-foreground hover:text-primary">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-sm font-semibold">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-muted-foreground hover:text-primary">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="container-site py-6 text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
