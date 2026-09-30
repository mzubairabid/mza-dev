// proxy.ts (Next.js 16 me middleware ka naya naam)
// 1) "gone" blog posts → 410 Gone (lib/blog-migration.mjs)
// 2) Baaqi /blog, /blog/*, /post/*, /category/* → 301 → blog.mzadev.com
// 3) Visitor ke mulk se price currency ki cookie: PK = PKR, GB = GBP, baaqi = USD
import { NextResponse, type NextRequest } from "next/server";
import { BLOG_ALIASES, BLOG_DOMAIN, BLOG_MIGRATION } from "@/lib/blog-migration.mjs";

const GONE = new Set<string>();
for (const [slug, e] of Object.entries(BLOG_MIGRATION)) {
  if (e.status === "gone") ["/blog/", "/", "/post/"].forEach((p) => GONE.add(`${p}${slug}`));
}
for (const [alias, real] of Object.entries(BLOG_ALIASES)) {
  if (BLOG_MIGRATION[real]?.status === "gone") ["/blog/", "/"].forEach((p) => GONE.add(`${p}${alias}`));
}

const goneHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>This article has been removed | MZA Dev</title></head><body style="font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1.25rem;line-height:1.6"><h1>This article has been removed</h1><p>It is no longer available. You can read current articles on the <a href="${BLOG_DOMAIN}">MZA Dev blog</a> or see the <a href="/services">services</a>.</p><p><a href="/">Go to the homepage</a></p></body></html>`;

const CURRENCY: Record<string, string> = { PK: "PKR", GB: "GBP" };

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/";

  if (GONE.has(path)) {
    return new NextResponse(goneHtml, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
    });
  }

  const m = path.match(/^\/(blog|post|category)(\/.*)?$/);
  if (m) {
    const rest = m[2] ?? "";
    const dest = m[1] === "category" ? `${BLOG_DOMAIN}/category${rest}/` : `${BLOG_DOMAIN}${rest}${rest ? "/" : ""}`;
    return NextResponse.redirect(dest, 301);
  }

  const res = NextResponse.next();
  if (!req.cookies.get("cur")) {
    const country = req.headers.get("x-vercel-ip-country") ?? "";
    res.cookies.set("cur", CURRENCY[country] ?? "USD", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  }
  return res;
}

export const config = {
  // Static files, images aur API par proxy nahi chalta
  matcher: ["/((?!_next/|api/|favicon|project-images/|icons/|.*\\.[a-z0-9]+$).*)"],
};
