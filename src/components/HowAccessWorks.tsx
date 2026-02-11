import iconEmail from "@/assets/icon-email.png";
import iconLogin from "@/assets/icon-login.png";
import iconStart from "@/assets/icon-start.png";

const HowAccessWorks = () => {
  const steps = [
    {
      icon: iconEmail,
      title: "Receba seu acesso",
      description:
        "Após a confirmação da compra, você receberá imediatamente um e-mail com o link de acesso à sua área de membros.",
    },
    {
      icon: iconLogin,
      title: "Acesse a área de membros",
      description:
        "Faça login na plataforma exclusiva. Você encontrará todos os tutoriais, recursos e links para acessar a comunidade do Discord.",
    },
    {
      icon: iconStart,
      title: "Pronto, agora é só começar",
      description:
        "Explore tudo o que a Rise Community oferece. Acesse os conteúdos, participe da comunidade e comece a aplicar.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          {/* Título Principal */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-white">Como Funciona </span>
            <span
              style={{
                background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              o Acesso?
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Siga o passo a passo abaixo e faça como as mais de{" "}
            <strong>9 mil pessoas</strong> que já fazem parte da plataforma.
          </p>
        </div>

        {/* Banner Placeholder - substituir por banner real em breve */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl border-2 border-dashed border-gray-700 bg-gray-900/50 flex items-center justify-center py-16 px-6">
          <p className="text-gray-500 text-lg font-medium tracking-wide uppercase">🎯 Espaço reservado para banner — Em breve</p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Ícone */}
                <div className="flex-shrink-0">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-24 h-24 md:w-28 md:h-28"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Divider - não mostrar após o último step */}
              {index < steps.length - 1 && (
                <div className="mt-8 border-t border-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAccessWorks;
