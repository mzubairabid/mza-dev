// components/FaqSchema.tsx
interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface FaqSchemaProps {
  faqs?: FaqItem[];
  faqList?: FaqItem[];
}

export default function FaqSchema({ faqs, faqList }: FaqSchemaProps) {
  // `faqs` ya `faqList` mein se jo b mile usko load kar le ga
  const rawList = faqs || faqList || [];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rawList.map((faq) => ({
      "@type": "Question",
      name: faq.q || faq.question || "",
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a || faq.answer || "",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}