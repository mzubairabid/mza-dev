// app/tools/nursery-calculator/page.tsx — tool ka code: components/tools/ (chheda nahi gaya)
import NurseryCalculator from "@/components/tools/NurseryCalculator";
import { ToolPage } from "@/components/templates/ToolPage";
import { tools } from "@/content/tools";
import { buildMetadata } from "@/lib/seo";

const tool = tools.find((t) => t.slug === "nursery-calculator")!;

export const metadata = buildMetadata({
  title: "UK Nursery Profit Calculator: Revenue & Costs | MZA Dev",
  description: "Estimate a UK nursery's monthly revenue, staff costs, overheads and net profit with this free calculator. Download the results as a PDF or DOCX report.",
  path: "/tools/nursery-calculator",
  defaultImage: true,
});

export default function Page() {
  return (
    <ToolPage tool={tool} category="BusinessApplication">
      <NurseryCalculator />
    </ToolPage>
  );
}
