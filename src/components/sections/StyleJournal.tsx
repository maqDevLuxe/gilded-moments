import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  { title: "The Art of the Invisible Setting", category: "Technique", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", date: "Mar 2026" },
  { title: "Decoding the 4Cs: A Collector's Guide", category: "Education", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&q=80", date: "Feb 2026" },
  { title: "Tourbillon: Poetry in Motion", category: "Horology", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80", date: "Jan 2026" },
];

const StyleJournal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
      >
        <div>
          <span className="subheading text-gold mb-4 block">Insights</span>
          <h2 className="display-heading text-vanta text-4xl md:text-5xl">
            Luxury Style Journal
          </h2>
        </div>
        <span className="subheading text-[11px] text-muted-foreground mt-4 md:mt-0">View All →</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group cursor-pointer"
          >
            <div className="img-zoom-container aspect-[4/5] mb-5">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <span className="subheading text-gold text-[10px]">{p.category} · {p.date}</span>
            <h3 className="font-display text-xl text-vanta mt-2 group-hover:text-gold transition-colors duration-300">
              {p.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default StyleJournal;
