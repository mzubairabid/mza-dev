// app/contact/page.tsx — Text: content/contact.ts, contact details: lib/site.ts
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/ui/Button";
import { MailIcon } from "@/components/ui/Icons";
import { contact } from "@/content/contact";
import { isFilled } from "@/lib/placeholders";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: contact.metaTitle,
  description: contact.metaDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        title={contact.h1}
        intro={contact.intro}
        actions={<WhatsAppButton text="Hi Zubair, I'd like a quote for: " />}
      />
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div id="contact-form">
            <ContactForm />
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-sans text-lg font-semibold tracking-normal">Direct contact</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                    <MailIcon className="size-5 text-muted-foreground" />
                    {site.contact.email}
                  </a>
                </li>
                {isFilled(site.contact.whatsappDisplay) && <li>WhatsApp: {site.contact.whatsappDisplay}</li>}
                <li className="text-muted-foreground">Replies {site.contact.responseTime}</li>
                <li className="text-muted-foreground">{site.contact.hours}</li>
                <li className="text-muted-foreground">
                  {site.author.city}, {site.author.country}. Working with clients worldwide.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-sans text-lg font-semibold tracking-normal">Hire through a platform</h2>
              <p className="mt-2 text-muted-foreground">{contact.alsoOn}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                <li>
                  <a href={site.social.upwork} target="_blank" rel="noopener me" className="btn btn-outline">
                    Upwork
                  </a>
                </li>
                <li>
                  <a href={site.social.fiverr} target="_blank" rel="noopener me" className="btn btn-outline">
                    Fiverr
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
