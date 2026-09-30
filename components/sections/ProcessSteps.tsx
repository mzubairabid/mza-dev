// components/sections/ProcessSteps.tsx — numbered, kyun ke ye asli sequence hai
import type { TextBlock } from "@/types/content";

export function ProcessSteps({ title, steps }: { title: string; steps: TextBlock[] }) {
  return (
    <section className="section border-y border-border bg-card/40" aria-labelledby="process-title">
      <div className="container-site">
        <h2 id="process-title" className="h2-section">
          {title}
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-serif text-4xl text-primary" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-2 font-sans text-lg font-semibold tracking-normal">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
