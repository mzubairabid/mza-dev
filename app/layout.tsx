import "@/app/globals.css"; // Apni CSS file ka exact path check kar lein
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Muhammad Zubair Abid - Full-Stack Developer & SEO Specialist",
  description: "Portfolio and technical insights by MZA.",
  
  // 1. Google Search Console Verification Tag
  verification: {
    google: "MdNjiJrq6RgpQg24D5pfbwXpR1qP0RRSRaABJOVUS60", // Example: "a1b2c3d4e5f6g7h8..."
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
        {/* 2. Google Analytics (GA4) Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
