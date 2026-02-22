import { LazyMotion, domAnimation, m } from "framer-motion";

import bonusOfertas from "@/assets/bonus-ofertas.jpeg";
import bonus2 from "@/assets/bonus-2.jpeg";
import bonusNetworking from "@/assets/bonus-networking-new.webp";

interface BenefitCard {
  image: string;
  title: string;
  description: string;
}

const benefitCards: BenefitCard[] = [
  {
    image: bonusOfertas,
    title: "+10k de Cursos via Fornecedores",
    description: "Tenha acesso a cursos de diversos nichos: marketing, design, programação, finanças, idiomas e muito mais.",
  },
  {
    image: bonus2,
    title: "Atualizações Semanais",
    description: "Receba atualizações semanais com novos conteúdos, estratégias e materiais para se manter sempre à frente.",
  },
  {
    image: bonusNetworking,
    title: "Grupos de Networking no WhatsApp",
    description: "Acesso a grupos ativos no WhatsApp com membros que trocam experiências, estratégias e oportunidades todos os dias.",
  },
];

const AboutSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-4">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
              <span className="text-white">O Que Você Vai </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Receber
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Vamos ao que interessa. Veja na prática tudo que você vai receber de forma vitalícia entrando na{" "}
              <strong>Rise Community</strong> hoje.
            </p>
          </div>

          {/* Video Banner Placeholder */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div
              className="w-full bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: "16 / 9",
                border: "2px solid #333",
              }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-gray-400">Espaço reservado para vídeo</p>
              </div>
            </div>
          </div>

          {/* Benefit Cards — stacked vertically */}
          <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8">
            {benefitCards.map((card, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-[1060px] md:max-w-[860px] lg:max-w-[940px] mx-auto"
              >
                <div
                  className="group relative overflow-hidden transition-all duration-500"
                  style={{
                    borderRadius: "20px",
                    padding: "25px",
                    background: "#111111",
                    border: "1px solid #464646",
                  }}
                >
                  {/* Red LED glow bar at top */}
                  <div
                    className="absolute pointer-events-none left-[12%] md:left-[7%]"
                    style={{
                      top: "-1px",
                      width: "28%",
                      height: "3px",
                      borderRadius: "2px",
                      background: "linear-gradient(90deg, transparent 0%, hsl(0 100% 55%) 25%, hsl(0 100% 60%) 50%, hsl(0 100% 55%) 75%, transparent 100%)",
                      zIndex: 10,
                    }}
                  />
                  {/* Glow layer */}
                  <div
                    className="absolute pointer-events-none left-[7%] md:left-[2%]"
                    style={{
                      top: "-4px",
                      width: "28%",
                      height: "10px",
                      borderRadius: "50%",
                      background: "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.35) 0%, hsl(0 100% 50% / 0.15) 40%, transparent 70%)",
                      filter: "blur(6px)",
                      zIndex: 9,
                    }}
                  />

                  {/* Light sweep shimmer */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
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

                  {/* Card content — flex row on desktop, column on mobile */}
                  <div className="flex flex-col md:flex-row items-center" style={{ gap: "20px" }}>
                    {/* Image */}
                    <div className="w-full md:w-[340px] lg:w-[380px] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-[260px] md:w-[300px] lg:w-[340px] h-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center w-full">
                      <h4
                        className="text-white font-bold text-2xl md:text-[2rem] lg:text-[2.4rem] leading-[1.15] uppercase"
                        style={{ fontFamily: "'Articulat CF', sans-serif" }}
                      >
                        {card.title}
                      </h4>
                      <p
                        className="text-sm md:text-[15px] leading-relaxed mt-3 max-w-[500px]"
                        style={{ color: "#999", fontFamily: "'Articulat CF', sans-serif" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default AboutSection;
