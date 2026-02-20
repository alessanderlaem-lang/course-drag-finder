import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";


import DiferenciaisCriticosSection from "@/components/sections/DiferenciaisCriticosSection";
import AboutSection from "@/components/sections/AboutSection";
import HowAccessWorks from "@/components/HowAccessWorks";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";



const Index = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const scrollToNextSection = () => {
    const topicsSection = document.querySelector('#topics-section');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <HeroSection onCtaClick={scrollToNextSection} />
      </div>

      {/* Topics Section anchor */}
      <div id="topics-section" />


      <div id="comunidade" />

      {/* Diferenciais Críticos Section - Parte 2: 6 Diferenciais */}
      <DiferenciaisCriticosSection />

      {/* What You Get Section - Entrega do Rateio */}
      <WhatYouGetSection />

      {/* How Access Works Section */}
      <HowAccessWorks />

      {/* Bonus Section */}
      <div id="bonus-section" className="-mt-32 lg:-mt-20">
        <BonusSection />
      </div>

      {/* Sobre nós Section - Placeholder */}
      <div id="sobre" />


      {/* Testimonials Carousel */}
      <TestimonialsCarousel />


      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ Section - Placeholder */}
      <div id="faq" />

      {/* Pricing Section */}
      <div id="pricing" className="relative z-20 mt-32 md:mt-48 lg:mt-64">
        <PricingSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
