import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ecosystemDesktop from "@/assets/ecosystem-desktop.webp";
import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DiscordPreviewSection from "@/components/sections/DiscordPreviewSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import DiferenciaisCriticosSection from "@/components/sections/DiferenciaisCriticosSection";
import AboutSection from "@/components/sections/AboutSection";
import discordLaptop from "@/assets/discord-laptop.png";
import glowRed from "@/assets/glow-red.png";

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

      {/* About Section - O Que é a Rise Community? */}
      <AboutSection />

      {/* Ecosystem Section - Parte 1: 4 Pilares */}
      <div id="comunidade">
        <EcosystemSection />
      </div>

      {/* Imagem Discord Laptop - Mobile */}
      <div className="block md:hidden w-full -mt-36 mb-0 relative z-[100] overflow-visible">
        <img src={glowRed} alt="" className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-0 pointer-events-none scale-[2]" />
        <div className="flex justify-center overflow-visible">
          <img src={discordLaptop} alt="Discord Rise Community" className="w-[92vw] max-w-none h-auto relative z-10" />
        </div>
      </div>

      {/* Diferenciais Críticos Section - Parte 2: 6 Diferenciais */}
      <DiferenciaisCriticosSection />

      {/* Imagem Ecossistema - Desktop only */}
      <div className="hidden lg:flex justify-center w-full -mt-56 relative z-30">
        <img src={ecosystemDesktop} alt="Ecossistema Rise Community" className="max-w-4xl w-full h-auto" />
      </div>

      {/* Bonus Section */}
      <div id="bonus-section" className="-mt-32 lg:mt-0">
        <BonusSection />
      </div>

      {/* Sobre nós Section - Placeholder */}
      <div id="sobre" />

      {/* Discord Preview Section */}
      <DiscordPreviewSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Pricing Section */}
      <div id="pricing" className="relative z-20">
        <PricingSection />
      </div>

      {/* FAQ Section - Placeholder */}
      <div id="faq" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
