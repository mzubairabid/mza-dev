// content/legal.ts — Privacy Policy aur Terms ka POORA text yahin hai.
// Page ka design: components/legal/LegalDoc.tsx
//
// ⚠️ "TERMS_DEFAULTS" aap ki business policy hai. Neeche wali values check kar lo
//    (advance %, revisions, support ke din). Jo badalna ho, sirf yahan badlo.
//    Ye legal advice nahi hai; bara contract ho to client ke saath alag agreement banao.

export const TERMS_DEFAULTS = {
  advancePercent: 50, // kaam shuru karne se pehle kitna advance
  revisionRounds: 2, // har milestone par kitne revision rounds shamil hain
  supportDays: 14, // launch ke baad free bug-fix support kitne din
  quoteValidDays: 14, // quote kitne din valid hai
};

export const LEGAL_UPDATED = "October 7, 2026";

export type LegalSection = { heading: string; paragraphs?: string[]; points?: string[] };

export type LegalDocContent = {
  title: string;
  description: string;
  name: string;
  h1: string;
  intro: string;
  sections: LegalSection[];
};

const t = TERMS_DEFAULTS;

export const legalPages = {
  "privacy-policy": {
    title: "Privacy Policy | MZA Dev",
    description:
      "How MZA Dev collects, uses and protects personal data submitted through mzadev.com, including the contact form, analytics and cookies.",
    name: "Privacy Policy",
    h1: "Privacy Policy",
    intro:
      "This policy explains what personal data mzadev.com collects, why, and what you can ask me to do with it. MZA Dev is run by Muhammad Zubair Abid, a web developer based in Hyderabad, Pakistan. In this policy, \"I\" and \"me\" mean Muhammad Zubair Abid trading as MZA Dev.",
    sections: [
      {
        heading: "What I collect",
        points: [
          "Contact form: your name, email address, WhatsApp number (optional), the service you need, your budget range and the project details you write. You choose what to send.",
          "Emails and WhatsApp messages you send me directly, including any files or access details you share for a project.",
          "Analytics: Google Analytics 4 records anonymous usage data such as pages visited, approximate location (country/city), device and browser type, and how you arrived at the site.",
          "Technical data: like every website, the hosting provider (Cloudflare) processes your IP address and basic request data to deliver pages and block attacks.",
        ],
      },
      {
        heading: "Why I use it",
        points: [
          "To reply to your enquiry, prepare a quote and deliver the work you hire me for.",
          "To understand which pages are useful and improve the website.",
          "To protect the site and the contact form from spam and abuse.",
        ],
        paragraphs: ["I do not sell, rent or trade your personal data, and I do not add you to a mailing list without asking."],
      },
      {
        heading: "Cookies and local storage",
        points: [
          "Google Analytics cookies (_ga and related) measure visits. You can block them in your browser or with the Google Analytics opt-out add-on.",
          "A \"cur\" cookie remembers which currency to show prices in (PKR, GBP or USD). It is set from your country and contains nothing else.",
          "Your light/dark theme choice is saved in your browser's local storage. It never leaves your device.",
        ],
      },
      {
        heading: "Services that process data for me",
        points: [
          "Cloudflare: hosting, security and, where enabled, spam protection on the contact form (Turnstile).",
          "Resend: delivers contact form messages to my inbox.",
          "Google: Google Analytics, and Gmail for email.",
          "WhatsApp (Meta): if you choose to message me on WhatsApp.",
        ],
        paragraphs: [
          "These providers may store data on servers outside your country, including in the United States. Each has its own privacy policy.",
        ],
      },
      {
        heading: "Client project data",
        paragraphs: [
          "When you hire me, you may share logins, hosting access or customer data stored on your website. I use that access only for the agreed work, do not copy your customer data for any other purpose, and recommend you change passwords or remove my access once the project ends.",
        ],
      },
      {
        heading: "How long I keep data",
        paragraphs: [
          "Enquiries that do not become projects are deleted within 12 months. Project emails and invoices are kept as long as needed for support, accounting and tax records. Analytics data is kept according to the data retention setting in Google Analytics.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask to see, correct or delete the personal data I hold about you, or ask me to stop using it. Email contact@mzadev.com with the subject \"Privacy request\" and I will reply within 30 days. If you are in the UK or EU you also have the right to complain to your data protection authority.",
        ],
      },
      {
        heading: "Children",
        paragraphs: ["This website is meant for businesses and adults. I do not knowingly collect data from children under 13."],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "If this policy changes, the new version will be posted on this page with a new date. Questions: contact@mzadev.com.",
        ],
      },
    ],
  },

  "terms-and-conditions": {
    title: "Terms & Conditions | MZA Dev",
    description:
      "Terms for using mzadev.com and hiring MZA Dev for website design, development, SEO and related services: quotes, payment, revisions and ownership.",
    name: "Terms & Conditions",
    h1: "Terms & Conditions",
    intro:
      "These terms apply when you use mzadev.com and when you hire MZA Dev for website design, development, speed optimization, SEO, analytics or related work. MZA Dev is run by Muhammad Zubair Abid, Hyderabad, Pakistan. If we sign a separate written agreement for a project, that agreement takes priority over these terms. Work hired through Upwork or Fiverr follows that platform's terms.",
    sections: [
      {
        heading: "1. Quotes and scope",
        points: [
          `Every project starts with a written quote listing what is included. A quote is valid for ${t.quoteValidDays} days.`,
          "Anything not listed in the quote is extra work and is quoted separately before I start it.",
          "Prices shown on this website start from the listed amount. The final price depends on the agreed scope.",
        ],
      },
      {
        heading: "2. Payment",
        points: [
          `Work starts after a ${t.advancePercent}% advance payment. The remaining balance is due before the website is launched or files are handed over, unless the quote sets different milestones.`,
          "Payment methods are listed on the invoice (for example bank transfer, Payoneer or Wise). Transfer fees are paid by the sender.",
          "Monthly services such as SEO or maintenance are billed in advance each month and can be cancelled with notice before the next billing date.",
        ],
      },
      {
        heading: "3. Your responsibilities",
        points: [
          "Provide content (text, images, logos), access details and feedback on time. Delays in these move the delivery date.",
          "Make sure you have the right to use any content, images or brand assets you send me.",
          "Keep a backup of your existing website before work starts. I also take a backup before making changes, where the hosting allows it.",
        ],
      },
      {
        heading: "4. Revisions",
        paragraphs: [
          `Each design or development milestone includes ${t.revisionRounds} rounds of revisions within the agreed scope. New features, new pages or a change of direction after approval are quoted as extra work.`,
        ],
      },
      {
        heading: "5. Delivery and support",
        points: [
          "Delivery dates in the quote are estimates and depend on timely content, access and feedback.",
          `After launch, I fix bugs caused by my work free of charge for ${t.supportDays} days. Later fixes and new changes are paid work.`,
          "I am not responsible for problems caused by later changes made by you or another developer, or by plugin, theme, platform or hosting updates outside my control.",
        ],
      },
      {
        heading: "6. Speed, SEO and results",
        paragraphs: [
          "I use proven methods to improve speed scores, Core Web Vitals, indexing and search visibility. However, Google rankings, traffic, PageSpeed scores and sales depend on many factors I do not control, including Google's algorithms, competition, hosting and third-party scripts. I do not guarantee a specific ranking, score or revenue figure.",
        ],
      },
      {
        heading: "7. Refunds and cancellation",
        points: [
          "If you cancel before work starts, the advance is refunded in full.",
          "If you cancel after work has started, you pay for the work completed up to that point. Any remaining advance is refunded.",
          "Completed and approved milestones are not refundable.",
        ],
      },
      {
        heading: "8. Ownership",
        points: [
          "After full payment, you own the final website, design files and custom code made for your project.",
          "Third-party themes, plugins, fonts, images and tools stay under their own licences. Paid licences are bought in your name or charged to you.",
          "I may show the finished project in my portfolio and case studies unless you ask me not to. Your name, private data and confidential details are only shown with your permission.",
        ],
      },
      {
        heading: "9. Confidentiality and access",
        paragraphs: [
          "Logins, business information and customer data you share are kept confidential and used only for your project. Please change passwords or remove my access when the project ends.",
        ],
      },
      {
        heading: "10. Free tools, guides and website content",
        points: [
          "The free tools and articles on mzadev.com and blog.mzadev.com are provided as they are, for general information. Check results before relying on them for business, legal or financial decisions.",
          "The text, designs and code on this website belong to MZA Dev unless stated otherwise. You may share links to them, but please do not republish them without permission.",
          "Links to other websites are provided for convenience. I am not responsible for their content.",
        ],
      },
      {
        heading: "11. Limitation of liability",
        paragraphs: [
          "To the extent allowed by law, my total liability for any project is limited to the amount you paid for that project. I am not liable for indirect losses such as lost profits, lost data or business interruption.",
        ],
      },
      {
        heading: "12. Law, changes and contact",
        paragraphs: [
          "These terms are governed by the laws of Pakistan. I may update them from time to time; the version on this page on the date of your quote applies to your project. Questions: contact@mzadev.com.",
        ],
      },
    ],
  },
} satisfies Record<string, LegalDocContent>;

export type LegalSlug = keyof typeof legalPages;
