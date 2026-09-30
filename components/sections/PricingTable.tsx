// components/sections/PricingTable.tsx — Basic / Standard / Premium (+ add-on)
// Price visitor ki currency me (PriceTag). Khali price = "Custom quote".
import { CurrencySwitch } from "@/components/sections/CurrencySwitch";
import { hasPrice, PriceTag } from "@/components/sections/PriceTag";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { isFilled } from "@/lib/placeholders";
import type { Package } from "@/types/content";

export function PricingTable({ packages, serviceName }: { packages: Package[]; serviceName: string }) {
  const anyPrice = packages.some((p) => hasPrice(p.price));
  const cols = packages.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="section" aria-labelledby="packages-title">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="packages-title" className="h2-section">
            {serviceName} packages
          </h2>
          {anyPrice && <CurrencySwitch />}
        </div>
        <p className="lead mt-3">
          Starting prices. Every project gets a written scope and a fixed quote before work starts, matched to what you
          actually need.
        </p>
        <div className={`mt-10 grid gap-6 ${cols}`}>
          {packages.map((p) => (
            <div key={p.name} className={`card flex flex-col p-6 ${p.featured ? "border-2 border-primary" : ""}`}>
              <p className="text-sm font-semibold text-primary">{p.tier === "Add-on" ? "Also available" : p.tier}</p>
              <h3 className="mt-1 font-sans text-lg font-semibold tracking-normal">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.bestFor}</p>
              <p className="mt-5 font-serif text-3xl">
                <PriceTag price={p.price} />
              </p>
              {isFilled(p.timeline) && <p className="mt-1 text-sm text-muted-foreground">Delivery: {p.timeline}</p>}
              <ul className="mt-6 flex-1 space-y-2.5 text-[0.9375rem]">
                {p.includes.filter(isFilled).map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-success" />
                    {i}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/contact" variant={p.featured ? "primary" : "outline"} className="mt-8 w-full">
                Get a quote
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
