// Example: components/PersonSchema.tsx

export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mza.dev/#person",
    "name": "Muhammad Zubair Abid",
    "alternateName": ["MZA Dev", "Zubair Abid"],
    "jobTitle": "Full-Stack Web Developer & Technical SEO Specialist",
    "url": "https://mza.dev",
    
    // ⬇️ YE SAMEAS ARRAY ADD KARNA HAI ⬇️
    "sameAs": [
      "https://github.com/gadgetcrunchie",
      "https://www.linkedin.com/in/mzubairabid",
      "https://www.youtube.com/@Bmzadev",
      "https://gadgetcrunchie.com",
      "https://twitter.com/mzadev" // Agar ho toh add karein, warna remove kar dein
    ],

    "knowsAbout": [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Technical SEO",
      "Core Web Vitals Optimization",
      "Shopify Liquid Development"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}