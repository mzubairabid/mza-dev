// components/sections/CTABand.tsx — page ke end par contact CTA
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { ctaDefaults } from "@/content/shared";

export function CTABand({
  title = ctaDefaults.title,
  body = ctaDefaults.body,
  whatsappText,
}: {
  title?: string;
  body?: string;
  whatsappText?: string;
}) {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <h2 className="h2-section max-w-2xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-90">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="outline" className="!border-transparent !bg-white !text-slate-900 hover:!bg-slate-100">
              Get a quote
            </ButtonLink>
            <WhatsAppButton text={whatsappText} />
          </div>
        </div>
      </div>
    </section>
  );
}
