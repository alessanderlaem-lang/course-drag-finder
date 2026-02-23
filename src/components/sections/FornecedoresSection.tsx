import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  BookOpen,
  Package,
  Zap,
  CreditCard,
  Wrench,
  Search,
  LucideIcon,
} from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    icon: BookOpen,
    title: "+10.000 Cursos Completos",
    description: "Acesso a cursos de todas as áreas do digital, sempre atualizados.",
  },
  {
    icon: Package,
    title: "Fornecedores Exclusivos",
    description: "Lista secreta de fornecedores de rateio e ferramentas premium.",
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
    icon: Wrench,
    title: "Ferramentas Premium",
    description: "ChatGPT, Canva Pro, CapCut e +50 ferramentas do digital.",
  },
  {
    icon: Search,
    title: "Consulta de Dados",
    description: "Puxada de dados exclusiva via Telegram da comunidade.",
  },
];

const FornecedoresSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full pt-[8rem] md:pt-8 pb-10 md:pb-16 px-4 md:px-6 bg-background relative z-50">
        <div className="max-w-5xl mx-auto relative z-50">
          {/* Section header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <span
              className="text-primary font-light text-sm md:text-[15px] tracking-[0.3em] uppercase block mb-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              ACESSO EXCLUSIVO
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Fornecedores de{" "}
              <span className="text-primary">Tudo</span>
            </h2>
            <p
              className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Acesso direto a fornecedores verificados de diversas categorias.
              Tudo organizado e atualizado dentro da comunidade.
            </p>
          </m.div>

          {/* Stacked cards */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-[940px] mx-auto">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <m.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
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
                    {/* Red LED glow bar */}
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

                    {/* Shimmer */}
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

                    {/* Card content */}
                    <div className="flex items-start gap-5 relative z-10">
                      <Icon
                        className="w-8 h-8 text-primary shrink-0 mt-1"
                        strokeWidth={1.5}
                      />
                      <div>
                        <h4
                          className="text-foreground font-bold text-xl md:text-2xl lg:text-[1.75rem] leading-tight uppercase"
                          style={{ fontFamily: "'Articulat CF', sans-serif" }}
                        >
                          {cat.title}
                        </h4>
                        <p
                          className="text-sm md:text-[15px] leading-relaxed mt-2 max-w-[500px]"
                          style={{ color: "#999", fontFamily: "'Articulat CF', sans-serif" }}
                        >
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default FornecedoresSection;
