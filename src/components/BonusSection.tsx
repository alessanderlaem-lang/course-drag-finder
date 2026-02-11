import { Check } from "lucide-react";
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
    title: "RiseOffers - Ofertas Escaladas",
    description:
      "Ofertas diárias e organizadas para aplicar e escalar. Tudo organizado em um só lugar.",
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

const BonusCard = ({ bonus, index }: { bonus: BonusItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-[1060px] mx-auto"
    >
      <div className="group relative rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#0d0d0d] hover:border-red-500/25 transition-all duration-500">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/[0.02] group-hover:via-transparent group-hover:to-red-500/[0.02] transition-all duration-500 pointer-events-none" />

        {/* Card content - horizontal layout */}
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Image container */}
          <div className="relative w-full md:w-[380px] lg:w-[420px] flex-shrink-0 flex items-center justify-center p-6 md:p-8">
            {/* Subtle background for image area */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#0a0a0a]" />
            <img
              src={bonus.image}
              alt={bonus.title}
              className="relative z-10 w-[240px] md:w-[280px] lg:w-[320px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 pb-6 md:px-10 md:py-10 lg:px-12 lg:py-12 w-full">
            {/* Bonus badge */}
            <span
              className="text-[#FF0000] font-medium text-sm md:text-[15px] tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              #BÔNUS {bonus.number}
            </span>

            {/* Title */}
            <h3
              className="text-white font-bold text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.15] mb-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              {bonus.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#999999] text-sm md:text-base leading-relaxed mb-6 max-w-[480px]"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              {bonus.description}
            </p>

            {/* Price */}
            <p
              className="text-white/90 text-xl md:text-2xl font-light mb-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              De{" "}
              <span className="line-through text-white/60">
                {bonus.originalPrice}
              </span>
            </p>

            {/* Free badge - styled like the reference */}
            <div className="inline-flex items-center gap-2.5 bg-[#16a34a] rounded-lg px-5 py-2.5 w-fit shadow-lg shadow-green-500/20">
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
              <span
                className="text-white font-bold text-sm md:text-[15px] tracking-wide uppercase"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                Nessa oferta: Grátis
              </span>
            </div>
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

        {/* Bonus cards */}
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
