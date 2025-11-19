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
  const categoriesRef = useRef<HTMLDivElement>(null);

  const handleToggleCategories = () => {
    if (showAllCategories && categoriesRef.current) {
      // Ao fechar, faz scroll suave para o topo da seção
      categoriesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => setShowAllCategories(false), 300);
    } else {
      setShowAllCategories(!showAllCategories);
    }
  };

  // Categorias com cores
  const categories = [
    { name: "Hot", color: "bg-red-500/20 text-red-400 border-red-500/30" },
    { name: "Design", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { name: "Edição", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "Páginas de Vendas", color: "bg-green-500/20 text-green-400 border-green-500/30" },
    { name: "SaaS", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    { name: "APKs", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    { name: "iGaming", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    { name: "N8N", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  ];

  const extraCategories = [
    "Bônus Exclusivo",
    "+30k em PLRs",
    "Source iGaming e SaaS",
    "Gerador de Notificações",
    "Dicas",
    "PDF's",
    "Extensão",
    "Geral",
    "Robôs",
    "Vídeos",
    "Modelos de Contratos",
    "Documentos Editáveis",
    "Planilhas",
    "Dropshipping",
    "Prompt's",
    "Leads",
    "Copys Script",
    "Script's Venda Prontos",
    "Funis e Type Bot",
    "PLR",
    "Tráfego Pago e BM",
    "Aquecimento WhatsApp",
    "Cripto",
    "Jogos",
    "Painéis"
  ];

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

        </div>
      </div>

      {/* NOVA SEÇÃO DE RATEIO - SEM BLOCO, DESIGN PROFISSIONAL */}
      <div ref={categoriesRef} className="relative max-w-7xl mx-auto mt-16 sm:mt-24 lg:mt-32">
        {/* Gradiente de fundo da seção */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent pointer-events-none" />
        
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Título e Descrição */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-red-500">+</span> Acesso ao maior acervo de rateio do Brasil
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a centenas de recursos organizados por categoria. Tudo atualizado semanalmente.
            </p>
          </div>

          {/* Layout 2 Colunas: Mockup + Categorias */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center px-4">
            
            {/* Coluna Esquerda - Mockup (60%) */}
            <div className="lg:col-span-3 relative">
              {/* Efeito de brilho vermelho ao redor do mockup */}
              <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full scale-110 pointer-events-none" />
              
              <div className="relative">
                <img 
                  src="/images/discord-mockup.png" 
                  alt="Mockup do Discord da Rise Community mostrando todos os canais e categorias disponíveis"
                  className="w-full h-auto object-contain relative z-10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Coluna Direita - Categorias (40%) */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                O que você encontra dentro:
              </h4>
              
              {/* Grid de badges coloridos - 2 colunas no mobile */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className={`${category.color} border px-3 py-2 text-xs sm:text-sm font-medium transition-all hover:scale-105 text-center justify-center`}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>

              {/* Categorias extras (expansíveis) - 2 colunas no mobile */}
              {showAllCategories && (
                <div className="space-y-4 mb-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-2 gap-2">
                    {extraCategories.map((category, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gray-800/50 text-gray-300 border-gray-700 px-3 py-2 text-xs sm:text-sm font-medium transition-all hover:scale-105 hover:bg-gray-700/50 text-center justify-center"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Badge final destacado */}
                  <div className="flex justify-center pt-2">
                    <Badge 
                      variant="outline" 
                      className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border-red-500/40 px-6 py-3 text-sm sm:text-base font-bold transition-all hover:scale-110 hover:from-red-500/30 hover:to-orange-500/30 shadow-lg shadow-red-500/20"
                    >
                      🔥 E muito mais+
                    </Badge>
                  </div>
                </div>
              )})

              {/* Botão Ver Mais - Sem bordas tracejadas */}
              <button
                onClick={handleToggleCategories}
                className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors group w-full justify-center sm:justify-start"
              >
                {showAllCategories ? (
                  <>
                    <ChevronUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-1 transition-transform" />
                    <span className="font-medium">Ver menos categorias</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 group-hover:transform group-hover:translate-y-1 transition-transform" />
                    <span className="font-medium">+ Ver mais categorias</span>
                  </>
                )}
              </button>

              {/* Texto adicional */}
              <p className="text-xs sm:text-sm text-gray-500 mt-6 text-center sm:text-left">
                <span className="text-red-500 font-bold">+50 categorias</span> organizadas e atualizadas semanalmente
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default CommunityShowcase;
