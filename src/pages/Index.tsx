import BonusSection from "@/components/BonusSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DiscordPreviewSection from "@/components/sections/DiscordPreviewSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import DiferenciaisCriticosSection from "@/components/sections/DiferenciaisCriticosSection";
import discordLaptop from "@/assets/discord-laptop.png";

const Index = () => {
  const scrollToNextSection = () => {
    const topicsSection = document.querySelector('#topics-section');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onCtaClick={scrollToNextSection} />

      {/* Topics Section anchor */}
      <div id="topics-section" />

      {/* Ecosystem Section - Parte 1: 4 Pilares */}
      <EcosystemSection />

      {/* Imagem Discord Laptop - Mobile */}
      <div className="block md:hidden w-full px-4 -mt-8 mb-0">
        <img src={discordLaptop} alt="Discord Rise Community" className="w-full h-auto" />
      </div>

      {/* Diferenciais Críticos Section - Parte 2: 6 Diferenciais */}
      <DiferenciaisCriticosSection />

      {/* Bonus Section */}
      <div id="bonus-section" className="-mt-40 lg:mt-0">
        <BonusSection />
      </div>

      {/* Discord Preview Section */}
      <DiscordPreviewSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Pricing Section */}
      <div className="relative z-20">
        <PricingSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
