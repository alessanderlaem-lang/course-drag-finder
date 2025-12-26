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
        <div className="absolute inset-0 w-full h-full flex items-start justify-center pt-[30%]">
          <img 
            src="/images/hero-background.svg" 
            alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
            className="w-[120%] h-[120%] max-w-none object-contain object-center"
            loading="eager"
            fetchPriority="high"
          />
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
