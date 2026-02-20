import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import SalesNotifications from "@/components/SalesNotifications";
import ScrollingSales from "@/components/ScrollingSales";
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

      {/* Sales Notifications */}
      <div className="mt-10 md:mt-[80px]">
        <SalesNotifications />
      </div>

      {/* Text block below notifications */}
      <div className="max-w-3xl mx-auto px-6 mt-10 md:mt-14 text-center">
        <h2
          className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-6"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          <span className="text-primary">Afilie-se</span> e comece a faturar hoje.
        </h2>
        <p
          className="text-white/60 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          Divulgue a Rise Community com seu link de afiliado e receba comissões automáticas
          a cada venda gerada. Sem estoque, sem suporte, sem complicação.<br />
          Você divulga. A venda acontece. O dinheiro cai na sua conta.
        </p>
      </div>

      {/* Scrolling Sales */}
      <ScrollingSales />

      {/* Spacer: compensa a subida das notificações para o pricing não mover */}
      <div className="h-10 md:h-[100px]" />

      {/* Pricing Section */}
      <div id="pricing" className="relative z-20">
        <PricingSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
