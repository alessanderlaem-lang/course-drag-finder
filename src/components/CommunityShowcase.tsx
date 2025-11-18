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
  Package,
  Wand2,
  FileText,
  Bot,
  Code,
  Lightbulb,
  FileStack,
  Puzzle,
  FolderOpen,
  Flame,
  Video,
  TrendingUp,
  FileEdit,
  Trophy,
  Settings,
  Mail,
  MessageCircle,
  Monitor,
  Gamepad2,
  Bell,
  LayoutGrid,
  User,
  X,
  Sparkles,
  Scissors,
  Music,
  Diamond
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PillarContent {
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
  highlight: string;
}

// Reorganização: badges antes dos pilares + nova seção de rateio - Deploy forçado
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
      highlight: "Do básico à escala avançada"
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
      highlight: "Escreva como os melhores"
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
      highlight: "Do zero ao primeiro lançamento"
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
      highlight: "Produtos prontos para revender"
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
      highlight: "+1.000 templates inclusos"
    }
  ];

  const togglePillar = (index: number) => {
    setExpandedPillar(expandedPillar === index ? null : index);
  };

  const [showAllCategories, setShowAllCategories] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className="relative py-2 sm:py-20 lg:py-24 px-2 sm:px-4 bg-black overflow-x-hidden"
    >
      {/* Gradiente sutil de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto">
        <div className={`relative bg-[#0a0a0a] border-2 border-gray-800 rounded-3xl p-6 sm:p-10 lg:p-14 pt-20 sm:pt-14 lg:pt-16 transition-all duration-1000 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="relative text-center mb-12 sm:mb-16">
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tudo que você precisa para dominar o{" "}
              <span className="text-red-500">marketing digital</span> está aqui
            </h2>
            <p className="relative text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Conteúdo organizado, atualizado semanalmente e acesso vitalício. Não é só teoria — é o que realmente funciona no mercado hoje.
            </p>
          </div>

          {/* Pillars Grid - FECHADOS POR PADRÃO */}
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
                    className="group relative bg-[#111111] border-gray-900 hover:border-red-500/30 transition-all duration-300 cursor-pointer"
                    onClick={() => togglePillar(index)}
                  >
                    <CardContent className="p-4 sm:p-6">
                      {/* Icon, Title e Chevron */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/15 transition-colors flex-shrink-0">
                            <Icon className="w-6 h-6 text-red-500" />
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {pillar.title}
                          </h3>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" />
                        )}
                      </div>

                      {/* Description - SEMPRE VISÍVEL */}
                      <p className="text-gray-400 text-sm">
                        {pillar.description}
                      </p>

                      {/* Items - APENAS QUANDO EXPANDIDO */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-gray-900 animate-in slide-in-from-top-2 duration-300">
                          <ul className="space-y-2 mb-4">
                            {pillar.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-xs">
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

          {/* BLOCO ÚNICO INTEGRADO - Título + Mockup + Lista */}
          <div className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-4 sm:p-8 overflow-hidden">
            {/* Título e Descrição */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                + Acesso ao maior acervo de rateio do Brasil
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
                Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a centenas de recursos organizados por categoria. Tudo atualizado semanalmente.
              </p>
            </div>

            {/* Mockup do Discord */}
            <div className="relative mb-10">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/discord-mockup.png" 
                  alt="Mockup do Discord da Rise Community mostrando todos os canais e categorias disponíveis"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Divisor sutil */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
                O que você encontra dentro:
              </h4>
            
            {/* Grid de categorias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Categorias principais (sempre visíveis) */}
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">500+ APKs Premium</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">10.000+ PLRs</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">300+ SaaS Tools</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">5.000+ Design Assets</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">800+ Automações</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">2.000+ Materiais de Tráfego</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">3.000+ Copy & Scripts</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">1.500+ E-commerce</span>
              </div>

              {/* Categorias extras (expansíveis) */}
              {showAllCategories && (
                <>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">400+ Robôs Automatizados</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">600+ Scripts Prontos</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">2.000+ Dicas Práticas</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">8.000+ PDFs e E-books</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">1.000+ Extensões Chrome</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">500+ Packs de Conteúdo</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">300+ Planilhas e Modelos</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">200+ Funis Prontos</span>
                  </div>
                </>
              )}
            </div>

            {/* Botão Ver Mais */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
              >
                {showAllCategories ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Ver menos categorias
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    + Ver mais categorias
                  </>
                )}
              </button>
            </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default CommunityShowcase;
