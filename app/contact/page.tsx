import { Metadata } from "next";
import { ContactFormContent } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact M Zubair Abid | Full-Stack Developer & Technical SEO Specialist",
  description: "Get in touch with Muhammad Zubair Abid for custom web development, Next.js applications, WordPress solutions, and technical SEO audits.",
};

export default function ContactPage() {
  return <ContactFormContent />;
}