import { Unlock } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      {/* Black Friday Banner */}
      <BlackFridayBanner />
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, rgba(139, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 70%)' }}>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Mascot with Logo */}
          <div className="relative z-0 flex justify-center mb-0">
            <img 
              src={mascotLogo} 
              alt="Rise Community Mascot" 
              width="500"
              height="500"
              loading="eager"
              fetchPriority="high"
              className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] max-h-[55vh] h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 -mt-8 sm:-mt-12 md:-mt-16 text-center space-y-4 sm:space-y-6">
            {/* Eyebrow Text */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF0000] uppercase">
              Networking + Rateio + Afiliação
            </p>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 sm:px-6">
              <span className="text-white">A Maior Comunidade de Marketing Digital</span>
              <br />
              <span className="text-[#FF0000]">e Networking</span>
              <br />
              <span className="text-white">do Brasil</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-sm sm:text-base text-[#a1a1a1] max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
              Tenha o mesmo acesso que os grandes players têm: networking poderoso, ferramentas premium e recursos exclusivos. +7.000 membros já estão à frente do mercado.
            </p>

            {/* CTA Button */}
            <div className="pt-3 sm:pt-4">
              <Button 
                size="lg"
                onClick={scrollToTopics}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Unlock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                Quero saber mais
              </Button>
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
