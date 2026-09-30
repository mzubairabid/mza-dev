# MZA Dev v2 — kya badla aur deploy kaise karna hai

## Deploy karne ka tareeqa (zaroor isi tarah)
1. Purane project folder ka backup lo.
2. Folder me `.git` ke ilawa SAB kuch delete karo (Windows par `footer.tsx` / `Footer.tsx` jaise
   naam takrate hain, is liye upar copy mat karo, saaf folder me rakho).
3. Zip ka content folder me extract karo → `npm install` → `npm run build` (pass hona chahiye).
4. Vercel → Settings → Environment Variables:
   - `RESEND_API_KEY` (zaroori, warna form "not configured" error dega)
   - optional: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
   - optional (spam se bachao, recommended): `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`
     (Cloudflare dashboard → Turnstile → free widget). Turnstile on hone par client ko auto-reply email bhi jati hai.
5. `git add -A && git commit -m "v2 rebuild" && git push` → Vercel deploy.
6. Deploy ke baad: Search Console me sitemap dobara submit karo, aur ye URLs "URL Inspection" se check karo:
   `/`, `/shopify-funnels`, `/web-development-service`, `/respiro-shopify-store`.
7. PageSpeed Insights (mobile) home + 2 service pages par chalao.

## Roz ka kaam kahan hota hai
| Kaam | File |
|---|---|
| Naam, WhatsApp, email, profiles, GA4, menu, footer | `lib/site.ts` |
| Service page ka text, packages, prices, FAQs | `content/services.ts` |
| Case study add/edit | `content/case-studies.ts` (+ image `public/project-images/`) |
| Home / About / Contact / Tools text | `content/home.ts`, `about.ts`, `contact.ts`, `tools.ts` |
| Blog post WordPress par shift hui | `lib/blog-migration.mjs` me us post ka status `"migrated"` |
| Rang, fonts, buttons | `app/globals.css` |
| Kaunse placeholders khali hain | `npm run check:placeholders` |

`[...]` wali value site par nahi dikhti (na toota link, na "[PRICE]" jaisa text).

## Prices (currency visitor ke mulk se)
Pakistan = PKR, UK = GBP, baaqi sab = USD. `proxy.ts` Vercel ke country header se cookie lagata hai,
visitor khud bhi "Show prices in" se badal sakta hai. Page static rehta hai (speed par asar nahi).
Graphic design ki prices khali hain → "Custom quote".

## Blog migration
`lib/blog-migration.mjs` = control panel. Har post: `live` / `migrated` / `redirect` / `gone`.
- `migrated` tabhi karo jab `blog.mzadev.com/<same-slug>` khul raha ho (WP Permalinks = "Post name").
- Saari posts migrate ho jayen → `app/blog/`, `components/legacy-blog/`, `lib/legacy-blog/` delete kar do.
  Redirects khud poore `/blog` ko WordPress par bhej denge.

## Nayi files
- `lib/`: site.ts, seo.ts, schema.ts, og.tsx, placeholders.ts, head-scripts.ts, blog-migration.mjs (+ .d.mts)
- `content/`: services.ts, case-studies.ts, home.ts, about.ts, contact.ts, tools.ts, legal.ts, shared.ts
- `types/content.ts`
- `components/layout/`: Header, MobileMenu, Footer, ThemeToggle, ScrollToTop, WhatsAppFloat
- `components/sections/`: PageHero, ContentSections, FAQ, CTABand, Breadcrumbs, ServiceGrid, CaseStudyGrid,
  ProcessSteps, PricingTable, PriceTag, CurrencySwitch, JsonLd
- `components/templates/`: ServicePage, CaseStudyPage, ToolPage
- `components/ui/`: Button, Field, Icons, FadeIn
- `components/contact/ContactForm.tsx`
- `app/[slug]/` (saari services + case studies), `app/services/`, har route ki `opengraph-image.tsx`
- `proxy.ts` (410 + currency), `scripts/check-placeholders.mjs`, `_archive/` (purane client screenshots, deploy nahi hote)

## Replace hui files
`app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/about|contact|work|tools/*`, `app/api/contact/route.ts`,
`app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts`, `app/not-found.tsx`, legal pages (text
`components/legal/` me shift), `next.config.mjs`, `package.json`, blog index + 23 posts (sirf metadata, canonical, `<main>`).
Tools (`components/tools/*`): sirf imports badle + FAQ schema; tool logic nahi chheda.

## Delete hui files
MDX system (`content/pages`, `content/blog`, `[slug]` MDX renderer, `mdx-components`), `components/projects/*`
(16 files → aik template), `config/`, `data/`, purane header/footer/sections, ParticlesBackground,
framer-motion FadeIn, 4 unused shadcn/ui files, `components.json`, `sections.zip`, `scripts/*` (Indexing API
script bhi), 2 hero videos (5.8 MB), ~60 unused images/icons, `my-first-page`, `/blog/[slug]` (dead route).
Packages hataye: framer-motion, motion, googleapis, gray-matter, next-mdx-remote, @next/mdx, shiki, bright,
rehype-pretty-code, remark-gfm, next-themes, radix-ui, shadcn, clsx, tailwind-merge, cva, tw-animate-css,
xml2js, @phosphor-icons/react, @tailwindcss/typography, react-doctor.

## Pehle se mojood masla (is rebuild me fix nahi)
`npm run lint` crash hota hai: eslint 10 aur eslint-plugin-react ka version mismatch. Build aur `tsc` pass hain.
