import pricingImage from "@/assets/pricing-section.jpg";

const PricingSection = () => {
  return (
    <section className="w-full py-8 md:py-10 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto flex justify-center">
        <img 
          src={pricingImage} 
          alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista" 
          className="w-full max-w-5xl h-auto rounded-3xl"
        />
      </div>
    </section>
  );
};

export default PricingSection;
