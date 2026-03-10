import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const gemologists = [
  { name: "Isabella Marchetti", title: "Master Gemologist, GIA", years: "28 Years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Alexandre Fontaine", title: "Head of Horology", years: "34 Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Yuki Tanaka", title: "Diamond Grading Specialist", years: "22 Years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

const CertifiedGemologists = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="subheading text-gold mb-4 block">Our Experts</span>
        <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl">
          Certified Gemologists
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        {gemologists.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="text-center group"
          >
            <div className="img-zoom-container w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-xl text-vanta">{person.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{person.title}</p>
            <p className="text-gold text-sm mt-2 font-body tracking-wider">{person.years}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertifiedGemologists;
