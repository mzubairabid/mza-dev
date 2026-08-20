import { Metadata } from "next";
import { ContactFormContent } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Full-Stack Developer",
  description: "Get in touch with Muhammad Zubair Abid for custom web development, Next.js applications, WordPress solutions, and technical SEO audits.",
  alternates: {
    canonical: 'https://www.mzadev.com/contact', 
  },
};

export default function ContactPage() {
  return <ContactFormContent />;
}