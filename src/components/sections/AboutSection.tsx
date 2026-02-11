import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Para quem quer começar do jeito certo",
      description: "Se você ainda não sabe por onde entrar no marketing digital, aqui você encontra direção, clareza e um caminho organizado desde o início.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Para quem já começou, mas não teve resultados",
      description: "Ideal pra quem já tentou, estudou, aplicou um pouco… mas ainda não conseguiu ganhar dinheiro de verdade.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      title: "Para quem busca oportunidades reais",
      description: "Acesso a produtos, ferramentas e modelos que podem ser usados e revendidos, sem promessas irreais ou atalhos suspeitos.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Para quem quer aprender, aplicar e vender",
      description: "Nada de só teoria. Aqui você aprende, coloca em prática e entende como transformar conhecimento em oportunidade.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Rise nasce pra resolver exatamente isso:
          </h2>
          <div className="mt-6">
            <div className="inline-flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255, 57, 57, 0.2)", borderRadius: "22px", padding: "10px 28px" }}>
              <span className="text-sm font-medium" style={{ color: "rgb(255, 160, 160)" }}>
                Rise Community
              </span>
            </div>
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            O Que é a <span className="text-red-500">Rise Community</span>?
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A Rise Community é uma comunidade completa de marketing digital e networking, criada para pessoas que
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 rounded-lg">
                  {feature.icon}
                </div>
                <h4 className="mt-6 text-lg font-medium leading-6 text-white">{feature.title}</h4>
                <p className="mt-2 text-base leading-6 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
