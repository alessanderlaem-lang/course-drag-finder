import pricingImage from "@/assets/pricing-section.jpg";
import pricingImageMobile from "@/assets/pricing-section-mobile-new.jpg";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FullBleedImage from "@/components/layout/FullBleedImage";

const PricingSection = () => {
  return (
    <Section id="pricing" spacing="sm">
      {/* Mobile: full-bleed */}
      <div className="md:hidden w-full px-4">
        <FullBleedImage
          src={pricingImageMobile}
          alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 9x de R$7,04 ou 49,90 à vista"
          className="w-full"
        />
      </div>

      {/* Tablet/Desktop: full-bleed (sem padding e sem max-width) + recorte lateral */}
      <Container size="full" noPadding className="hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4">
          <FullBleedImage
            src={pricingImage}
            alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista"
            cropXPercent={4}
            className="rounded-2xl lg:rounded-3xl w-full"
          />
        </div>
      </Container>
    </Section>
  );
};

export default PricingSection;
