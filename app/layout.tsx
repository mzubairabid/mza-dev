// app/layout.tsx
import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/BackToTop";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Final domain: WWW. Har relative URL (canonical, OG image) isi se banega.
  metadataBase: new URL("https://www.mzadev.com"),

  title: "Full-Stack Developer & SEO Specialist | MZA Dev",
  description:
    "Full-stack web developer and technical SEO specialist engineering fast, high-performing web applications, Next.js solutions, and digital growth.",

  // NOTE: yahan alternates.canonical NAHI lagana. Root layout ka canonical
  // har us page par lag jata hai jis ne apna canonical set nahi kiya,
  // aur sab pages homepage ki copy ban jate hain. Canonical har page.tsx me.

  icons: {
    icon: "/favicon.webp",
  },

  openGraph: {
    title: "Full-Stack Developer & SEO Specialist | MZA Dev",
    description:
      "Full-stack web developer and technical SEO specialist engineering fast, high-performing web applications, Next.js solutions, and digital growth.",
    url: "/",
    siteName: "MZA Dev",
    type: "website",
    images: [
      {
        url: "/project-images/mza-dev-og-logo.png",
        width: 1200,
        height: 630,
        alt: "MZA Dev — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer & SEO Specialist | MZA Dev",
    description:
      "Full-stack web developer and technical SEO specialist engineering fast, high-performing web applications, Next.js solutions, and digital growth.",
    images: ["/project-images/mza-dev-og-logo.png"],
  },

  verification: {
    google: "MdNjiJrq6RgpQg24D5pfbwXpR1qP0RRSRaABJOVUS60",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${mono.variable} min-h-screen flex flex-col justify-between bg-background text-foreground antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W9DXZQFC4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9DXZQFC4F');
          `}
        </Script>
      </body>
    </html>
  );
}
