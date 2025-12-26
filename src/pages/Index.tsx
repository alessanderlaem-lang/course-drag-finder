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
      <section className="relative min-h-[100svh] lg:min-h-screen bg-black overflow-hidden flex flex-col">
        {/* Imagem de fundo - ocupa o espaço disponível */}
        <div className="flex-1 relative w-full">
          <img
            src="/images/hero-background.svg"
            alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
            className="absolute inset-0 w-full h-full object-cover object-top lg:object-contain lg:object-center"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Texto fixo na parte inferior - mobile only */}
        <div className="lg:hidden flex flex-col items-center text-center px-4 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4 bg-black">
          <p className="text-red-500 text-[10px] font-medium tracking-[0.15em] mb-2 whitespace-nowrap">
            PAGAMENTO ÚNICO + ATUALIZAÇÕES SEMANAIS
          </p>

          <h1 className="text-white text-2xl font-bold leading-tight mb-3">
            <span className="block whitespace-nowrap">Maior comunidade de Marketing Digital</span>
            <span className="block whitespace-nowrap">e Networking do Brasil</span>
          </h1>

          <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap">
            Tenha o mesmo acesso que os grandes players têm, Networking poderoso, recursos
          </p>
          <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap mb-4">
            exclusivos e uma comunidade ativa com +9.000 membros
          </p>

          <img
            src={ctaButton}
            alt="Quero saber mais"
            onClick={scrollToNextSection}
            className="w-48 cursor-pointer hover:scale-105 transition-transform"
          />
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
