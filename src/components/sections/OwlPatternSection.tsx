import owlLogo from "@/assets/rise-logo-owl.webp";

const OwlRow = ({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) => {
  const owls = Array.from({ length: 20 });
  const animationName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div
        className="flex shrink-0"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {owls.map((_, i) => (
          <img
            key={i}
            src={owlLogo}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 object-contain mx-1 opacity-80 grayscale brightness-200 contrast-125"
            loading="lazy"
          />
        ))}
      </div>
      <div
        className="flex shrink-0"
        aria-hidden
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {owls.map((_, i) => (
          <img
            key={`dup-${i}`}
            src={owlLogo}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 object-contain mx-1 opacity-80 grayscale brightness-200 contrast-125"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const OwlPatternSection = () => {
  return (
    <section className="w-full bg-background py-6 md:py-10 overflow-hidden">
      <div className="flex flex-col gap-2">
        <OwlRow direction="left" speed={40} />
        <OwlRow direction="right" speed={35} />
        <OwlRow direction="left" speed={45} />
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default OwlPatternSection;
