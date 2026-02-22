import { LazyMotion, domAnimation, m } from "framer-motion";
import { GraduationCap, Package, Zap, CreditCard, Users, ShoppingBag, LucideIcon } from "lucide-react";

interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefitCards: BenefitCard[] = [
  {
    icon: GraduationCap,
    title: "+10.000 Cursos Completos",
    description: "Acesso a cursos de todas as áreas do digital, sempre atualizados.",
  },
  {
    icon: Package,
    title: "Atualizações Semanais",
    description: "Receba atualizações semanais com novos conteúdos, estratégias e materiais para se manter sempre à frente.",
  },
  {
    icon: Zap,
    title: "Ofertas Validadas Diárias",
    description: "Oportunidades testadas e aprovadas pela comunidade todos os dias.",
  },
  {
    icon: CreditCard,
    title: "Checkout com Taxa 70% Menor",
    description: "Venda seus produtos sem intermediários e maximize seus lucros.",
  },
  {
    icon: Users,
    title: "Programa de Afiliados",
    description: "Ganhe comissão por cada venda indicada dentro do ecossistema.",
  },
  {
    icon: ShoppingBag,
    title: "Produtos Prontos para Revenda",
    description: "PLRs, e-books e templates validados prontos para monetizar.",
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

          {/* 6 Benefit Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefitCards.map((card, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden"
                style={{
                  borderRadius: "20px",
                  padding: "24px",
                  background: "#111111",
                  border: "1px solid #464646",
                }}
              >
                {/* LED vermelho no topo */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{
                    top: "-1px",
                    width: "50%",
                    height: "3px",
                    borderRadius: "2px",
                    background:
                      "linear-gradient(90deg, transparent 0%, hsl(0 100% 55%) 25%, hsl(0 100% 60%) 50%, hsl(0 100% 55%) 75%, transparent 100%)",
                  }}
                />
                {/* Glow blur */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{
                    top: "-4px",
                    width: "40%",
                    height: "10px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.35) 0%, hsl(0 100% 50% / 0.15) 40%, transparent 70%)",
                    filter: "blur(6px)",
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
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,240,240,0.04) 30%, rgba(255,255,255,0.015) 55%, transparent 75%)",
                      filter: "blur(15px)",
                      animation: "light-sweep 6s linear infinite",
                      transform: "skewX(-15deg)",
                    }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  <card.icon className="w-8 h-8 text-primary mb-4" />
                  <h4
                    className="text-white font-bold text-lg md:text-xl mb-2"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "#999", fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {card.description}
                  </p>
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
