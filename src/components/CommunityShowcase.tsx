import { useState } from "react";
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
  MessageSquare
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

const CommunityShowcase = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

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
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tudo que você precisa para dominar o{" "}
            <span className="text-red-500">marketing digital</span> está aqui
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conteúdo organizado, atualizado semanalmente e acesso vitalício. Não é só teoria — é o que realmente funciona no mercado hoje.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isExpanded = expandedPillar === index;

            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
                onClick={() => togglePillar(index)}
              >
                <CardContent className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {pillar.description}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-800 animate-in slide-in-from-top-2 duration-300">
                      <ul className="space-y-2 mb-4">
                        {pillar.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">
                        {pillar.highlight}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Rateio Highlight */}
        <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              + Acesso ao maior acervo de rateio do Brasil
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a <span className="text-red-500 font-semibold">+30.000 PLRs</span>, <span className="text-red-500 font-semibold">+50 ferramentas premium</span> e centenas de cursos complementares. Tudo organizado e atualizado semanalmente.
            </p>
          </div>
        </div>

        {/* Value Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <Zap className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Atualizações Semanais</h4>
              <p className="text-sm text-gray-400">Novos conteúdos toda semana</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Acesso Vitalício</h4>
              <p className="text-sm text-gray-400">Pague uma vez, acesse para sempre</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <Users className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Comunidade no Discord</h4>
              <p className="text-sm text-gray-400">+7.000 membros ativos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Acesso via Telegram</h4>
              <p className="text-sm text-gray-400">Conteúdos exclusivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
