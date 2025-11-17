import { ArrowRight } from "lucide-react";
import ScrollingTopics from "@/components/ScrollingTopics";
import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MembersCounter from "@/components/MembersCounter";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import BlackFridayBanner from "@/components/BlackFridayBanner";
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
      {/* Black Friday Banner */}
      <BlackFridayBanner />
      
      {/* Hero Section - padding-top ao invés de margin-top para evitar espaço vazio */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden bg-black pt-16 sm:pt-20">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Background decorativo - múltiplos círculos de luz */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Círculo principal */}
          <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-red-600/10 rounded-full blur-3xl animate-pulse-slow" />
          
          {/* Círculos secundários */}
          <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-red-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-red-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Layout em duas colunas no desktop, empilhado no mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-6 lg:gap-12 items-center">
            
            {/* COLUNA ESQUERDA - Texto */}
            <div className="space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">
              
              {/* Headline com animação de entrada */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-white">Maior comunidade de</span>
                <br />
                <span className="text-red-500 relative inline-block">
                  Marketing Digital
                  <br className="sm:hidden" />
                  <span className="text-red-500"> e Networking</span>
                  {/* Underline decorativo */}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 blur-sm" />
                </span>
                <br />
                <span className="text-white">do Brasil</span>
              </h1>
              
              {/* Subheadline com animação */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Tenha o mesmo acesso que os grandes players têm: networking poderoso, ferramentas premium e recursos exclusivos. +7.000 membros já estão à frente do mercado.
              </p>

              {/* CTA Único - "Quero saber mais" */}
              <div className="flex justify-center lg:justify-start pt-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg"
                  onClick={scrollToNextSection}
                  className="group relative bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-lg border-4 border-dashed border-red-500 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)] overflow-hidden"
                >
                  {/* Efeito de brilho ao passar o mouse */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center text-lg sm:text-xl">
                    Quero saber mais
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>

            {/* COLUNA DIREITA - Mascote */}
            <div className="flex justify-center items-center order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Múltiplos círculos de luz atrás do mascote */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Círculo principal */}
                  <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-red-500/20 rounded-full blur-2xl animate-pulse-slow" />
                  
                  {/* Círculo secundário */}
                  <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-red-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
                </div>
                
                {/* Mascote com efeito de drop shadow */}
                <img 
                  src={mascotLogo} 
                  alt="Rise Community Mascot" 
                  width="500"
                  height="500"
                  loading="eager"
                  fetchPriority="high"
                  className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[450px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Elementos decorativos ao redor do mascote */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-red-500/30 rounded-full animate-pulse-slow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-red-500/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
