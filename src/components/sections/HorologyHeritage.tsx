import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HorologyHeritage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="editorial-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="subheading text-gold mb-6 block">Since 1887</span>
          <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl mb-8">
            Horology
            <br />
            <span className="italic">Heritage</span>
          </h2>
          <div className="gold-line mb-8" />
          <p className="body-elegant text-muted-foreground max-w-md">
            For over a century, our master horologists have pushed the boundaries 
            of mechanical artistry. Each timepiece contains over 300 hand-finished 
            components, assembled in our Geneva atelier with techniques passed down 
            through five generations.
          </p>
          <p className="body-elegant text-muted-foreground max-w-md mt-4">
            From tourbillons to perpetual calendars, every complication is a testament 
            to human ingenuity and the relentless pursuit of perfection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="img-zoom-container aspect-[3/4]"
        >
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80"
            alt="Luxury watch mechanism"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorologyHeritage;
