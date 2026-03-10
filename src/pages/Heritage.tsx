import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import DiamondCursor from "@/components/DiamondCursor";
import Footer from "@/components/sections/Footer";

const timeline = [
  { year: "1887", title: "Foundation in Geneva", desc: "François Éclat establishes his first atelier on Rue du Rhône, crafting bespoke pieces for European royalty." },
  { year: "1923", title: "The Paris Salon", desc: "Opening of the iconic Place Vendôme boutique, introducing Art Deco-inspired collections." },
  { year: "1956", title: "Horological Innovation", desc: "Launch of the first in-house caliber, the Mouvement Éclat No. 1, with a revolutionary 72-hour power reserve." },
  { year: "1978", title: "The Star of Kashmir", desc: "Acquisition and setting of the legendary 42-carat Kashmir sapphire, now in permanent exhibition." },
  { year: "2001", title: "Tokyo & New York", desc: "Global expansion with flagship boutiques in Ginza and Fifth Avenue." },
  { year: "2024", title: "Maison Éclat Today", desc: "A fifth-generation family maison, continuing the pursuit of perfection across 42 countries." },
];

const TimelineItem = ({ item, i }: { item: typeof timeline[0]; i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
    >
      <div className="flex-shrink-0">
        <span className="font-display text-5xl md:text-6xl text-gold">{item.year}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl text-vanta mb-2">{item.title}</h3>
        <p className="body-elegant text-muted-foreground max-w-md">{item.desc}</p>
      </div>
    </motion.div>
  );
};

const Heritage = () => {
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

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Heritage of fine jewelry"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-vanta/50" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="subheading text-gold mb-4 block tracking-[0.5em]">Since 1887</span>
            <h1 className="display-heading text-primary-foreground">Our Heritage</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="editorial-section max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl md:text-3xl text-vanta leading-relaxed italic"
        >
          "To create beauty that transcends time—this has been our singular purpose 
          for over a century."
        </motion.p>
        <span className="subheading text-gold text-[10px] mt-6 block">— François Éclat, Founder</span>
      </section>

      {/* Timeline */}
      <section className="editorial-section bg-cream">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} i={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heritage;
