import { LazyMotion, domAnimation, m } from "framer-motion";
import vendaAprovada from "@/assets/venda-aprovada.jpg";

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

        {/* Scrolling images - full width */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-0"
            style={{
              animation: "scroll-left 90s linear infinite",
              width: "max-content",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <img
                key={i}
                src={vendaAprovada}
                alt="Venda Aprovada"
                className="h-12 md:h-14 rounded-lg flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Scrolling images - reverse direction */}
        <div className="overflow-hidden w-full mt-2">
          <div
            className="flex gap-0"
            style={{
              animation: "scroll-right 90s linear infinite",
              width: "max-content",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <img
                key={i}
                src={vendaAprovada}
                alt="Venda Aprovada"
                className="h-12 md:h-14 rounded-lg flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
