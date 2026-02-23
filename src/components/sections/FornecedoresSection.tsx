import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  BookOpen,
  Tv,
  Wrench,
  FileText,
  Palette,
  Search,
} from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Rateio de Cursos",
    description: "Acesso a cursos premium por uma fração do preço original",
  },
  {
    icon: Tv,
    title: "Streaming",
    description: "Contas e acessos a plataformas de streaming populares",
  },
  {
    icon: Wrench,
    title: "Ferramentas Premium",
    description: "ChatGPT, Canva Pro, CapCut e +50 ferramentas do digital",
  },
  {
    icon: FileText,
    title: "Templates & PLRs",
    description: "Produtos prontos para revenda e uso imediato",
  },
  {
    icon: Palette,
    title: "Materiais do Digital",
    description: "Criativos, copys e funis validados prontos para usar",
  },
  {
    icon: Search,
    title: "Consulta de Dados",
    description: "Puxada de dados exclusiva via Telegram da comunidade",
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

          {/* Premium container */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden"
            style={{
              borderRadius: "24px",
              padding: "32px 24px",
              background: "#111111",
              border: "1px solid #464646",
            }}
          >
            {/* Red LED glow bar */}
            <div
              className="absolute pointer-events-none left-[20%]"
              style={{
                top: "-1px",
                width: "60%",
                height: "3px",
                borderRadius: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(0 100% 55%) 25%, hsl(0 100% 60%) 50%, hsl(0 100% 55%) 75%, transparent 100%)",
                zIndex: 10,
              }}
            />
            {/* Glow layer */}
            <div
              className="absolute pointer-events-none left-[15%]"
              style={{
                top: "-4px",
                width: "70%",
                height: "12px",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.35) 0%, hsl(0 100% 50% / 0.15) 40%, transparent 70%)",
                filter: "blur(6px)",
                zIndex: 9,
              }}
            />

            {/* Shimmer */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
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

            {/* Inner heading */}
            <div className="text-center mb-8 relative z-10">
              <p
                className="text-muted-foreground text-xs md:text-sm tracking-wide uppercase"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                +50 fornecedores verificados em
              </p>
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 relative z-10">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <m.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                      style={{
                        background: "rgba(255,0,0,0.1)",
                        border: "1px solid rgba(255,0,0,0.15)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 md:w-6 md:h-6 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-foreground font-bold text-sm md:text-base mb-1.5"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      {cat.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-muted-foreground text-xs md:text-sm leading-relaxed"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      {cat.description}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default FornecedoresSection;
