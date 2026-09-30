// app/tools/live-html-css-js-editor-tester/page.tsx — tool ka code: components/tools/ (chheda nahi gaya)
import HtmlCssJsEditor from "@/components/tools/html-css-js-editor-client";
import { ToolPage } from "@/components/templates/ToolPage";
import { tools } from "@/content/tools";
import { buildMetadata } from "@/lib/seo";

const tool = tools.find((t) => t.slug === "live-html-css-js-editor-tester")!;

export const metadata = buildMetadata({
  title: "Free Online HTML, CSS & JS Editor, Live Preview | MZA Dev",
  description: "Write HTML, CSS and JavaScript in your browser and see the result instantly. Free online code editor and tester, no signup needed.",
  path: "/tools/live-html-css-js-editor-tester",
  defaultImage: true,
});

export default function Page() {
  return (
    <ToolPage tool={tool} category="DeveloperApplication">
      <HtmlCssJsEditor />
    </ToolPage>
  );
}
