import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EngagementDesign = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="img-zoom-container aspect-[4/5] order-2 lg:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
            alt="Custom engagement ring design"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <span className="subheading text-gold mb-6 block">Bespoke</span>
          <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl mb-8">
            Custom
            <br />
            <span className="italic">Engagement</span>
            <br />
            Design
          </h2>
          <div className="gold-line mb-8" />
          <p className="body-elegant text-muted-foreground max-w-md">
            Your love story is unique—your ring should be too. Our bespoke design 
            atelier guides you through every step, from selecting the perfect 
            center stone to the final hand-engraved detail.
          </p>
          <a
            href="/boutiques"
            className="inline-block mt-8 subheading text-[11px] tracking-[0.3em] border border-gold px-8 py-3.5 text-gold hover:bg-gold hover:text-vanta transition-all duration-500"
          >
            Begin Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementDesign;
