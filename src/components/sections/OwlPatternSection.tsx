import owlLogo from "@/assets/rise-logo-owl.webp";

const OwlRow = ({ offset = false }: { offset?: boolean }) => {
  const owls = Array.from({ length: 20 });

  return (
    <div className={`flex ${offset ? 'ml-10' : ''}`}>
      {owls.map((_, i) => (
        <img
          key={i}
          src={owlLogo}
          alt=""
          className="w-16 h-16 md:w-20 md:h-20 object-contain mx-1 opacity-60 grayscale brightness-[3] contrast-125 mix-blend-screen"
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
        <OwlRow offset />
        <OwlRow />
      </div>
    </section>
  );
};

export default OwlPatternSection;
