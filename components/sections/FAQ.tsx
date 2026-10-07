// components/sections/FAQ.tsx — accordion (<details>, zero JS) + FAQPage JSON-LD
// <details name="..."> = ek waqt mein sirf ek sawal khula (browser khud doosra band karta hai)
import { JsonLd } from "@/components/sections/JsonLd";
import { PlusIcon } from "@/components/ui/Icons";
import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/types/content";

export function FAQ({
  items,
  title = "Frequently asked questions",
  withSchema = true,
}: {
  items: FaqItem[];
  title?: string;
  withSchema?: boolean;
}) {
  if (!items.length) return null;
  const group = `faq-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 id="faq-title" className="h2-section">
          {title}
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {items.map((f) => (
            <details key={f.q} name={group} className="faq-item group">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left font-semibold hover:text-primary">
                <h3 className="font-sans text-base font-semibold tracking-normal">{f.q}</h3>
                <PlusIcon className="faq-icon mt-0.5 size-5 shrink-0 text-muted-foreground" />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </section>
  );
}

export default FAQ;
