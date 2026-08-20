import type { Metadata } from "next";
import NurseryCalculatorPage from "@/components/tools/NurseryCalculator";

// Server Component metadata (Google SEO ke liye)
export const metadata: Metadata = {
  title: "UK Nursery Profit Calculator | Estimate Revenue & Costs",
  description:
    "Calculate your UK nursery's monthly revenue, staff costs, fixed expenses, and net profit with our free interactive calculator. Download PDF & DOCX reports.",
  openGraph: {
    title: "UK Nursery Profit Calculator | Estimate Revenue & Costs",
    description:
      "Calculate your UK nursery's monthly revenue, staff costs, fixed expenses, and net profit with our free interactive calculator. Download PDF & DOCX reports.",
    url: "https://www.mzadev.com/tools/nursery-calculator",
    type: "website",
    images: [
      {
        url: "https://www.mzadev.com/og-image.jpg", // Ya agar is tool ki apni dedicated image ho to uska full URL path dein
        width: 1200,
        height: 630,
        alt: "UK Nursery Profit Calculator Tool",
      },
    ],
  },
};

export default function Page() {
  return <NurseryCalculatorPage />;
}