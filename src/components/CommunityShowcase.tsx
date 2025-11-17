import { useState, useEffect, useRef } from "react";
import { 
  Target, 
  PenTool, 
  Rocket, 
  ShoppingBag, 
  Palette,
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 bg-black"
    >
      {/* Gradiente sutil de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto">
        <div className={`relative bg-[#0a0a0a] border border-gray-900 rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
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

          {/* Pillars Grid - SEM EXPANSÃO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="group relative bg-[#111111] border-gray-900 hover:border-red-500/30 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/15 transition-colors flex-shrink-0">
                          <Icon className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4">
                        {pillar.description}
                      </p>

                      {/* Items - SEMPRE VISÍVEIS */}
                      <ul className="space-y-2 mb-4">
                        {pillar.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Badge */}
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-xs">
                        {pillar.highlight}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Rateio Highlight - SEM EFEITOS EXCESSIVOS */}
          <div className="relative bg-[#111111] border border-gray-900 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                + Acesso ao maior acervo de rateio do Brasil
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
                Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalício a centenas de cursos complementares organizados por categoria. Tudo atualizado semanalmente.
              </p>
            </div>
          </div>

          {/* Value Badges */}
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
                  className={`group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-[#111111] border border-gray-900 rounded-xl hover:border-red-500/30 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: badge.delay }}
                >
                  <div className="p-3 bg-red-500/10 rounded-lg flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                    <BadgeIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{badge.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{badge.desc}</p>
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
