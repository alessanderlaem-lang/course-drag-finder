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
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-start lg:justify-center -mt-[26%] lg:mt-0">
          <img 
            src="/images/hero-background.svg" 
            alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
            className="w-[90%] h-[90%] lg:w-full lg:h-full max-w-none object-contain object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Texto abaixo da imagem - mobile only */}
          <h1 className="lg:hidden text-white text-base font-bold text-center -mt-72 whitespace-nowrap">
            Maior comunidade de Marketing Digital
          </h1>
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
