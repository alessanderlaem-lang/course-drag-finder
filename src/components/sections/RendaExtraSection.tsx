import { LazyMotion, domAnimation, m } from "framer-motion";


const RendaExtraSection = () => {
  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="max-w-5xl mx-auto">
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

          {/* Container with LED glow */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden"
            style={{
              borderRadius: "20px",
              padding: "30px 25px",
              background: "#111111",
              border: "1px solid #464646",
            }}
          >
            {/* Red LED glow bar */}
            <div
              className="absolute pointer-events-none left-[10%]"
              style={{
                top: "-1px",
                width: "30%",
                height: "3px",
                borderRadius: "2px",
                background: "linear-gradient(90deg, transparent 0%, hsl(0 100% 55%) 25%, hsl(0 100% 60%) 50%, hsl(0 100% 55%) 75%, transparent 100%)",
                zIndex: 10,
              }}
            />
            <div
              className="absolute pointer-events-none left-[5%]"
              style={{
                top: "-4px",
                width: "30%",
                height: "10px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.35) 0%, hsl(0 100% 50% / 0.15) 40%, transparent 70%)",
                filter: "blur(6px)",
                zIndex: 9,
              }}
            />

            {/* Shimmer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  left: "-40%",
                  width: "20%",
                  height: "160%",
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,240,240,0.04) 30%, rgba(255,255,255,0.015) 55%, transparent 75%)",
                  filter: "blur(15px)",
                  animation: "light-sweep 6s linear infinite",
                  transform: "skewX(-15deg)",
                }}
              />
            </div>

            <div className="relative z-10">
            {/* Cards vazios - conteúdo será adicionado depois */}
            </div>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
