import { LazyMotion, domAnimation, m } from "framer-motion";
import { Check, DollarSign, RefreshCw, Users, TrendingUp, Zap, ShoppingBag } from "lucide-react";
import rendaExtraPhones from "@/assets/renda-extra-phones.png";

const checklistItems = [
  "Revenda de produtos da comunidade",
  "Dropshipping com fornecedores exclusivos",
  "Produtos prontos para revender",
  "Criação de infoprodutos do zero",
  "Programa de Afiliados com comissão generosa",
  "Revenda de produtos da comunidade",
  "Renda recorrente e escalável",
  "Recupere o investimento em poucas vendas",
];

const badges = [
  { icon: DollarSign, label: "Comissão por venda" },
  { icon: RefreshCw, label: "Renda recorrente" },
  { icon: Users, label: "Suporte completo" },
];

const RendaExtraSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full py-10 md:py-24 bg-background">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 md:px-6"
        >
          <div className="rounded-[20px] border border-[#464646] bg-[#111111] p-4 md:p-10 relative overflow-hidden">
            {/* LED glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            {/* Glow blur */}
            <div
              className="absolute pointer-events-none left-1/2 -translate-x-1/2"
              style={{
                top: "-4px",
                width: "40%",
                height: "10px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.35) 0%, hsl(0 100% 50% / 0.15) 40%, transparent 70%)",
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
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,240,240,0.04) 30%, rgba(255,255,255,0.015) 55%, transparent 75%)",
                  filter: "blur(15px)",
                  animation: "light-sweep 6s linear infinite",
                  transform: "skewX(-15deg)",
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="text-xl md:text-3xl lg:text-4xl font-bold mb-1.5 relative z-10"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              <span className="text-white">Transforme Conhecimento em </span>
              <span className="text-primary">Renda Extra</span>
            </h3>

            {/* Description */}
            <p
              className="text-xs md:text-base text-[#bbb] leading-relaxed mb-4 md:mb-6 max-w-2xl relative z-10"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Dentro da Rise, você não aprende só — você monetiza. São diversas formas de gerar
              renda extra usando o que a comunidade oferece. Sem precisar criar do zero, sem experiência prévia.
            </p>

            {/* Checklist 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 md:gap-y-2 mb-4 md:mb-6 relative z-10">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-0.5 md:py-1">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span
                    className="text-white/90 text-xs md:text-base"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 md:gap-2 bg-primary/10 border border-primary/30 text-primary text-[10px] md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg"
                >
                  <badge.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
