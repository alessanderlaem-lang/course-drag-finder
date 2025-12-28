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
import cat1 from "@/assets/categories/1.png";
import cat2 from "@/assets/categories/2.png";
import cat3 from "@/assets/categories/3.png";
import cat4 from "@/assets/categories/4.png";
import cat5 from "@/assets/categories/5.png";
import cat6 from "@/assets/categories/6.png";
import cat7 from "@/assets/categories/7.png";
import cat8 from "@/assets/categories/8.png";
import cat9 from "@/assets/categories/9.png";
import cat10 from "@/assets/categories/10.png";
import cat11 from "@/assets/categories/11.png";
import cat12 from "@/assets/categories/12.png";
import cat13 from "@/assets/categories/13.png";
import cat14 from "@/assets/categories/14.png";
import cat15 from "@/assets/categories/15.png";
import cat16 from "@/assets/categories/16.png";

const categoryImages = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];
const categoryImages2 = [cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16];
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



            </div>
          </div>
        </div>
      </section>

      {/* Topics Section anchor */}
      <div id="topics-section" />

      {/* Bonus Section - Agora vem primeiro */}
      <div id="bonus-section" className="-mt-40 lg:mt-0">
        <BonusSection />
      </div>

      {/* Discord Preview Section - Agora vem depois dos bônus */}
      <section className="relative bg-background pt-32 pb-32 overflow-visible">
        <div className="flex flex-col items-center text-center px-4">
          <div className="relative">
            <img
              src={discordPreview}
              alt="Discord Rise Community Preview"
              className="w-[36rem] rounded-lg shadow-lg"
            />
            <div className="absolute top-96 left-1/2 -translate-x-1/2 text-center z-10">
              <p className="text-white text-2xl font-bold whitespace-nowrap">
                Acesso ao <span className="text-red-600 font-extrabold">maior acervo</span> de rateio do Brasil
              </p>
              <p className="text-white/70 text-[10px] font-light mt-1 whitespace-nowrap w-max max-w-none mx-auto">
                Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalicio a centenas de
              </p>
              <p className="text-white/70 text-[10px] font-light whitespace-nowrap w-max max-w-none mx-auto">
                recursos organizados por segmento e área. Tudo atualizado semanalmente.
              </p>
              
              {/* Category Images Row 1 - Scroll Left */}
              <div className="-mt-16 overflow-hidden w-full relative z-50">
                <div className="flex flex-nowrap gap-0 animate-scroll-left w-max">
                  {[...categoryImages, ...categoryImages, ...categoryImages, ...categoryImages].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Imagem de categoria ${(idx % 8) + 1}`}
                      className="w-56 h-56 object-contain flex-shrink-0"
                      loading="lazy"
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
              
              {/* Category Images Row 2 - Scroll Right */}
              <div className="-mt-44 md:-mt-40 overflow-hidden w-full relative z-50">
                <div className="flex flex-nowrap gap-0 animate-scroll-right w-max">
                  {[...categoryImages2, ...categoryImages2, ...categoryImages2, ...categoryImages2].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Imagem de categoria ${(idx % 8) + 9}`}
                      className="w-56 h-56 object-contain flex-shrink-0"
                      loading="lazy"
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
