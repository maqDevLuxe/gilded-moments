import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  { name: "Victoria Ashworth", location: "London", text: "The bespoke emerald ring exceeded every expectation. Maison Éclat understood my vision perfectly—a true once-in-a-lifetime piece.", rating: 5 },
  { name: "James Rothenberg", location: "New York", text: "My perpetual calendar watch is not merely a timepiece; it is an heirloom. The craftsmanship is beyond compare.", rating: 5 },
  { name: "Sakura Nakamura", location: "Tokyo", text: "From the private consultation to the white-glove delivery, every detail was handled with impeccable care and discretion.", rating: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="editorial-section bg-vanta">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="subheading text-gold mb-6 block">Testimonials</span>
        <h2 className="display-heading text-primary-foreground text-4xl md:text-5xl mb-12">
          Collector Voices
        </h2>

        <div className="relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className={`${active === i ? "block" : "hidden"}`}
            >
              <div className="text-gold mb-4 tracking-widest">{"★".repeat(t.rating)}</div>
              <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-8">
                <span className="text-gold font-body text-sm tracking-wider">{t.name}</span>
                <span className="text-primary-foreground/30 font-body text-sm"> · {t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rotate-45 transition-all duration-300 ${
                active === i ? "bg-gold scale-125" : "bg-primary-foreground/20"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
