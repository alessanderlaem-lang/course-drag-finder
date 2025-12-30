import pricingImage from "@/assets/pricing-section.jpg";

const PricingSection = () => {
  return (
    <section className="w-full py-4 md:py-6 bg-background">
      <div className="w-full max-w-none mx-auto flex justify-center px-0">
        <img
          src={pricingImage}
          alt="Rise Community - Quanto custa ter acesso a tudo isso? Por apenas 12x de R$4,15 ou 49,90 à vista"
          className="w-full max-w-4xl h-auto rounded-3xl"
        />
      </div>
    </section>
  );
};

export default PricingSection;
