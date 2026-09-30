// app/api/contact/route.ts — contact form → email (Resend)
// Vercel env variables:
//   RESEND_API_KEY        (zaroori)
//   CONTACT_TO_EMAIL      (optional, default contact@mzadev.com)
//   CONTACT_FROM_EMAIL    (optional, Resend me verified domain wala address)
//   TURNSTILE_SECRET_KEY  (optional, Cloudflare Turnstile on karne ke liye)
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || site.contact.email;
const FROM = process.env.CONTACT_FROM_EMAIL || `MZA Dev Website <${site.contact.email}>`;

// Best-effort rate limit (har server instance ki apni memory).
// Asal hifazat: Vercel Firewall rate-limit rule + Turnstile.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile set nahi = skip
  if (!token) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return data.success === true;
}

const fail = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return fail("Too many messages. Please try again in a few minutes.", 429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("Invalid request.");
  }

  // Bot checks: honeypot bhara hua, ya form 3 second se kam me submit
  const elapsed = Number(body.elapsedMs ?? 0);
  if (str(body.company_website, 200) || elapsed < 3000) {
    return NextResponse.json({ ok: true }); // bot ko pata na chale
  }

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const whatsapp = str(body.whatsapp, 30);
  const service = str(body.service, 100);
  const budget = str(body.budget, 100);
  const message = str(body.message, 5000);

  if (!name || !email || !message) return fail("Please fill in your name, email and project details.");
  if (!EMAIL_RE.test(email)) return fail("Please enter a valid email address.");
  if (message.length < 20) return fail("Please add a few more details about your project.");

  if (!(await verifyTurnstile(str(body["cf-turnstile-response"], 2048), ip))) {
    return fail("Spam check failed. Please refresh the page and try again.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY missing");
    return fail("The form is not configured yet. Please email us directly.", 500);
  }

  const resend = new Resend(apiKey);
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["WhatsApp", whatsapp || "-"],
    ["Service", service || "-"],
    ["Budget", budget || "-"],
  ];
  const html = `<h2>New website lead</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${esc(v)}</td></tr>`)
    .join("")}</table><p><strong>Project details</strong></p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;

  // Resend SDK error THROW nahi karta, { error } return karta hai. Isay check karna zaroori hai,
  // warna email fail hone par bhi user ko "sent" dikhta aur lead gum ho jati.
  let error: unknown = null;
  try {
    ({ error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New lead: ${service || "Website enquiry"} (${name})`,
      html,
      text,
    }));
  } catch (e) {
    error = e;
  }

  if (error) {
    console.error("[contact] Resend error:", error);
    return fail("The message could not be sent. Please email us directly.", 502);
  }

  // Client ko auto-reply: SIRF jab Turnstile on ho. Warna spammer kisi aur ka email daal kar
  // aap ke domain se usay emails bhijwa sakta hai (domain reputation kharab hoti hai).
  // User ka likha koi text auto-reply me nahi jata.
  if (process.env.TURNSTILE_SECRET_KEY) {
    await resend.emails
      .send({
        from: FROM,
        to: email,
        subject: "We received your message - MZA Dev",
        text: `Hi,\n\nThanks for getting in touch with MZA Dev. Your message has been received and you'll get a reply ${site.contact.responseTime}.\n\nM Zubair Abid\nMZA Dev - ${site.url}`,
      })
      .catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
