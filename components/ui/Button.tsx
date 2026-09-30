// components/ui/Button.tsx — link ya button, aik jaisa style
import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

type Variant = "primary" | "outline" | "whatsapp";
const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  whatsapp: "btn btn-whatsapp",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const cls = `${variants[variant]} ${className}`;
  if (href.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener">
        {children}
        {variant !== "whatsapp" && <ExternalIcon />}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** WhatsApp number khali ho to kuch render nahi hota */
export function WhatsAppButton({
  text,
  label = "Chat on WhatsApp",
  className = "",
}: {
  text?: string;
  label?: string;
  className?: string;
}) {
  const href = whatsappLink(text);
  if (!href) return null;
  return (
    <a href={href} className={`btn btn-whatsapp ${className}`} target="_blank" rel="noopener">
      <WhatsAppIcon />
      {label}
    </a>
  );
}
