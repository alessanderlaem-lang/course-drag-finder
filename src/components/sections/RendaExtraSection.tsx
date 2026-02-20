import { LazyMotion, domAnimation, m } from "framer-motion";
import vendaAprovada from "@/assets/venda-aprovada.jpg";
import rendaExtraPhones from "@/assets/renda-extra-phones.png";

const ITEMS_PER_SET = 15;
const blurIndicesRow1 = [2, 6, 11];
const blurIndicesRow2 = [3, 8, 13];

const ScrollRow = ({
  direction,
  blurIndices,
}: {
  direction: "left" | "right";
  blurIndices: number[];
}) => {
  const animName = direction === "left" ? "scroll-left" : "scroll-right";

  const renderSet = (setIndex: number) =>
    Array.from({ length: ITEMS_PER_SET }).map((_, i) => {
      const shouldBlur = blurIndices.includes(i);
      return (
        <img
          key={`${setIndex}-${i}`}
          src={vendaAprovada}
          alt="Venda Aprovada"
          className="h-12 md:h-14 rounded-lg flex-shrink-0"
          style={
            shouldBlur
              ? {
                  animation: `blur-pulse 5s ease-in-out infinite`,
                  animationDelay: `${i * 1.2}s`,
                }
              : undefined
          }
          loading="lazy"
          decoding="async"
        />
      );
    });

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-0"
        style={{
          animation: `${animName} 70s linear infinite`,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {renderSet(0)}
        {renderSet(1)}
      </div>
    </div>
  );
};

const RendaExtraSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              <span className="text-white">Transforme Conhecimento em </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Renda Extra
              </span>
            </h2>
            <p
              className="text-sm md:text-base text-[#999] max-w-2xl mx-auto mt-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Dentro da Rise, você não apenas aprende — você monetiza. Descubra as formas de gerar renda extra usando o que está disponível na comunidade.
            </p>
          </m.div>
        </div>

        {/* Phone mockup image */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <img
            src={rendaExtraPhones}
            alt="Rise Community"
            className="w-full max-w-lg md:max-w-xl"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        {/* Row 1 - scrolling left */}
        <div className="-mt-20 md:-mt-28 relative z-10">
          <ScrollRow direction="left" blurIndices={blurIndicesRow1} />

          {/* Row 2 - scrolling right */}
          <div className="mt-2">
            <ScrollRow direction="right" blurIndices={blurIndicesRow2} />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
