import { ArrowRight } from "lucide-react";
import ScrollingTopics from "@/components/ScrollingTopics";

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
import discordPreview from "@/assets/discord-preview.jpg";
const Index = () => {
  const scrollToNextSection = () => {
    const topicsSection = document.querySelector('#topics-section');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Design from SVG */}
      <section className="relative min-h-[100svh] lg:min-h-screen bg-background overflow-visible z-30">
        {/* Fundo preto para cobrir qualquer gap */}
        <div className="absolute inset-0 bg-background" />
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

            {/* Backdrop sob a preview do Discord (evita qualquer fundo cinza) */}
            <div className="lg:hidden absolute inset-x-0 bottom-[-12rem] h-[28rem] bg-background pointer-events-none" />

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

              <img
                src={ctaButton}
                alt="Quero saber mais"
                onClick={scrollToNextSection}
                className="-mt-40 w-64 cursor-pointer hover:scale-105 transition-transform"
              />

              <div className="relative">
                <img
                  src={discordPreview}
                  alt="Discord Rise Community Preview"
                  className="-mt-48 w-[36rem] rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-10">
                  <p className="text-white text-base font-bold whitespace-nowrap">
                    Acesso ao <span className="text-red-600 font-extrabold">maior acervo</span> de rateio do Brasil
                  </p>
                  <p className="text-white/70 text-[10px] font-light mt-1 whitespace-nowrap w-max max-w-none mx-auto">
                    Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalicio a centenas de
                  </p>
                  <p className="text-white/70 text-[10px] font-light whitespace-nowrap w-max max-w-none mx-auto">
                    recursos organizados por categoria. Tudo atualizado semanalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer para cobrir qualquer gap */}
      <div className="bg-background h-32 lg:hidden" />

      {/* Topics Section anchor */}
      <div id="topics-section" />

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
