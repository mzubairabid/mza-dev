import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Muhammad Zubair Abid - Full-Stack Developer & SEO Specialist",
  description: "Portfolio and technical insights by MZA.",

  // 1. Google Search Console Verification Code
  verification: {
    google: "MdNjiJrq6RgpQg24D5pfbwXpR1qP0RRSRaABJOVUS60", // Yahan GSC ka HTML tag code daalein
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* 2. Google Analytics (GA4) Script 1 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y614W1FS00"
          strategy="afterInteractive"
        />

        {/* 3. Google Analytics (GA4) Inline Config (TypeScript Safe) */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y614W1FS00');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}