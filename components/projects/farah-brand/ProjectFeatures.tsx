export default function ProjectFeatures() {
  const features = [
    {
      title: "Custom UI/UX & Heritage Aesthetics",
      desc: "Designed specifically to reflect traditional Pakistani heritage, blending elegant typography with a royal visual layout tailored for a luxury children's clothing brand.",
    },
    {
      title: "WooCommerce E-Commerce Architecture",
      desc: "Engineered a robust product catalog supporting structured age brackets (0-15 years), category filtering, and a clean, conversion-focused shopping flow.",
    },
    {
      title: "Responsive & High-Performance Frontend",
      desc: "Built with a mobile-first approach ensuring lightning-fast load speeds, optimized image rendering, and seamless cross-device responsiveness.",
    },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Development & Design Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            What I Built for Farah Brand
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A breakdown of the core technical and design solutions implemented to bring this e-commerce platform to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold mb-3 font-serif text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}