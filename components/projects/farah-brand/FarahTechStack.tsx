export default function ProjectTechStack() {
  const stack = [
    { name: "WordPress CMS", desc: "Core website management and content control" },
    { name: "WooCommerce", desc: "Secure order processing and catalog management" },
    { name: "Elementor Pro", desc: "Custom responsive UI/UX storefront layouts" },
    { name: "Home Tailoring", desc: "Authentic hand-stitched katan & gota craftsmanship" },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-bold font-serif mb-3">Platform & Craftsmanship Stack</h2>
        <p className="text-muted-foreground text-sm">Built on modern e-commerce technology combined with traditional artisan tailoring.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stack.map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-border bg-card text-center shadow-sm">
            <h3 className="font-bold text-base mb-1">{item.name}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}