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
  const [showAllCategories, setShowAllCategories] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-2 sm:py-20 lg:py-24 px-2 sm:px-4 bg-black"
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

          {/* NOVA SEÇÃO DE RATEIO - Com categorias do Discord */}
          <div className="relative bg-[#111111] border-2 border-gray-800 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                + Acesso ao maior acervo de rateio do Brasil
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
                Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a centenas de recursos organizados por categoria. Tudo atualizado semanalmente.
              </p>
            </div>

            {/* Grid de Categorias do Discord - Compacto com Expandir */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { icon: Package, title: "APKs" },
                { icon: Wand2, title: "SaaS" },
                { icon: FileText, title: "PLRs" },
                { icon: Palette, title: "Design" },
                { icon: Rocket, title: "Automações" },
                { icon: Target, title: "Tráfego" },
                { icon: PenTool, title: "Copy" },
                { icon: ShoppingBag, title: "E-commerce" },
                { icon: Bot, title: "Robôs" },
                { icon: Code, title: "Scripts" },
                { icon: Lightbulb, title: "Dicas" },
                { icon: FileStack, title: "PDFs" },
                // Categorias extras (mostradas após expandir)
                ...(showAllCategories ? [
                  { icon: Puzzle, title: "Extensão" },
                  { icon: FolderOpen, title: "Geral" },
                  { icon: Flame, title: "Hot" },
                  { icon: Video, title: "Vídeos" },
                  { icon: TrendingUp, title: "Pack-Trader" },
                  { icon: FileEdit, title: "Docs Editáveis" },
                  { icon: Trophy, title: "Tropa-D7" },
                  { icon: Settings, title: "Plugins" },
                  { icon: LayoutGrid, title: "Planilhas" },
                  { icon: Bot, title: "Funis-TypeBot" },
                  { icon: Sparkles, title: "Prompts" },
                  { icon: Users, title: "Leads" },
                  { icon: PenTool, title: "Copys-Script" },
                  { icon: User, title: "Métodos" },
                  { icon: Diamond, title: "Prova-Social" },
                  { icon: MessageCircle, title: "Aquec-WhatsApp" },
                  { icon: Mail, title: "Email-Marketing" },
                  { icon: MessageSquare, title: "Figurinhas-WPP" },
                  { icon: Monitor, title: "Programas-PC" },
                  { icon: Gamepad2, title: "Jogos" },
                  { icon: Bell, title: "Notificações" },
                  { icon: LayoutGrid, title: "Painéis" },
                  { icon: Scissors, title: "Cortes-Virais" },
                  { icon: Music, title: "Fontes" },
                  { icon: Video, title: "Pack-PLR-Video" }
                ] : [])
              ].map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#0a0a0a] border border-gray-900 rounded-lg p-3 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-medium text-white">{category.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botão Ver Mais */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 rounded-lg transition-all duration-300 text-white font-medium text-sm"
              >
                {showAllCategories ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Ver menos categorias
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Ver todas as categorias (+25)
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
