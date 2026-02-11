import { Mail, BookOpen, Play } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Number and Icon */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>
        <div className="text-red-600">{icon}</div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowAccessWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Receba seu acesso",
      description:
        "Após a confirmação da compra, você receberá imediatamente um e-mail com o link de acesso à sua área de membros.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Acesse a área de membros",
      description:
        "Faça login na plataforma exclusiva. Você encontrará todos os tutoriais, recursos e links para acessar a comunidade do Discord.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Pronto, agora é só começar",
      description:
        "Explore tudo que a Rise Community oferece. Acesse os conteúdos, participe da comunidade e comece a aplicar.",
      icon: <Play className="w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-white">Como Funciona </span>
            <span className="text-red-600">o Acesso?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            Siga o passo a passo abaixo e faça como as mais de 9 mil pessoas que já fazem parte da plataforma.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAccessWorks;
