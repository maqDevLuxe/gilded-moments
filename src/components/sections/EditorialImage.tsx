import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EditorialImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
        alt="High fashion editorial jewelry"
        className="w-full h-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vanta/60 via-transparent to-vanta/20" />
      <div className="absolute bottom-12 left-6 md:left-20">
        <span className="subheading text-gold tracking-[0.5em] text-[10px]">Spring / Summer Collection</span>
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mt-2 italic">
          Radiance Redefined
        </h2>
      </div>
    </motion.section>
  );
};

export default EditorialImage;
