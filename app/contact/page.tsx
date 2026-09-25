import { Metadata } from "next";
import { PAGE_SEO } from "@/lib/seo";
import { ContactFormContent } from "@/components/contact-form";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = PAGE_SEO.contact;

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-6 max-w-6xl">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      </div>
      <ContactFormContent />
    </>
  );
}