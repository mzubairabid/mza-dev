// components/layout/Header.tsx — desktop menu (CSS dropdown, JS nahi) + mobile menu
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { mainNav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <Image
            src="/project-images/mza-dev-logo-2026.webp"
            alt=""
            width={48}
            height={39}
            priority
            className="h-9 w-auto"
          />
          <span className="font-serif text-xl">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener" className="rounded-md px-3 py-2 text-[0.9375rem] font-medium hover:bg-accent hover:text-primary">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.9375rem] font-medium hover:bg-accent hover:text-primary">
                    {item.label}
                    {item.children && <ChevronDownIcon className="size-4 opacity-60" />}
                  </Link>
                )}
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="card w-72 p-2 shadow-lg">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-md px-3 py-2.5 hover:bg-accent">
                            <span className="block text-sm font-semibold">{c.label}</span>
                            {c.description && <span className="block text-xs text-muted-foreground">{c.description}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary ml-2 hidden !min-h-10 !px-4 lg:inline-flex">
            Get a quote
          </Link>
          <MobileMenu items={mainNav} />
        </div>
      </div>
    </header>
  );
}
