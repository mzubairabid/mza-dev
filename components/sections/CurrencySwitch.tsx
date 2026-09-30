"use client";
// components/sections/CurrencySwitch.tsx — visitor khud currency badal sake (VPN, travel etc.)
const OPTIONS = ["USD", "GBP", "PKR"] as const;

export function CurrencySwitch() {
  function set(cur: string) {
    document.documentElement.dataset.cur = cur;
    document.cookie = `cur=${cur}; path=/; max-age=31536000; samesite=lax`;
  }
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Show prices in</span>
      <div role="group" aria-label="Currency" className="inline-flex overflow-hidden rounded-md border border-border">
        {OPTIONS.map((c) => (
          <button key={c} type="button" data-cur-btn={c} onClick={() => set(c)} className="px-3 py-1.5 font-semibold hover:bg-accent">
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

