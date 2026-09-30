// app/llms.txt/route.ts — AI tools ke liye site ka saaf khulasa (content/ files se khud banta hai)
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { tools } from "@/content/tools";
import { absoluteUrl, profileLinks, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const a = site.author;
  const body = `# ${site.name}

> ${site.description}

${site.name} is run by ${a.name} (${a.alternateName}), a ${a.jobTitle.toLowerCase()} based in ${a.city}, ${a.country}, building websites since ${a.startedYear}. Clients are mainly in Pakistan, the United States, the United Kingdom and Europe.

Contact: ${site.contact.email}${site.contact.whatsappDisplay ? ` | WhatsApp ${site.contact.whatsappDisplay}` : ""} | ${absoluteUrl("/contact")}

## Services
${services.map((s) => `- [${s.name}](${absoluteUrl(`/${s.slug}`)}): ${s.metaDescription}`).join("\n")}

## Case studies
${caseStudies.map((c) => `- [${c.name}](${absoluteUrl(`/${c.slug}`)}): ${c.cardLine} (${c.platform}, ${c.year})`).join("\n")}

## Free tools
${tools.map((t) => `- [${t.name}](${absoluteUrl(`/tools/${t.slug}`)}): ${t.description}`).join("\n")}

## More
- [About ${a.name}](${absoluteUrl("/about")})
- [Blog](${site.blogUrl})
${profileLinks.map((p) => `- [${p.label}](${p.href})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
