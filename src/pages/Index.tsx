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
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background com o design completo */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-start lg:justify-center -mt-[12%] lg:mt-0">
          <img 
            src="/images/hero-background.svg" 
            alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
            className="w-[90%] h-[90%] lg:w-full lg:h-full max-w-none object-contain object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Texto abaixo da imagem - mobile only */}
          <div className="lg:hidden flex flex-col items-center text-center absolute bottom-[32vh] px-4">
            <p className="text-[#FF0000] text-[10px] font-medium tracking-[0.15em] mb-2 whitespace-nowrap">
              PAGAMENTO ÚNICO + ATUALIZAÇÕES SEMANAIS
            </p>
            <h1 className="text-white text-2xl font-bold whitespace-nowrap">
              Maior comunidade de Marketing Digital
            </h1>
            <h1 className="text-white text-2xl font-bold whitespace-nowrap mb-3">
              e Networking do Brasil
            </h1>
            <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap">
              Tenha o mesmo acesso que os grandes players têm, Networking poderoso, recursos
            </p>
            <p className="text-white/80 text-[10px] leading-relaxed whitespace-nowrap">
              exclusivos e uma comunidade ativa com +9.000 membros
            </p>
            <button 
              onClick={scrollToNextSection}
              className="mt-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#ff3333] to-[#cc0000] text-white font-semibold text-sm rounded-xl shadow-lg hover:from-[#ff4444] hover:to-[#dd0000] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
              </svg>
              Quero saber mais
            </button>
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
