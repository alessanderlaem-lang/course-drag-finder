import pricingImage from "@/assets/pricing-section.jpg";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const PricingSection = () => {
  return (
    <Section spacing="sm">
      {/* Mobile: full-bleed */}
      <div className="md:hidden w-full">
        <img
          src={pricingImage}
          alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista"
          className="w-full h-auto"
        />
      </div>
      
      {/* Tablet/Desktop: com container responsivo */}
      <Container size="wide" className="hidden md:block">
        <img
          src={pricingImage}
          alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista"
          className="w-full h-auto rounded-2xl lg:rounded-3xl"
        />
      </Container>
    </Section>
  );
};

export default PricingSection;
