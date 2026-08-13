import "@/app/globals.css"; // Apni CSS file ka exact path check kar lein
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "ByteScript MZA",
  description: "Web Development Portfolio & Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col justify-between bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}