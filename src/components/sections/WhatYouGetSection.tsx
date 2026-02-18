import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rateioItems = [
  { emoji: "🛠️", title: "Source Code, SaaS & iGaming", desc: "O ativo mais valioso. Código da própria bet/software" },
  { emoji: "🛡️", title: "Contingência & Aquecimento de Chips", desc: "Ferramentas anti-bloqueio" },
  { emoji: "🔞", title: "Nicho Black & Hot (+18)", desc: "Conteúdo underground exclusivo" },
  { emoji: "🎨", title: "Pack de Design & Criativos Virais", desc: "Artes editáveis para anúncios" },
  { emoji: "🧩", title: "Pack de Extensões & Plugins Pro", desc: "Elementor Pro, WP Rocket, etc." },
  { emoji: "📲", title: "APKs Mod & Apps Premium", desc: "Softwares pagos desbloqueados" },
  { emoji: "💾", title: "Pack de +30k PLRs Premium", desc: "Produto pronto para venda rápida" },
  { emoji: "🤖", title: "Robôs & Automação (Zap/Insta)", desc: "Ferramentas de eficiência" },
  { emoji: "📄", title: "Páginas de Vendas Clonadas", desc: "Modelos de alta conversão prontos" },
  { emoji: "💬", title: "Scripts de Venda & Copy Pronta", desc: "Arquivos para copiar e colar" },
  { emoji: "🔔", title: "Gerador de Prova Social", desc: "Notificações que aumentam conversão" },
  { emoji: "🎬", title: "Edição de Vídeo & VSL", desc: "Templates, presets e projetos prontos para editar" },
];

const highlights = [
  "Tráfego Pago & Black Hat",
  "Marketing Digital & Lançamentos",
  "Programação & Desenvolvimento",
  "Design, VSL & Edição de Vídeo",
  "Dropshipping & E-commerce",
  "Copywriting & Vendas",
  "PLR & Infoprodutos",
  "E centenas de outras categorias...",
];

const WhatYouGetSection = () => {
  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
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
          </h2>
          <p
            className="text-sm md:text-base text-[#999] max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Acesso completo a mais de 10.000 cursos via fornecedores exclusivos, com atualizações diárias em todas as áreas do digital.
          </p>
        </motion.div>

        {/* Main Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden mb-14"
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

          {/* Content */}
          <div className="relative z-10">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              +10.000 Cursos Completos
              <br />
              <span className="text-[#FF0000]">via Fornecedores Exclusivos</span>
            </h3>
            <p
              className="text-[#999] text-sm md:text-[15px] leading-relaxed mt-4 max-w-[600px]"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Tenha acesso a fornecedores exclusivos que disponibilizam cursos completos de todas as áreas do mercado digital. Novos conteúdos são adicionados diariamente — você nunca mais paga caro por curso.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF0000]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#FF0000]" />
                  </div>
                  <span
                    className="text-white/90 text-sm md:text-[15px]"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div
                className="inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: "#0F6F1C",
                  borderRadius: "10px",
                  padding: "6px 14px",
                }}
              >
                <span
                  className="text-white font-bold text-[13px] md:text-sm tracking-wide"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
                  🔄 Atualizações diárias
                </span>
              </div>
              <div
                className="inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: "rgba(255,0,0,0.15)",
                  border: "1px solid rgba(255,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "6px 14px",
                }}
              >
                <span
                  className="text-white font-bold text-[13px] md:text-sm tracking-wide"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
                  📚 Fornecedores exclusivos
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rateio & Ferramentas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Container with border and LED glow */}
          <div
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
              className="absolute pointer-events-none right-[10%]"
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
              className="absolute pointer-events-none right-[5%]"
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
              <h3
                className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-3"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                Acesso Total ao Nosso{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Rateio & Ferramentas
                </span>
              </h3>
              <p
                className="text-center text-sm md:text-base max-w-2xl mx-auto mb-8"
                style={{ fontFamily: "'Articulat CF', sans-serif", color: "#FF0000" }}
              >
                Ferramentas premium, scripts e ativos que custam uma fortuna lá fora, liberados para você usar.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {rateioItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="rounded-xl border border-[#333] hover:border-[#FF0000]/40 transition-all duration-300 p-4 md:p-5 flex flex-col items-center text-center gap-2.5"
                    style={{ background: "#0D0D0D" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1a1a1a";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0D0D0D";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.1)" }}>
                      <span className="text-2xl md:text-3xl">{item.emoji}</span>
                    </div>
                    <span
                      className="text-white font-bold text-xs md:text-sm leading-tight"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="text-[#999] text-[11px] md:text-xs leading-snug"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p
            className="text-white/60 text-sm md:text-base italic mb-6 max-w-xl mx-auto"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Isso é menos de 5% do que tem lá dentro. Se fossemos listar tudo, essa página ficaria infinita.
          </p>
          <button
            onClick={scrollToPricing}
            className="px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "'Articulat CF', sans-serif",
              background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
              boxShadow: "0 0 30px rgba(255,0,0,0.3)",
            }}
          >
            Quero ter acesso agora
          </button>
          <p
            className="text-white/40 text-xs mt-3"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Acesso vitalício · Atualizações diárias · Via fornecedores exclusivos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
