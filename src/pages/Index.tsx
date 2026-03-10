import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import DiamondCursor from "@/components/DiamondCursor";
import Hero from "@/components/sections/Hero";
import CertifiedGemologists from "@/components/sections/CertifiedGemologists";
import CollectionsGrid from "@/components/sections/CollectionsGrid";
import CraftsmanshipMetrics from "@/components/sections/CraftsmanshipMetrics";
import HorologyHeritage from "@/components/sections/HorologyHeritage";
import EngagementDesign from "@/components/sections/EngagementDesign";
import Artisans from "@/components/sections/Artisans";
import EditorialImage from "@/components/sections/EditorialImage";
import Counters from "@/components/sections/Counters";
import StyleJournal from "@/components/sections/StyleJournal";
import SecureShipping from "@/components/sections/SecureShipping";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="diamond-cursor">
      <DiamondCursor />
      <Navbar />
      <Hero />
      <CertifiedGemologists />
      <CollectionsGrid />
      <CraftsmanshipMetrics />
      <HorologyHeritage />
      <EngagementDesign />
      <Artisans />
      <EditorialImage />
      <Counters />
      <StyleJournal />
      <SecureShipping />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
