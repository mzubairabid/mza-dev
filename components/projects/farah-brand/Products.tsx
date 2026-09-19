export default function Products() {
  const showcaseItems = [
    {
      title: "Luxury Catalog Module & Pricing Grid",
      tag: "Catalog UI",
      desc: "Engineered a structured product card layout featuring dynamic age brackets (0-15 years), custom pricing tags, and clean visual hierarchy for high-end apparel.",
    },
    {
      title: "Interactive Variant & Order Flow",
      tag: "UX Flow",
      desc: "Implemented user-friendly conversion elements, including direct inquiry triggers and smooth item details presentation tailored for boutique e-commerce.",
    },
    {
      title: "Responsive E-Commerce Grid Layout",
      tag: "Frontend Architecture",
      desc: "Built a fully fluid, multi-column grid system optimized for seamless browsing across mobile, tablet, and desktop viewports with lightning-fast load performance.",
    },
  ];

  return (
    <section id="products" className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Storefront UI & Modules
          </span>
          <h2 className="text-3xl font-bold font-serif mb-4">Featured E-Commerce Components</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Highlights of the catalog layouts and frontend modules designed and developed for Farah Brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseItems.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm flex flex-col justify-between p-6 hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium mb-4">
                  {item.tag}
                </span>
                <h3 className="font-bold text-lg mb-2 font-serif text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              
              <div className="pt-4 border-t border-border/55 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span>Module Status</span>
                <span className="text-primary font-semibold">Fully Responsive & Optimized</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}