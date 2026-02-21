import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import BonusSection from "@/components/BonusSection";
import RendaExtraSection from "@/components/sections/RendaExtraSection";
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

      {/* About Section - O Que é a Rise Community */}
      <AboutSection />

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
      <div className="max-w-4xl mx-auto px-6 -mt-4 md:mt-4 text-center">
        <h2
          className="text-lg md:text-5xl font-extrabold leading-tight text-white mb-3 md:mb-8"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          <span className="text-primary">Afilie-se</span> e comece a faturar hoje.
        </h2>
        <p
          className="text-white/50 text-sm md:text-lg leading-[2]"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          <span className="text-white font-semibold">Aqui o afiliado é prioridade.</span> Acesso completo aos materiais oficiais, suporte exclusivo para afiliados e apoio constante da equipe. Você entra com estrutura, direcionamento claro e acompanhamento de verdade. <span className="text-white font-semibold">Nada no escuro. Tudo pensado para facilitar suas vendas.</span>
        </p>
      </div>

      {/* Scrolling Sales */}
      <ScrollingSales />

      {/* Renda Extra Section */}
      <RendaExtraSection />


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
