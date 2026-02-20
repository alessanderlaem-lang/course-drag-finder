import owlLogo from "@/assets/rise-logo-owl.webp";

const OwlRow = ({ offset = false, flipped = false }: { offset?: boolean; flipped?: boolean }) => {
  const owls = Array.from({ length: 20 });

  const flipClass = flipped ? 'rotate-180' : '';

  return (
    <div className={`flex ${offset ? 'ml-10' : ''}`}>
      {owls.map((_, i) => (
        <img
          key={i}
          src={owlLogo}
          alt=""
          className={`w-16 h-16 md:w-20 md:h-20 object-contain mx-1 opacity-50 grayscale brightness-[5] contrast-200 mix-blend-screen ${flipClass}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

const OwlPatternSection = () => {
  return (
    <section className="w-full bg-background py-6 md:py-10 overflow-hidden">
      <div className="flex flex-col gap-2">
        <OwlRow />
        <OwlRow offset flipped />
        <OwlRow />
      </div>
    </section>
  );
};

export default OwlPatternSection;
