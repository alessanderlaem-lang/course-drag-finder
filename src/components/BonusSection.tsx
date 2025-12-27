import { Users, Bot, Search as SearchIcon, Package, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    },
    {
      icon: SearchIcon,
      title: "Puxador de Dados Vitalício",
      subtitle: "Ferramenta Premium",
      description: "Consultas ilimitadas 24/7. CPF, CNPJ, Veículos e muito mais. Acesso vitalício garantido sem mensalidades.",
      originalPrice: "R$ 97,00",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: Bot,
      title: "Agentes de IA Exclusivos",
      subtitle: "Automação Avançada",
      description: "Bots treinados para copywriting, suporte e vendas. Multiplique sua produtividade com inteligência artificial.",
      originalPrice: "R$ 197,00",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      icon: Users,
      title: "Networking de Elite",
      subtitle: "Comunidade VIP",
      description: "Entre para grupos de WhatsApp e Discord com players que realmente faturam. Troque experiências e faça negócios.",
      originalPrice: "R$ 97,00",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  return (
    <section className="w-full pt-[8rem] md:pt-16 pb-6 md:pb-8 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-6 md:mb-8 space-y-2">
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
                  className="group relative h-full flex flex-col bg-background border border-white/10 p-6 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
                >
                  {/* Top Highlight Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Header Card */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${bonus.bg} ${bonus.border} border`}>
                      <Icon className={`w-6 h-6 ${bonus.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-white/5 text-gray-400 border-white/10 font-normal text-xs">
                      {bonus.subtitle}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {bonus.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Pricing Footer */}
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Valor real</span>
                        <span className="text-sm font-medium text-gray-400 line-through decoration-red-500/50">
                          {bonus.originalPrice}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1">
                          Grátis
                        </span>
                        <span className="flex items-center gap-1 text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">
                          <Check className="w-3 h-3" />
                          Incluso
                        </span>
                      </div>
                    </div>
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
