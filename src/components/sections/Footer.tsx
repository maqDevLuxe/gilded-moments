import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Request Viewing CTA */}
      <section className="editorial-section bg-cream text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <span className="subheading text-gold mb-6 block">Private Appointment</span>
          <h2 className="display-heading text-vanta text-4xl md:text-5xl lg:text-6xl mb-6">
            Request a<br /><span className="italic">Private Viewing</span>
          </h2>
          <p className="body-elegant text-muted-foreground mb-10">
            Experience our collections in the intimacy of our salons. 
            Our specialists await to guide you through an unforgettable journey.
          </p>
          <Link
            to="/boutiques"
            className="inline-block subheading text-[11px] tracking-[0.3em] border border-gold px-10 py-4 text-gold hover:bg-gold hover:text-vanta transition-all duration-500"
          >
            Schedule Appointment
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer ref={ref} className="bg-vanta px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <span className="font-display text-xl tracking-widest text-gold">MAISON ÉCLAT</span>
              <p className="text-primary-foreground/30 text-sm mt-4 font-body leading-relaxed">
                Fine Jewelry & Luxury Watches since 1887. Geneva · Paris · New York · Tokyo.
              </p>
            </div>
            {[
              { title: "Maison", links: ["Our Heritage", "The Artisans", "Sustainability", "Careers"] },
              { title: "Collections", links: ["Haute Joaillerie", "Timepieces", "Bridal", "Archive"] },
              { title: "Services", links: ["Private Viewing", "Bespoke Design", "Care & Repair", "Insurance"] },
            ].map((col) => (
              <div key={col.title}>
                <span className="subheading text-gold text-[10px] mb-4 block">{col.title}</span>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a className="text-primary-foreground/40 text-sm font-body hover:text-gold transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="gold-line-long mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/20 text-xs font-body">
            <span>© 2026 Maison Éclat. All rights reserved.</span>
            <span className="mt-2 md:mt-0">Geneva · Paris · New York · Tokyo</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
