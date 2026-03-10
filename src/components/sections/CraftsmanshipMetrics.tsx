import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Diamond Clarity", value: "IF - VVS1", desc: "Internally Flawless" },
  { label: "Cut Grade", value: "Excellent", desc: "Triple Excellent GIA" },
  { label: "Origin Traceability", value: "100%", desc: "Blockchain Verified" },
  { label: "Master Craftsmen", value: "47", desc: "Average 25 years experience" },
];

const CraftsmanshipMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section bg-vanta">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="subheading text-gold mb-4 block">Excellence</span>
        <h2 className="display-heading text-primary-foreground text-4xl md:text-5xl lg:text-6xl">
          Craftsmanship & Clarity
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 max-w-6xl mx-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-vanta p-8 md:p-10 text-center"
          >
            <span className="subheading text-gold/60 text-[10px]">{m.label}</span>
            <div className="font-display text-3xl md:text-4xl text-primary-foreground mt-3">{m.value}</div>
            <p className="text-primary-foreground/40 text-sm mt-2 font-body">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CraftsmanshipMetrics;
