import { ArrowRight, Users } from "lucide-react";
import React from "react";
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

  // Efeito de brilho que segue o mouse no botão
  React.useEffect(() => {
    const button = document.querySelector('.glow-button') as HTMLElement;
    if (!button) return;

    let lastPercentage = 0;
    const brilhoWidth = 15; // Largura do brilho em porcentagem

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const buttonWidth = rect.width;

      // Calcular a posição em porcentagem e centralizar o brilho
      let percentage = ((mouseX / buttonWidth) * 100) - (brilhoWidth / 2);

      // Ajuste de limites
      if (percentage < 0) percentage = 0;
      if (percentage > 100 - brilhoWidth) percentage = 100 - brilhoWidth;

      // Atualiza a variável CSS --glow-left
      button.style.setProperty('--glow-left', `${percentage}%`);
      lastPercentage = percentage;
    };

    const handleMouseLeave = () => {
      // Mantém a última posição do brilho
      button.style.setProperty('--glow-left', `${lastPercentage}%`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
            <div className="space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1 -mt-8 sm:mt-0 relative z-20">
              
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

              {/* CTA Único - "Quero saber mais" com efeito de brilho que segue o mouse */}
              <div className="flex justify-center lg:justify-start pt-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button 
                  onClick={scrollToNextSection}
                  className="glow-button group relative bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] overflow-hidden cursor-pointer"
                  style={{ '--glow-left': '0%' } as React.CSSProperties}
                >
                  {/* Borda externa com glow */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-full border border-white/40 bg-white/10 opacity-50 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                  
                  {/* Brilho que segue o mouse */}
                  <span className="glow-effect absolute top-1/2 -translate-y-1/2 w-[15%] h-[80%] bg-white blur-[15px] opacity-70 mix-blend-screen pointer-events-none" style={{ left: 'var(--glow-left, 0%)' }} />
                  
                  <span className="relative flex items-center text-lg sm:text-xl z-10" style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.2)' }}>
                    Quero saber mais
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
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
