import pricingImage from "@/assets/pricing-section.jpg";
import pricingImageMobile from "@/assets/pricing-section-mobile-new.jpg";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FullBleedImage from "@/components/layout/FullBleedImage";

const CHECKOUT_URL = "https://wa.me/?text=ol%C3%A1%2C%20quero%20adquirir%20meu%20acesso%20a%20rise%20community";

const PricingSection = () => {
  return (
    <Section id="pricing" spacing="sm">
      {/* Mobile: full-bleed */}
      <div className="md:hidden w-full px-4">
        <div className="relative">
          <FullBleedImage
            src={pricingImageMobile}
            alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 9x de R$7,04 ou 49,90 à vista"
            className="w-full"
          />
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            GARANTIR MINHA VAGA
          </a>
        </div>
      </div>

      {/* Tablet/Desktop: full-bleed (sem padding e sem max-width) + recorte lateral */}
      <Container size="full" noPadding className="hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="relative">
            <FullBleedImage
              src={pricingImage}
              alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista"
              cropXPercent={4}
              className="rounded-2xl lg:rounded-3xl w-full"
            />
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              GARANTIR MINHA VAGA
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PricingSection;
