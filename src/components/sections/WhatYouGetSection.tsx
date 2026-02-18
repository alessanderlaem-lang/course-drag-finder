import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Category images
import cat1 from "@/assets/categories/1.png";
import cat2 from "@/assets/categories/2.png";
import cat3 from "@/assets/categories/3.png";
import cat4 from "@/assets/categories/4.png";
import cat5 from "@/assets/categories/5.png";
import cat6 from "@/assets/categories/6.png";
import cat7 from "@/assets/categories/7.png";
import cat8 from "@/assets/categories/8.png";
import cat9 from "@/assets/categories/9.png";
import cat10 from "@/assets/categories/10.png";
import cat11 from "@/assets/categories/11.png";
import cat12 from "@/assets/categories/12.png";
import cat13 from "@/assets/categories/13.png";
import cat14 from "@/assets/categories/14.png";
import cat15 from "@/assets/categories/15.png";
import cat16 from "@/assets/categories/16.png";

const categories = [
  { img: cat1, label: "Marketing Digital" },
  { img: cat2, label: "Programação" },
  { img: cat3, label: "Design & Edição" },
  { img: cat4, label: "E-commerce" },
  { img: cat5, label: "Dropshipping" },
  { img: cat6, label: "Copywriting" },
  { img: cat7, label: "Tráfego Pago" },
  { img: cat8, label: "Redes Sociais" },
  { img: cat9, label: "Vendas" },
  { img: cat10, label: "Finanças" },
  { img: cat11, label: "Desenvolvimento" },
  { img: cat12, label: "Inteligência Artificial" },
  { img: cat13, label: "Idiomas" },
  { img: cat14, label: "Fotografia" },
  { img: cat15, label: "Música & Áudio" },
  { img: cat16, label: "E muito mais..." },
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
          className="relative overflow-hidden mb-10"
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
                  📚 Via fornecedores exclusivos
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="text-center text-white/60 text-sm uppercase tracking-[0.2em] mb-6"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Algumas das categorias disponíveis
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-full aspect-square rounded-xl overflow-hidden border border-[#333] hover:border-[#FF0000]/40 transition-colors duration-300"
                  style={{ background: "#111" }}
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span
                  className="text-white/70 text-[10px] md:text-xs text-center leading-tight"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
                  {cat.label}
                </span>
              </motion.div>
            ))}
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
