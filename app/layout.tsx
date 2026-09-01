import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google"; // Next.js Optimized Fonts

// 1. Google Fonts ko directly inhi variables se attach karein
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // CSS variable name
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // CSS variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full-Stack Developer & SEO Specialist | MZA Dev",
  description: "Full-stack web developer and technical SEO specialist engineering fast, high-performing web applications, Next.js solutions, and digital growth.",
  metadataBase: new URL("https://mzadev.com"),
  icons: {
    icon: "/favicon.webp", // 👈 WebP file path from public folder
  },

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
          src="https://www.googletagmanager.com/gtag/js?id=G-W9DXZQFC4F"
          strategy="lazyOnload"
        />

        {/* 3. Google Analytics (GA4) Inline Config (TypeScript Safe) */}
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W9DXZQFC4F');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} min-h-screen flex flex-col justify-between bg-background text-foreground antialiased`} suppressHydrationWarning={true}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
