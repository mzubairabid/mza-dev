// app/tools/online-react-compiler-2026/page.tsx — tool ka code: components/tools/ (chheda nahi gaya)
import ReactCompiler from "@/components/tools/react-compiler-2026-client";
import { ToolPage } from "@/components/templates/ToolPage";
import { tools } from "@/content/tools";
import { buildMetadata } from "@/lib/seo";

const tool = tools.find((t) => t.slug === "online-react-compiler-2026")!;

export const metadata = buildMetadata({
  title: "Free Online React Compiler & JSX Editor | MZA Dev",
  description: "Write, compile and test React components with JSX in your browser, with a live preview. Free online React compiler, no signup needed.",
  path: "/tools/online-react-compiler-2026",
  defaultImage: true,
});

export default function Page() {
  return (
    <ToolPage tool={tool} category="DeveloperApplication">
      <ReactCompiler />
    </ToolPage>
  );
}
