import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-vanta diamond-cursor">
      {/* Background image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="https://images.unsplash.com/photo-1515562141589-67f0d364ef08?w=1920&q=80"
          alt="Exquisite diamond jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-vanta/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          <span className="subheading text-gold tracking-[0.5em]">
            Est. 1887 · Geneva
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="display-heading text-primary-foreground max-w-4xl"
        >
          Where Time
          <br />
          <span className="italic text-gold-gradient">Meets Eternity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="body-elegant text-primary-foreground/70 max-w-lg mt-8"
        >
          Exceptional gemstones and haute horlogerie, handcrafted by master artisans
          for those who appreciate the extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="/collections"
            className="subheading text-[11px] tracking-[0.3em] border border-gold px-8 py-3.5 text-gold hover:bg-gold hover:text-vanta transition-all duration-500"
          >
            Explore Collections
          </a>
          <a
            href="/boutiques"
            className="subheading text-[11px] tracking-[0.3em] px-8 py-3.5 text-primary-foreground/60 hover:text-gold transition-all duration-300"
          >
            Visit Boutique →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-primary-foreground/30 text-[10px] tracking-[0.3em] font-body uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
