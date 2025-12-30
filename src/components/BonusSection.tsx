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
        <div className="flex mb-8">
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
                className="w-[280px] h-auto object-contain flex-shrink-0"
              />
              <div className="flex flex-col text-left ml-64">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/30 pt-0 pl-6 pr-0 pb-12 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[140px] w-full max-w-lg"
            >
              <img 
                src={bonusOfertas} 
                alt="Bônus 2" 
                className="w-full h-auto object-contain -mt-4 translate-y-12"
              />
              <div className="w-full text-left -ml-6 mt-6 translate-y-16">
                <span className="text-primary font-light text-[10px] tracking-[0.2em]">#BÔNUS 2</span>
                <p className="text-foreground font-bold text-4xl md:text-5xl mt-2 whitespace-nowrap">RiseOffers - Ofertas</p>
                <p className="text-foreground font-bold text-4xl md:text-5xl whitespace-nowrap">Escaladas</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 whitespace-nowrap">Ofertas diárias e organizadas para aplicar e escalar.</p>
                <p className="text-muted-foreground font-light text-[16px] whitespace-nowrap">Tudo organizado em um só lugar.</p>
                <p className="text-foreground font-light text-2xl mt-6">De <span className="line-through">R$ 67,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6.5rem] -mt-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/30 pt-0 pl-6 pr-0 pb-20 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[140px] w-full max-w-lg"
            >
              <img 
                src={bonus2} 
                alt="Bônus 3" 
                className="w-3/4 h-auto object-contain -mt-4 translate-y-16"
              />
              <div className="w-full text-left -ml-6 mt-6 translate-y-24">
                <span className="text-primary font-light text-[10px] tracking-[0.2em]">#BÔNUS 3</span>
                <p className="text-foreground font-bold text-4xl md:text-5xl mt-2 whitespace-nowrap">Consulta de dados via</p>
                <p className="text-foreground font-bold text-4xl md:text-5xl whitespace-nowrap">Telegram</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 whitespace-nowrap">Puxada de dados exclusiva, própria da comunidade</p>
                <p className="text-foreground font-light text-2xl mt-6">De <span className="line-through">R$ 97,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6.5rem] -mt-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/30 pt-0 pl-6 pr-0 pb-16 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[140px] w-full max-w-lg"
            >
              <img 
                src={bonusFornecedores} 
                alt="Bônus 4" 
                className="w-[85%] h-auto object-contain -mt-4 translate-y-16"
              />
              <div className="w-full text-left -ml-6 mt-6 translate-y-20">
                <span className="text-primary font-light text-[10px] tracking-[0.2em]">#BÔNUS 4</span>
                <p className="text-foreground font-bold text-4xl md:text-5xl mt-2 whitespace-nowrap">Fornecedores de</p>
                <p className="text-foreground font-bold text-4xl md:text-5xl whitespace-nowrap">Rateio</p>
                <p className="text-muted-foreground font-light text-[16px] mt-2 whitespace-nowrap">Acesso a milhares de fornecedores</p>
                <p className="text-muted-foreground font-light text-[16px] whitespace-nowrap">ferramentas e materiais do digital</p>
                <p className="text-foreground font-light text-2xl mt-6">De <span className="line-through">R$ 197,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6.5rem] -mt-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Bônus 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/30 pt-0 pl-6 pr-0 pb-8 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[140px] w-full max-w-lg"
            >
              <img 
                src={bonusNetworking} 
                alt="Bônus 5" 
                className="w-[85%] h-auto object-contain -mt-4 translate-y-8"
              />
              <div className="w-full text-left -ml-6 mt-6 translate-y-12">
                <span className="text-primary font-light text-[10px] tracking-[0.2em]">#BÔNUS 5</span>
                <p className="text-foreground font-bold text-4xl md:text-5xl mt-2 whitespace-nowrap">Grupos de networking</p>
                <p className="text-foreground font-bold text-4xl md:text-5xl whitespace-nowrap">no WhatsApp</p>
                <p className="text-muted-foreground font-light text-[14px] mt-2 whitespace-nowrap">Acesso a grupos ativos no WhatsApp com membros que trocam</p>
                <p className="text-muted-foreground font-light text-[14px] whitespace-nowrap">experiências, estratégias e oportunidades todos os dias...</p>
                <p className="text-foreground font-light text-2xl mt-6">De <span className="line-through">R$ 97,00</span></p>
                <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-[6.5rem] -mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
