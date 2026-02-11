// Icons customizados no formato quadrado com borda vermelha
const EmailIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" className="stroke-red-600" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" className="stroke-red-600" />
  </svg>
);

const KeyIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="7.5" cy="15.5" r="5.5" className="stroke-red-600" />
    <path d="M13 17.9V16a1 1 0 0 1 1-1h6" className="stroke-red-600" />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="5 3 19 12 5 21 5 3" className="stroke-red-600 fill-red-600" />
  </svg>
);

interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard = ({ title, description, icon }: StepProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon in bordered square */}
      <div className="w-16 h-16 rounded-lg border-2 border-red-600 flex items-center justify-center flex-shrink-0">
        {icon}
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
      title: "Receba seu acesso",
      description:
        "Após a confirmação da compra, você receberá imediatamente um e-mail com o link de acesso à sua área de membros.",
      icon: <EmailIcon />,
    },
    {
      title: "Acesse a área de membros",
      description:
        "Faça login na plataforma exclusiva. Você encontrará todos os tutoriais, recursos e links para acessar a comunidade do Discord.",
      icon: <KeyIcon />,
    },
    {
      title: "Pronto, agora é só começar",
      description:
        "Explore tudo que a Rise Community oferece. Acesse os conteúdos, participe da comunidade e comece a aplicar.",
      icon: <PlayIcon />,
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
