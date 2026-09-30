// components/layout/WhatsAppFloat.tsx — har page par WhatsApp button (number khali ho to gayab)
import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  const href = whatsappLink("Hi Zubair, I found you on mzadev.com. I need help with: ");
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-white shadow-lg hover:bg-whatsapp-hover md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
