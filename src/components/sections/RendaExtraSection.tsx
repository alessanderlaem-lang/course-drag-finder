import { LazyMotion, domAnimation, m } from "framer-motion";
import vendaAprovada from "@/assets/venda-aprovada.jpg";
import { Users, ShoppingCart, Bot, Briefcase, Gift, TrendingUp, Megaphone, Repeat } from "lucide-react";

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
      <section className="w-full pt-20 md:pt-32 pb-16 md:pb-24 bg-background">
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

        {/* Grid de cards */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 md:px-6"
        >
          <div
            className="rounded-[20px] border border-[#464646] bg-[#111111] p-6 md:p-10 relative overflow-hidden"
          >
            {/* LED glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Users, title: "Programa de Afiliados", desc: "Comissão em cada venda indicada" },
                { icon: ShoppingCart, title: "Revenda de PLRs", desc: "Produtos prontos para revender" },
                { icon: Bot, title: "Robôs & Automação", desc: "Bots que geram renda no piloto" },
                { icon: Briefcase, title: "Freelancer Digital", desc: "Use as skills aprendidas aqui" },
                { icon: Gift, title: "Checkout Próprio", desc: "Venda com taxa 70% menor" },
                { icon: TrendingUp, title: "Ofertas Validadas", desc: "Oportunidades diárias testadas" },
                { icon: Megaphone, title: "Criação de Infoprodutos", desc: "Crie e venda seus produtos" },
                { icon: Repeat, title: "Dropshipping", desc: "Venda sem estoque próprio" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl bg-[#0D0D0D] border border-[#333] hover:border-primary/40 transition-colors duration-300 gap-2"
                >
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-1" />
                  <h4
                    className="text-white font-bold text-xs md:text-sm leading-tight"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[#999] text-[10px] md:text-xs leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </m.div>

        {/* Row 1 - scrolling left */}
        <div className="mt-10 md:mt-14 relative z-10">
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
