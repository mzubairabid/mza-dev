import { Metadata } from "next";
import { PAGE_SEO } from "@/lib/seo";
import { ContactFormContent } from "@/components/contact-form";

export const metadata = PAGE_SEO.about;

export default function ContactPage() {
  return <ContactFormContent />;
}