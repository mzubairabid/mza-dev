// components/sections/PriceTag.tsx
// Teeno currencies HTML me hoti hain; <html data-cur="PKR|GBP|USD"> ke hisaab se CSS sirf aik dikhata hai.
// Is liye page static rehta hai (tez), aur currency badalne par layout nahi hilta.
import type { Price } from "@/types/content";

const SYMBOL = { USD: "$", GBP: "£", PKR: "PKR " } as const;
export const hasPrice = (p: Price) => Boolean(p.USD || p.GBP || p.PKR);

export function PriceTag({ price, className = "" }: { price: Price; className?: string }) {
  if (!hasPrice(price)) return <span className={className}>Custom quote</span>;
  const per = price.per ? <span className="text-base text-muted-foreground"> / {price.per}</span> : null;
  return (
    <span className={className}>
      <span className="mr-1.5 align-middle text-sm font-sans text-muted-foreground">From</span>
      {(["USD", "GBP", "PKR"] as const).map((c) =>
        price[c] ? (
          <span key={c} data-price={c}>
            {SYMBOL[c]}
            {price[c]}
            {per}
          </span>
        ) : null
      )}
    </span>
  );
}
