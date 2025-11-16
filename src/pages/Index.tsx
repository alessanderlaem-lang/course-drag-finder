import { Unlock, ArrowRight } from "lucide-react";
import ScrollingTopics from "@/components/ScrollingTopics";
import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MembersCounter from "@/components/MembersCounter";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import BlackFridayBanner from "@/components/BlackFridayBanner";
import { Button } from "@/components/ui/button";
import mascotLogo from "@/assets/mascot-logo.png";

const Index = () => {
  const scrollToTopics = () => {
    const topicsSection = document.getElementById('topics-section');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[id*="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Black Friday Banner */}
      <BlackFridayBanner />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden bg-black">
        {/* Background decorativo - círculo de luz */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Layout em duas colunas no desktop, empilhado no mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* COLUNA ESQUERDA - Texto */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              
              {/* Badge de Prova Social */}
              <div className="inline-flex items-center gap-2 bg-red-500/20 border-2 border-red-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  7.000+ MEMBROS ATIVOS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-white">Maior comunidade de</span>
                <br />
                <span className="text-red-500">Marketing Digital</span>
                <br />
                <span className="text-white">do Brasil</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tenha o mesmo acesso que os grandes players têm: networking poderoso, ferramentas premium e recursos exclusivos. +7.000 membros já estão à frente do mercado.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                {/* CTA Primário */}
                <Button 
                  size="lg"
                  onClick={scrollToPricing}
                  className="group bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-lg border-4 border-dashed border-red-500 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                >
                  COMEÇAR AGORA
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                {/* CTA Secundário */}
                <Button 
                  size="lg"
                  onClick={scrollToTopics}
                  variant="outline"
                  className="group border-2 border-white text-white hover:bg-white hover:text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Unlock className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  VER COMUNIDADE
                </Button>
              </div>
            </div>

            {/* COLUNA DIREITA - Mascote */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative">
                {/* Círculo de luz atrás do mascote */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-red-500/20 rounded-full blur-2xl" />
                </div>
                
                {/* Mascote */}
                <img 
                  src={mascotLogo} 
                  alt="Rise Community Mascot" 
                  width="500"
                  height="500"
                  loading="eager"
                  fetchPriority="high"
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Topics Section */}
      <div id="topics-section">
        <ScrollingTopics />
      </div>

      {/* Bonus Section */}
      <BonusSection />

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
