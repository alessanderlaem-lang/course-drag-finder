import { ArrowRight } from "lucide-react";
import ScrollingTopics from "@/components/ScrollingTopics";
import CommunityShowcase from "@/components/CommunityShowcase";
import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MembersCounter from "@/components/MembersCounter";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import mascotLogo from "@/assets/mascot-logo.png";
import ctaButton from "@/assets/cta-button.png";
const Index = () => {
  const scrollToNextSection = () => {
    const topicsSection = document.querySelector('#topics-section');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Full Design from SVG */}
      <section className="relative min-h-[100svh] lg:min-h-screen bg-black overflow-hidden">
        {/* Fundo preto para cobrir qualquer gap */}
        <div className="absolute inset-0 bg-black" />
        {/* Background com o design completo */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          {/*
            Mobile: trava o layout num "quadro" 9:16 (mesma proporção do SVG) e
            posiciona o texto por porcentagem para ficar igual em iPhone/Android.
          */}
          <div className="relative mx-auto h-[100svh] w-full translate-y-0 lg:translate-y-0 lg:w-full lg:h-full lg:max-w-none">
            <img
              src="/images/hero-background.svg"
              alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
              className="block w-full h-full max-w-none object-cover object-center lg:object-contain"
              loading="eager"
              fetchPriority="high"
            />

            {/* Texto abaixo da imagem - mobile only */}
            <div className="lg:hidden flex flex-col items-center text-center absolute inset-x-0 top-[62%] px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
              <p className="text-red-500 text-[10px] font-medium tracking-[0.15em] mb-2 whitespace-nowrap">
                PAGAMENTO ÚNICO + ATUALIZAÇÕES SEMANAIS
              </p>

              <h1 className="text-white text-xl font-bold leading-tight mb-3">
                <span className="block whitespace-nowrap">Maior comunidade de Marketing Digital</span>
                <span className="block whitespace-nowrap">e Networking do Brasil</span>
              </h1>

              <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap">
                Tenha o mesmo acesso que os grandes players têm, Networking poderoso, recursos
              </p>
              <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap">
                exclusivos e uma comunidade ativa com +9.000 membros
              </p>

              <div 
                className="relative -mt-40 w-64 cursor-pointer hover:scale-105 transition-transform group"
                onClick={scrollToNextSection}
              >
                {/* Brilho girando */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-75 blur-sm animate-spin-slow" />
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-conic from-transparent via-white/40 to-transparent opacity-60 animate-spin-slow" />
                <img
                  src={ctaButton}
                  alt="Quero saber mais"
                  className="relative w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Showcase Section */}
      <div id="topics-section">
        <CommunityShowcase />
      </div>

      {/* Bonus Section */}
      <div id="bonus-section">
        <BonusSection />
      </div>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Members Counter */}
      <MembersCounter />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
