// components/OrganizationSchema.tsx

export default function OrganizationSchema() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mza.dev/#organization",
    "name": "MZA Dev",
    "url": "https://mza.dev",
    "logo": "https://mza.dev/mza-dev-logo.webp",
    "founder": {
      "@type": "Person",
      "@id": "https://mza.dev/#person",
      "name": "Muhammad Zubair Abid"
    },
    "sameAs": [
      "https://github.com/gadgetcrunchie",
      "https://www.linkedin.com/in/mzubairabid"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}