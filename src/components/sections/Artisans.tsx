import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const artisans = [
  { name: "Pierre Leclerc", role: "Master Jeweler", exp: "32 years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sofia Rinaldi", role: "Stone Setter", exp: "18 years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Hans Müller", role: "Engraver", exp: "26 years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Mei Chen", role: "Horologist", exp: "21 years", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
];

const Artisans = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="subheading text-gold mb-4 block">The Hands Behind the Art</span>
        <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl">The Artisans</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {artisans.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            <div className="img-zoom-container aspect-[3/4] mb-4">
              <img src={a.image} alt={a.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="font-display text-lg text-vanta">{a.name}</h3>
            <p className="text-muted-foreground text-xs tracking-wider mt-1">{a.role} · {a.exp}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Artisans;
