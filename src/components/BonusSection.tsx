import { Users, Bot, Search as SearchIcon, Package, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import bonusMetodos from "@/assets/bonus-metodos.png";
import nessaOfertaGratis from "@/assets/nessa-oferta-gratis.png";

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
    <section className="w-full pt-[20rem] md:pt-32 pb-6 md:pb-8 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-6 md:mb-8 space-y-2 relative z-50">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Bônus exclusivos da <span className="text-primary">Rise Community</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Só esses diferenciais já valeriam o investimento, mas você leva tudo incluso no acesso vitalício.
          </p>
        </div>

        {/* Grid de Bônus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/30 pt-0 px-6 pb-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[500px] w-full max-w-lg mx-auto"
                >
                  <img 
                    src={bonusMetodos} 
                    alt="Bônus Métodos" 
                    className="w-full h-auto object-contain -mt-4"
                  />
                  <div className="w-full text-left -ml-6 mt-6 flex flex-col flex-1">
                    <span className="text-primary font-light text-[10px] tracking-[0.2em]">#BÔNUS 1</span>
                    <p className="text-foreground font-bold text-2xl mt-2">Afiliação a comunidade</p>
                    <p className="text-muted-foreground font-light text-[10px] mt-3 whitespace-nowrap">Seja afiliado da maior comunidade de todas, com uma estrutura</p>
                    <p className="text-muted-foreground font-light text-[10px] whitespace-nowrap">completa, suporte e direcionamento para começar do jeito certo.</p>
                    <p className="text-foreground font-light text-sm mt-3">De <span className="line-through">R$ 497,00</span></p>
                    <img src={nessaOfertaGratis} alt="Nessa oferta: Grátis" className="h-20 mt-auto" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
