import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import DiamondCursor from "@/components/DiamondCursor";
import Footer from "@/components/sections/Footer";

const collections = [
  { name: "Lumière", category: "Diamonds", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", pieces: 48, description: "Brilliant-cut diamonds set in platinum and white gold, celebrating pure light." },
  { name: "Aurore", category: "Colored Gemstones", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80", pieces: 36, description: "Kashmir sapphires, Burmese rubies, and Colombian emeralds in extraordinary settings." },
  { name: "Éternité", category: "Bridal", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80", pieces: 72, description: "Engagement rings and wedding bands crafted for forever." },
  { name: "Chronos", category: "Haute Horlogerie", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80", pieces: 24, description: "Mechanical masterpieces with complications that defy convention." },
  { name: "Héritage", category: "Archive Pieces", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80", pieces: 12, description: "Museum-worthy one-of-a-kind creations from our 137-year archive." },
  { name: "Nuit", category: "Evening & Statement", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", pieces: 30, description: "Bold, dramatic pieces designed for unforgettable soirées." },
];

const CollectionCard = ({ col, i }: { col: typeof collections[0]; i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
    >
      <div className={`img-zoom-container aspect-[4/5] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
        <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
      </div>
      <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
        <span className="subheading text-gold text-[10px]">{col.category}</span>
        <h2 className="font-display text-4xl md:text-5xl text-vanta mt-2">{col.name}</h2>
        <div className="gold-line my-6" />
        <p className="body-elegant text-muted-foreground max-w-md">{col.description}</p>
        <p className="text-gold font-body text-sm tracking-wider mt-4">{col.pieces} Pieces</p>
        <button className="mt-8 subheading text-[11px] tracking-[0.3em] border border-gold px-8 py-3 text-gold hover:bg-gold hover:text-vanta transition-all duration-500">
          Explore Collection
        </button>
      </div>
    </motion.div>
  );
};

const Collections = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="diamond-cursor">
      <DiamondCursor />
      <Navbar />
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-cream">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="subheading text-gold mb-4 block">Our World</span>
          <h1 className="display-heading text-vanta">The Collections</h1>
        </motion.div>
      </section>

      {/* Collections */}
      <section className="editorial-section space-y-24 md:space-y-32">
        {collections.map((col, i) => (
          <CollectionCard key={col.name} col={col} i={i} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
