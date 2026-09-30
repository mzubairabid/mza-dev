// app/layout.tsx — har page ka dhancha: fonts, theme, header/footer, schema, GA4
import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { currencyScript, themeScript } from "@/lib/head-scripts";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/sections/JsonLd";
import { isFilled } from "@/lib/placeholders";
import { siteGraph } from "@/lib/schema";
import { site } from "@/lib/site";

// Self-hosted Inter (Google Fonts se request nahi jati = tez aur privacy-safe)
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Har page apna title/description/canonical lib/seo.ts se deta hai.
  // Yahan canonical NAHI (warna har page homepage ka canonical le leta).
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author.name, url: `${site.url}/about` }],
  creator: site.author.name,
  publisher: site.name,
  icons: { icon: "/favicon.webp", apple: "/favicon.webp" },
  formatDetection: { telephone: false },
  verification: {
    google: site.tracking.googleVerification,
    ...(isFilled(site.tracking.bingVerification) && {
      other: { "msvalidate.01": site.tracking.bingVerification },
    }),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga = site.tracking.ga4;
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript + currencyScript }} />
        <JsonLd data={siteGraph()} />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />

        {isFilled(ga) && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="lazyOnload" />
            <Script id="ga4" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
