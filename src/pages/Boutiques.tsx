import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import DiamondCursor from "@/components/DiamondCursor";
import Footer from "@/components/sections/Footer";

const boutiques = [
  { city: "Geneva", address: "12 Rue du Rhône, 1204", phone: "+41 22 000 0000", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", flag: "Flagship" },
  { city: "Paris", address: "24 Place Vendôme, 75001", phone: "+33 1 00 00 00 00", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80", flag: "Salon" },
  { city: "New York", address: "725 Fifth Avenue, NY 10022", phone: "+1 212 000 0000", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80", flag: "Boutique" },
  { city: "Tokyo", address: "4-5-11 Ginza, Chuo-ku", phone: "+81 3 0000 0000", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80", flag: "Boutique" },
];

const BoutiqueCard = ({ b, i }: { b: typeof boutiques[0]; i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.15 }}
      className="group"
    >
      <div className="img-zoom-container aspect-[4/3] mb-6">
        <img src={b.image} alt={`Boutique ${b.city}`} className="w-full h-full object-cover" />
      </div>
      <span className="subheading text-gold text-[10px]">{b.flag}</span>
      <h3 className="font-display text-2xl text-vanta mt-1">{b.city}</h3>
      <p className="text-muted-foreground text-sm mt-2 font-body">{b.address}</p>
      <p className="text-muted-foreground text-sm font-body">{b.phone}</p>
      <button className="mt-4 subheading text-[11px] tracking-[0.3em] border border-gold px-6 py-2.5 text-gold hover:bg-gold hover:text-vanta transition-all duration-500">
        Book Viewing
      </button>
    </motion.div>
  );
};

const Boutiques = () => {
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

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-cream">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="subheading text-gold mb-4 block">Visit Us</span>
          <h1 className="display-heading text-vanta">Our Boutiques</h1>
        </motion.div>
      </section>

      <section className="editorial-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {boutiques.map((b, i) => (
            <BoutiqueCard key={b.city} b={b} i={i} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="editorial-section bg-vanta">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="subheading text-gold mb-6 block">Private Appointment</span>
          <h2 className="display-heading text-primary-foreground text-4xl md:text-5xl mb-10">
            Request a Viewing
          </h2>
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "your@email.com" },
              { label: "Preferred Boutique", type: "text", placeholder: "Geneva, Paris, New York, or Tokyo" },
            ].map((field) => (
              <div key={field.label}>
                <label className="subheading text-gold/60 text-[10px] mb-2 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-primary-foreground/10 text-primary-foreground py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-primary-foreground/20"
                />
              </div>
            ))}
            <div>
              <label className="subheading text-gold/60 text-[10px] mb-2 block">Message</label>
              <textarea
                rows={3}
                placeholder="Tell us about your interest..."
                className="w-full bg-transparent border-b border-primary-foreground/10 text-primary-foreground py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-primary-foreground/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 subheading text-[11px] tracking-[0.3em] border border-gold px-8 py-4 text-gold hover:bg-gold hover:text-vanta transition-all duration-500"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Boutiques;
