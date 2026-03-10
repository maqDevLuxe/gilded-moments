import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const collections = [
  { name: "Lumière", category: "Diamonds", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", description: "Brilliant-cut diamonds set in platinum" },
  { name: "Aurore", category: "Colored Gems", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80", description: "Sapphires, rubies & emeralds" },
  { name: "Éternité", category: "Bridal", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80", description: "Engagement & wedding bands" },
  { name: "Chronos", category: "Timepieces", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80", description: "Swiss haute horlogerie" },
  { name: "Héritage", category: "Archive", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80", description: "One-of-a-kind museum pieces" },
  { name: "Nuit", category: "Evening", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", description: "Statement pieces for soirées" },
];

const CollectionsGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="editorial-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
      >
        <div>
          <span className="subheading text-gold mb-4 block">Discover</span>
          <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl">
            The Collections
          </h2>
        </div>
        <a href="/collections" className="subheading text-[11px] text-muted-foreground hover:text-gold transition-colors mt-4 md:mt-0">
          View All Collections →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((col, i) => (
          <motion.div
            key={col.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group overflow-hidden aspect-[3/4]"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={col.image}
              alt={col.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${hovered === i ? "scale-110" : "scale-100"}`}
            />
            <div className={`absolute inset-0 bg-vanta/40 transition-opacity duration-500 ${hovered === i ? "opacity-70" : "opacity-30"}`} />
            
            {/* Details slide up on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="subheading text-gold text-[10px]">{col.category}</span>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mt-1">{col.name}</h3>
              <motion.p
                initial={false}
                animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="body-elegant text-primary-foreground/70 text-sm mt-2"
              >
                {col.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;
