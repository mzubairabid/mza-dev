export default function Categories() {
  const categories = [
    {
      title: "Toddler & Young Girls Brackets",
      age: "Ages 1 to 4 Years",
      desc: "Designed specialized age-segmentation cards prioritizing soft UI elements, comfortable fit indicators, and clear classification for toddlers.",
    },
    {
      title: "Festive Wear Catalog Filters",
      age: "Ages 5 to 10 Years",
      desc: "Engineered category classification components tailored for festive events, incorporating vibrant visual tags and structured collection grids.",
    },
    {
      title: "Teen Apparel Section Layout",
      age: "Ages 11 to 15 Years",
      desc: "Developed precision navigation blocks and age-bracket filters to seamlessly organize formal frocks and peshwas for growing teens.",
    },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Navigation & Filtering Architecture
          </span>
          <h2 className="text-3xl font-bold font-serif mb-4">Age-Group Filtering Modules</h2>
          <p className="text-muted-foreground text-sm">
            Structured UI components designed to let users easily filter the catalog by age brackets from toddlers to teens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium mb-3">
                  {cat.age}
                </span>
                <h3 className="text-xl font-bold mb-3 font-serif text-foreground">{cat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/55">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Interactive UI Component
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}