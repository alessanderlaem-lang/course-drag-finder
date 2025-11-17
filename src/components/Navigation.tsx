import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-red-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold">
              <span className="text-red-500">RISE</span>
              <span className="text-white">COMMUNITY</span>
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("topics-section")}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Temas
            </button>
            <button
              onClick={() => scrollToSection("bonus-section")}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Bônus
            </button>
            <button
              onClick={() => {
                const pricingSection = document.querySelector('[class*="pricing"]');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Preços
            </button>
            <button
              onClick={() => {
                const faqSection = document.querySelector('[class*="faq"]');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => {
                const pricingSection = document.querySelector('[class*="pricing"]');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105"
            >
              COMEÇAR AGORA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                const pricingSection = document.querySelector('[class*="pricing"]');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200"
            >
              COMEÇAR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
