import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "◇", title: "Insured Worldwide", desc: "Full coverage up to $5M per shipment" },
  { icon: "◈", title: "White Glove Delivery", desc: "Personal courier for pieces over $50K" },
  { icon: "◆", title: "Secure Vault Storage", desc: "Complimentary first-year storage" },
];

const SecureShipping = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="subheading text-gold mb-4 block">Trust</span>
        <h2 className="display-heading text-vanta text-4xl md:text-5xl">
          Secure & Insured Shipping
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center"
          >
            <span className="text-gold text-3xl">{f.icon}</span>
            <h3 className="font-display text-lg text-vanta mt-4">{f.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecureShipping;
