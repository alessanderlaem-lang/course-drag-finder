import { Users, Bot, Search as SearchIcon, Package, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import bonusMetodos from "@/assets/bonus-metodos.png";
import bonus2 from "@/assets/bonus-2.jpeg";
import bonusOfertas from "@/assets/bonus-ofertas.jpeg";
import nessaOfertaGratis from "@/assets/nessa-oferta-gratis.png";
import bonusFornecedores from "@/assets/bonus-fornecedores.jpeg";
import bonusNetworking from "@/assets/bonus-networking.jpg";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Package,
      title: "Fornecedores de Rateio",
      subtitle: "Acesso Exclusivo",
      description: "A lista secreta de fornecedores que os gurus usam. Economize até 90% em ferramentas e serviços essenciais.",
      originalPrice: "R$ 67,00",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section className="w-full pt-[6rem] md:pt-8 pb-6 md:pb-8 px-4 md:px-6 bg-background relative z-50">
      <div className="max-w-7xl mx-auto relative z-50">
        {/* Título */}
        <div className="text-center mb-6 md:mb-8 space-y-2 relative z-50">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Bônus exclusivos da <span className="text-primary">Rise Community</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Só esses diferenciais já valeriam o investimento, mas você leva tudo incluso no acesso vitalício.
          </p>
        </div>

        {/* Card Bônus 1 */}
        <div className="flex mb-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full max-w-5xl"
          >
            <div 
              className="group relative h-full flex flex-row items-center justify-start bg-background border border-white/30 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 w-full gap-8"
            >
              <img 
                src={bonusMetodos} 
                alt="Bônus Métodos" 
                className="w-[340px] h-auto object-contain flex-shrink-0 md:translate-x-24 md:scale-125 origin-center"
              />
              <div className="flex flex-col text-left ml-64 md:-translate-x-16">
                <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">#BÔNUS 1</span>
                <p className="text-foreground font-bold text-4xl md:text-5xl mt-2">Afiliação a</p>
                <p className="text-foreground font-bold text-4xl md:text-5xl">Comunidade</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 translate-y-2">Seja afiliado da maior comunidade de todas,<br/>com uma estrutura completa,<br/>suporte e direcionamento para começar do jeito certo.</p>
                <p className="text-foreground font-light text-3xl mt-6">De <span className="line-through">R$ 497,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6rem] -mt-2 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 2 */}
        <div className="flex mb-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full max-w-5xl"
          >
            <div 
              className="group relative h-full flex flex-row items-center justify-start bg-background border border-white/30 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 w-full gap-8"
            >
              <img 
                src={bonusOfertas} 
                alt="Bônus Ofertas" 
                className="w-[340px] h-auto object-contain flex-shrink-0 md:translate-x-24 md:scale-125 origin-center"
              />
              <div className="flex flex-col text-left ml-64 md:-translate-x-16">
                <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">#BÔNUS 2</span>
                <p className="text-foreground font-bold text-3xl md:text-4xl mt-2">RiseOffers - Ofertas</p>
                <p className="text-foreground font-bold text-3xl md:text-4xl">Escaladas</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 translate-y-2">Ofertas diárias e organizadas para aplicar e escalar.<br/>Tudo organizado em um só lugar.</p>
                <p className="text-foreground font-light text-3xl mt-6">De <span className="line-through">R$ 67,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6rem] -mt-2 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 3 */}
        <div className="flex mb-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full max-w-5xl"
          >
            <div 
              className="group relative h-full flex flex-row items-center justify-start bg-background border border-white/30 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 w-full gap-8"
            >
              <img 
                src={bonus2} 
                alt="Bônus Telegram" 
                className="w-[280px] h-auto object-contain flex-shrink-0 md:translate-x-24 md:scale-110 origin-center"
              />
              <div className="flex flex-col text-left ml-[19rem] md:-translate-x-10">
                <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">#BÔNUS 3</span>
                <p className="text-foreground font-bold text-3xl md:text-4xl mt-2">Consulta de dados</p>
                <p className="text-foreground font-bold text-3xl md:text-4xl">via Telegram</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 translate-y-2">Puxada de dados exclusiva, própria da comunidade</p>
                <p className="text-foreground font-light text-3xl mt-6">De <span className="line-through">R$ 97,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6rem] -mt-2 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 4 */}
        <div className="flex mb-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full max-w-5xl"
          >
            <div 
              className="group relative h-full flex flex-row items-center justify-start bg-background border border-white/30 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 w-full gap-8"
            >
              <img 
                src={bonusFornecedores} 
                alt="Bônus Fornecedores" 
                className="w-[340px] h-auto object-contain flex-shrink-0 md:translate-x-24 md:scale-125 origin-center"
              />
              <div className="flex flex-col text-left ml-64 md:-translate-x-16">
                <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">#BÔNUS 4</span>
                <p className="text-foreground font-bold text-3xl md:text-4xl mt-2">Fornecedores de</p>
                <p className="text-foreground font-bold text-3xl md:text-4xl">Rateio</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 translate-y-2">Acesso a milhares de fornecedores<br/>ferramentas e materiais do digital</p>
                <p className="text-foreground font-light text-3xl mt-6">De <span className="line-through">R$ 197,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6rem] -mt-2 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 5 */}
        <div className="flex mb-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full max-w-5xl"
          >
            <div 
              className="group relative h-full flex flex-row items-center justify-start bg-background border border-white/30 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 w-full gap-8"
            >
              <img 
                src={bonusNetworking} 
                alt="Bônus Networking" 
                className="w-[340px] h-auto object-contain flex-shrink-0 md:translate-x-24 md:scale-125 origin-center"
              />
              <div className="flex flex-col text-left ml-64 md:-translate-x-16">
                <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">#BÔNUS 5</span>
                <p className="text-foreground font-bold text-3xl md:text-4xl mt-2">Grupos de networking</p>
                <p className="text-foreground font-bold text-3xl md:text-4xl">no WhatsApp</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 translate-y-2">Acesso a grupos ativos no WhatsApp com membros que trocam<br/>experiências, estratégias e oportunidades todos os dias...</p>
                <p className="text-foreground font-light text-3xl mt-6">De <span className="line-through">R$ 97,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6rem] -mt-2 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
