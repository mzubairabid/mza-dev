"use client";
// components/contact/ContactForm.tsx
// Spam se bachao: honeypot field + "bohat jaldi submit" check + (optional) Cloudflare Turnstile.
// Turnstile on karne ke liye Vercel env me NEXT_PUBLIC_TURNSTILE_SITE_KEY aur TURNSTILE_SECRET_KEY daalo.
import Script from "next/script";
import { useRef, useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { contact } from "@/content/contact";

type Status = "idle" | "sending" | "sent" | "error";
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt.current }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "The message could not be sent.");
      setStatus("sent");
      window.gtag?.("event", "generate_lead", { form: "contact", service: String(data.service ?? "") });
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The message could not be sent.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card border-success p-8">
        <p className="text-lg font-semibold">Message sent</p>
        <p className="mt-2 text-muted-foreground">{contact.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8" noValidate={false}>
      {TURNSTILE_KEY && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />}

      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="name" label="Your name" required autoComplete="name" maxLength={100} />
        <Input id="email" label="Email" type="email" required autoComplete="email" maxLength={200} />
      </div>
      <Input
        id="whatsapp"
        label="WhatsApp number (optional)"
        type="tel"
        autoComplete="tel"
        maxLength={30}
        placeholder="+92 300 1234567"
        hint="With country code, if you'd like a reply on WhatsApp."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Select id="service" label="What do you need?" options={contact.serviceOptions} />
        <Select id="budget" label="Budget" options={contact.budgetOptions} defaultValue={contact.budgetOptions[4]} />
      </div>
      <Textarea
        id="message"
        label="Project details"
        required
        minLength={20}
        maxLength={5000}
        placeholder="What is the website for? Pages or features you need, example sites you like, and your deadline."
      />

      {/* Honeypot: insaan ko nazar nahi aata, bots bhar dete hain */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {TURNSTILE_KEY && <div className="cf-turnstile" data-sitekey={TURNSTILE_KEY} data-theme="auto" />}

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error} You can also email contact@mzadev.com directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-muted-foreground">
        Your details are only used to reply to you. See the{" "}
        <a href="/privacy-policy" className="link">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
