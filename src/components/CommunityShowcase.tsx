import { useState, useEffect, useRef } from "react";
import { 
  Target, 
  PenTool, 
  Rocket, 
  ShoppingBag, 
  Palette,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap,
  Users,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PillarContent {
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
  highlight: string;
  gradient: string;
}

const CommunityShowcase = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para animação de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars: PillarContent[] = [
    {
      title: "Tráfego Pago que Converte",
      description: "Facebook Ads, Google Ads, Kwai Ads, TikTok Ads. Aprenda a escalar campanhas lucrativas com quem já faturou milhões.",
      icon: Target,
      items: [
        "Cursos completos de tráfego pago",
        "Estratégias atualizadas semanalmente",
        "Estratégias reais de escala",
        "Otimização de ROI e ROAS"
      ],
      highlight: "Do básico à escala avançada",
      gradient: "from-red-500/20 via-orange-500/20 to-red-500/20"
    },
    {
      title: "Copy que Vende",
      description: "Domine a arte de escrever textos que convertem. Scripts de VSL, páginas de vendas, e-mails e anúncios que geram resultado.",
      icon: PenTool,
      items: [
        "Templates de copy prontos para usar",
        "Fórmulas comprovadas de persuasão",
        "Scripts de VSL que convertem",
        "Copywriting para anúncios pagos"
      ],
      highlight: "Escreva como os melhores",
      gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20"
    },
    {
      title: "Crie e Lance Produtos Digitais",
      description: "Aprenda a criar, validar e lançar infoprodutos do zero. Estratégias de lançamento que geraram 6 e 7 dígitos.",
      icon: Rocket,
      items: [
        "Fórmula completa de lançamento",
        "Validação de produto e nicho",
        "Automação de vendas",
        "Estratégias de pré-lançamento",
        "Escalação pós-lançamento"
      ],
      highlight: "Do zero ao primeiro lançamento",
      gradient: "from-blue-500/20 via-cyan-500/20 to-red-500/20"
    },
    {
      title: "Venda Produtos Físicos Online",
      description: "Estratégias completas de e-commerce, dropshipping, Shopee e marketplaces. Do zero ao primeiro faturamento.",
      icon: ShoppingBag,
      items: [
        "Fornecedores validados",
        "Produtos vencedores testados",
        "Automação de lojas online",
        "Estratégias de marketplaces",
        "Dropshipping nacional e internacional"
      ],
      highlight: "Produtos prontos para revender",
      gradient: "from-green-500/20 via-emerald-500/20 to-red-500/20"
    },
    {
      title: "Crie Conteúdo Profissional",
      description: "Photoshop, Canva, CapCut, After Effects. Aprenda a criar criativos que param o scroll e convertem.",
      icon: Palette,
      items: [
        "Templates prontos para usar",
        "Tutoriais completos de ferramentas",
        "Criativos para anúncios",
        "Edição de vídeo profissional"
      ],
      highlight: "+1.000 templates inclusos",
      gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20"
    }
  ];

  const togglePillar = (index: number) => {
    setExpandedPillar(expandedPillar === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 bg-black overflow-hidden"
    >
      {/* Partículas flutuantes de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-red-500/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[20%] right-[10%] w-1 h-1 bg-red-500/40 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-[80%] right-[20%] w-2 h-2 bg-red-500/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] right-[5%] w-1 h-1 bg-red-500/40 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
      </div>

      {/* Gradientes de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      {/* Container Card Principal */}
      <div className="relative max-w-7xl mx-auto">
        <div className={`relative bg-gradient-to-b from-gray-900/90 to-gray-900/60 border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Borda animada com brilho */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Header com efeito de brilho */}
          <div className="relative text-center mb-12 sm:mb-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Tudo que você precisa para dominar o{" "}
              <span className="relative inline-block">
                <span className="text-red-500">marketing digital</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 blur-sm" />
              </span>{" "}
              está aqui
            </h2>
            <p className="relative text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Conteúdo organizado, atualizado semanalmente e acesso vitalício. Não é só teoria — é o que realmente funciona no mercado hoje.
            </p>
          </div>

          {/* Pillars Grid com animações escalonadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isExpanded = expandedPillar === index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card
                    className="group relative bg-gray-800/50 border-gray-700/50 hover:border-red-500/50 transition-all duration-300 cursor-pointer overflow-hidden h-full"
                    onClick={() => togglePillar(index)}
                  >
                    {/* Gradiente animado no hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Brilho no canto */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="relative p-4 sm:p-6">
                      {/* Icon and Title */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="relative p-2 sm:p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3">
                            {/* Brilho atrás do ícone */}
                            <div className="absolute inset-0 bg-red-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-400 transition-colors" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                            {pillar.title}
                          </h3>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-red-400 flex-shrink-0 transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-400 flex-shrink-0 transition-colors" />
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 group-hover:text-gray-300 text-sm mb-3 sm:mb-4 transition-colors">
                        {pillar.description}
                      </p>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700 animate-in slide-in-from-top-2 duration-300">
                          <ul className="space-y-2 mb-4">
                            {pillar.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30 text-xs sm:text-sm backdrop-blur-sm">
                            <Sparkles className="w-3 h-3 mr-1" />
                            {pillar.highlight}
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Rateio Highlight com glassmorphism */}
          <div className="relative bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/30 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 backdrop-blur-md overflow-hidden group">
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <div className="relative text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-red-500" />
                Acesso ao maior acervo de rateio do Brasil
                <Sparkles className="w-6 h-6 text-red-500" />
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
                Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a centenas de cursos complementares organizados por categoria. Tudo atualizado semanalmente.
              </p>
            </div>
          </div>

          {/* Value Badges com efeitos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Zap, title: "Atualizações Semanais", desc: "Novos conteúdos toda semana", delay: "0ms" },
              { icon: CheckCircle2, title: "Acesso Vitalício", desc: "Pague uma vez, acesse para sempre", delay: "100ms" },
              { icon: Users, title: "Comunidade no Discord", desc: "+7.000 membros ativos", delay: "200ms" },
              { icon: MessageSquare, title: "Acesso via Telegram", desc: "Conteúdos exclusivos", delay: "300ms" }
            ].map((badge, index) => {
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={index}
                  className={`group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: badge.delay }}
                >
                  {/* Brilho de fundo no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  <div className="relative p-2 sm:p-3 bg-red-500/10 rounded-lg flex-shrink-0 group-hover:bg-red-500/20 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-red-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <BadgeIcon className="relative w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  </div>
                  <div className="relative">
                    <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-red-400 transition-colors">{badge.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
