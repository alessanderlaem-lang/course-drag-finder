import { Users, Bot, Search as SearchIcon, Package, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import bonusMetodos from "@/assets/bonus-metodos.png";

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
                  className="group relative h-full flex flex-col items-center justify-start bg-background border border-white/10 p-6 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-300 min-h-[500px] w-full max-w-lg mx-auto"
                >
                  <img 
                    src={bonusMetodos} 
                    alt="Bônus Métodos" 
                    className="w-full h-auto object-contain"
                  />
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
