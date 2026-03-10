import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { label: "Carats Set", value: 125000, suffix: "+" },
  { label: "Pieces Sold", value: 48000, suffix: "+" },
  { label: "Countries", value: 42, suffix: "" },
  { label: "Years of Excellence", value: 137, suffix: "" },
];

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count.toLocaleString()}</>;
};

const Counters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section bg-vanta">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gold">
              <AnimatedCounter target={c.value} inView={inView} />
              {c.suffix}
            </div>
            <span className="subheading text-primary-foreground/40 text-[10px] mt-3 block">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Counters;
