// components/code-block.tsx
"use client";

import { useState, useRef } from "react";

export function CodeBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"pre">) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;
    const text = preRef.current.innerText || "";
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const language =
    ((props as Record<string, unknown>)["data-language"] as string) || "code";

  return (
    <div className="relative group my-6 overflow-hidden rounded-xl border border-border bg-slate-950 text-slate-50">
      <div className="flex items-center justify-between border-b border-border/40 bg-slate-900/80 px-4 py-2 text-xs font-mono text-slate-400">
        <span className="uppercase">{language}</span>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
        >
          {isCopied ? (
            <>
              <span className="text-emerald-400">✓</span> Copied!
            </>
          ) : (
            <>
              <span>📋</span> Copy
            </>
          )}
        </button>
      </div>

      <pre ref={preRef} className="overflow-x-auto p-4 text-sm leading-relaxed" {...props}>
        {children}
      </pre>
    </div>
  );
}