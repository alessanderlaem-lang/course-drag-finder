import owlLogo from "@/assets/rise-logo-owl.webp";

const OwlRow = ({ offset = false, flipped = false }: { offset?: boolean; flipped?: boolean }) => {
  const owls = Array.from({ length: 20 });

  const flipClass = flipped ? 'rotate-180' : '';

  return (
    <div className={`flex ${offset ? 'ml-10' : ''}`}>
      {owls.map((_, i) => (
        <div
          key={i}
          className={`w-16 h-16 md:w-20 md:h-20 mx-1 shrink-0 ${flipClass}`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            WebkitMaskImage: `url(${owlLogo})`,
            maskImage: `url(${owlLogo})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
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
