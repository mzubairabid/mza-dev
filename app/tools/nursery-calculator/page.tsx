import type { Metadata } from "next";
import NurseryCalculatorPage from "@/components/tools/NurseryCalculator";

// Server Component metadata (Google SEO ke liye)
export const metadata: Metadata = {
  title: "UK Nursery Profit Calculator | Estimate Revenue & Costs",
  description:
    "Calculate your UK nursery's monthly revenue, staff costs, fixed expenses, and net profit with our free interactive calculator. Download PDF & DOCX reports.",
};

export default function Page() {
  return <NurseryCalculatorPage />;
}