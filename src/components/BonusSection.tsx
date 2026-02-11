import { motion } from "framer-motion";
import bonusMetodos from "@/assets/bonus-metodos.png";
import bonusOfertas from "@/assets/bonus-ofertas.jpeg";
import bonus2 from "@/assets/bonus-2.jpeg";
import bonusFornecedores from "@/assets/bonus-fornecedores.jpeg";
import bonusNetworking from "@/assets/bonus-networking.jpg";

interface BonusItem {
  number: number;
  image: string;
  title: string;
  description: string;
  originalPrice: string;
}

const bonusItems: BonusItem[] = [
  {
    number: 1,
    image: bonusMetodos,
    title: "Afiliação a Comunidade",
    description:
      "Seja afiliado da maior comunidade de todas, com uma estrutura completa, suporte e direcionamento para começar do jeito certo.",
    originalPrice: "R$ 497,00",
  },
  {
    number: 2,
    image: bonusOfertas,
    title: "Atualizações Semanalmente",
    description:
      "Receba atualizações semanais com novos conteúdos, estratégias e materiais para se manter sempre à frente.",
    originalPrice: "R$ 67,00",
  },
  {
    number: 3,
    image: bonus2,
    title: "Consulta de dados via Telegram",
    description: "Puxada de dados exclusiva, própria da comunidade",
    originalPrice: "R$ 97,00",
  },
  {
    number: 4,
    image: bonusFornecedores,
    title: "Fornecedores de Rateio",
    description:
      "Acesso direto a fornecedores de cursos, ferramentas e materiais do digital",
    originalPrice: "R$ 197,00",
  },
  {
    number: 5,
    image: bonusNetworking,
    title: "Grupos de Networking no WhatsApp",
    description:
      "Acesso a grupos ativos no WhatsApp com membros que trocam experiências, estratégias e oportunidades todos os dias...",
    originalPrice: "R$ 97,00",
  },
];

{/* Badge verde "NESSA OFERTA: GRÁTIS" — réplica exata do ratoflix */}
const NessaOfertaGratis = () => (
  <div
    className="inline-flex items-center gap-2 w-fit mt-5"
    style={{
      backgroundColor: "#0F6F1C",
      borderRadius: "10px",
      padding: "6px 14px 6px 8px",
    }}
  >
    {/* Checkmark SVG com fundo verde arredondado */}
    <svg
      className="w-7 h-7 flex-shrink-0"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="greenBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ecc2e" />
          <stop offset="100%" stopColor="#1a9e1a" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#greenBg)" />
      <path
        d="M13 24.5L21 32.5L35 16.5"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))"
      />
    </svg>
    <span
      className="text-white font-bold text-[15px] md:text-base tracking-wide"
      style={{ fontFamily: "'Articulat CF', sans-serif" }}
    >
      NESSA OFERTA: <span className="font-extrabold">GRÁTIS</span>
    </span>
  </div>
);

const BonusCard = ({ bonus, index }: { bonus: BonusItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-[1060px] mx-auto"
    >
      {/* Card — border #464646, border-radius 20px, padding 25px, gap 20px */}
      <div
        className="group relative overflow-hidden transition-all duration-500 hover:border-[#666666]"
        style={{
          border: "1px solid #464646",
          borderRadius: "20px",
          padding: "25px",
          background: "transparent",
        }}
      >
        {/* Card content — flex row on desktop, column on mobile */}
        <div className="flex flex-col md:flex-row items-center" style={{ gap: "20px" }}>
          {/* Image container */}
          <div className="w-full md:w-[340px] lg:w-[380px] flex-shrink-0 flex items-center justify-center">
            <img
              src={bonus.image}
              alt={bonus.title}
              className="w-[260px] md:w-[300px] lg:w-[340px] h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center w-full">
            {/* Bonus number badge — vermelho, tracking largo */}
            <span
              className="text-[#FF0000] font-medium text-sm md:text-[15px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              #BÔNUS {bonus.number}
            </span>

            {/* Title — branco, bold, grande */}
            <h3
              className="text-white font-bold text-2xl md:text-[2rem] lg:text-[2.4rem] leading-[1.15] mt-3"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              {bonus.title}
            </h3>

            {/* Description — cinza claro */}
            <p
              className="text-[#999999] text-sm md:text-[15px] leading-relaxed mt-3 max-w-[500px]"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              {bonus.description}
            </p>

            {/* Price — "De R$ XX,00" riscado */}
            <p
              className="text-white text-xl md:text-2xl font-light mt-5"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              De{" "}
              <span className="line-through text-white/70">
                {bonus.originalPrice}
              </span>
            </p>

            {/* Badge verde */}
            <NessaOfertaGratis />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BonusSection = () => {
  return (
    <section className="w-full pt-[8rem] md:pt-8 pb-10 md:pb-16 px-4 md:px-6 bg-background relative z-50">
      <div className="max-w-7xl mx-auto relative z-50">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Bônus exclusivos da{" "}
            <span className="text-primary">Rise Community</span>
          </h2>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-3"
            style={{ fontFamily: "'Articulat CF', sans-serif" }}
          >
            Só esses diferenciais já valeriam o investimento, mas você leva tudo
            incluso no acesso vitalício.
          </p>
        </motion.div>

        {/* Bonus cards — gap entre cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {bonusItems.map((bonus, index) => (
            <BonusCard key={bonus.number} bonus={bonus} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
