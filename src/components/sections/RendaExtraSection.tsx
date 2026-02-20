import { LazyMotion, domAnimation, m } from "framer-motion";

const incomeItems = [
  { emoji: "🤝", title: "Programa de Afiliados", desc: "Ganhe comissões indicando a Rise para novos membros" },
  { emoji: "📦", title: "Revenda de PLRs", desc: "Personalize e venda produtos digitais prontos" },
  { emoji: "💻", title: "Freelancer Digital", desc: "Use as habilidades aprendidas para prestar serviços" },
  { emoji: "🛒", title: "Dropshipping & E-commerce", desc: "Monte sua loja com fornecedores e estratégias da comunidade" },
  { emoji: "🎯", title: "Criação de Infoprodutos", desc: "Crie e venda seus próprios cursos e materiais" },
  { emoji: "🤖", title: "Automações & Bots", desc: "Venda soluções automatizadas para empresas e profissionais" },
  { emoji: "🎨", title: "Design & Criativos", desc: "Ofereça serviços de design usando os packs disponíveis" },
  { emoji: "📈", title: "Gestão de Tráfego", desc: "Gerencie anúncios para clientes com as estratégias da Rise" },
];

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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {incomeItems.map((item, i) => (
                  <m.div
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
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Articulat CF', sans-serif",
                background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                boxShadow: "0 0 30px rgba(255,0,0,0.3)",
              }}
            >
              Quero começar a lucrar
            </button>
            <p
              className="text-white/40 text-xs mt-3"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Acesso vitalício · Comunidade ativa · Suporte contínuo
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
