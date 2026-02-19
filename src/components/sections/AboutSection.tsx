import icon001 from "@/assets/icon-001.png";
import icon002 from "@/assets/icon-002.png";
import icon003 from "@/assets/icon-003.png";
import icon004 from "@/assets/icon-004.png";

const AboutSection = () => {
  const cards = [
    {
      icon: icon001,
      title: (
        <>
          <span className="text-white">Para quem quer </span>
          <span className="text-white">deixar o amadorismo</span>
          <span className="text-white"> para trás</span>
        </>
      ),
      description:
        "Você já tem a vontade, agora tenha o acesso. Ferramentas e direção certa para quem cansou de improvisar e quer resultados reais.",
    },
    {
      icon: icon002,
      title: (
        <>
          <span className="text-white">Para quem quer </span>
          <span className="text-white">destravar a operação</span>
        </>
      ),
      description:
        "Você já tem a estratégia, mas falta a ferramenta ou o recurso premium. Quebre a barreira de entrada e acesse o que antes era restrito a quem tinha muito caixa.",
    },
    {
      icon: icon003,
      title: (
        <>
          <span className="text-white">Para quem cansou de </span>
          <span className="text-white">bater cabeça sozinho</span>
        </>
      ),
      description:
        "Tentar resolver tudo sozinho custa caro e demora. Tenha acesso a soluções já validadas por quem errou antes de você, para que o seu único trabalho seja acertar.",
    },
    {
      icon: icon004,
      title: (
        <>
          <span className="text-white">Para quem quer </span>
          <span className="text-white">vender todos os dias</span>
        </>
      ),
      description:
        "Pare de viver de picos de venda e sorte. Aprenda a estruturar uma operação sólida que vende todos os dias, com previsibilidade e segurança.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          {/* Título Principal */}
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-white">O Que é a </span>
            <span
              style={{
                background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rise Community
            </span>
            <span className="text-white">?</span>
          </h3>

          {/* Subtítulo */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A Rise é um rateio inteligente para quem cansou de pular de curso em curso. Pare de pagar caro e tenha tudo em um único acesso liberado.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {cards.map((card, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Ícone */}
                <div className="flex-shrink-0">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-24 h-24 md:w-28 md:h-28"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-medium mb-3">
                    {card.title}
                  </h4>
                  <p className="text-base md:text-lg text-gray-400">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Divider - não mostrar após o último card */}
              {index < cards.length - 1 && (
                <div className="mt-8 border-t border-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
