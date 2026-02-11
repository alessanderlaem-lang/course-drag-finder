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
          <span className="text-white">Para quem </span>
          <span className="text-white">quer começar</span>
          <span className="text-white"> do jeito certo</span>
        </>
      ),
      description:
        "Se você ainda não sabe por onde entrar no marketing digital, aqui você encontra direção, clareza e um caminho organizado desde o início.",
    },
    {
      icon: icon002,
      title: (
        <>
          <span className="text-white">Para quem já começou, </span>
          <span className="text-white">mas não teve resultados</span>
        </>
      ),
      description:
        "Ideal pra quem já tentou, estudou, aplicou um pouco… mas ainda não conseguiu ganhar dinheiro de verdade.",
    },
    {
      icon: icon003,
      title: (
        <>
          <span className="text-white">Para quem busca </span>
          <span className="text-white">oportunidades reais</span>
        </>
      ),
      description:
        "Acesso a produtos, ferramentas e modelos que podem ser usados e revendidos, sem promessas irreais ou atalhos suspeitos.",
    },
    {
      icon: icon004,
      title: (
        <>
          <span className="text-white">Para quem quer aprender, </span>
          <span className="text-white">aplicar e vender</span>
        </>
      ),
      description:
        "Nada de só teoria. Aqui você aprende, coloca em prática e entende como transformar conhecimento em oportunidade.",
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
            A Rise Community é uma{" "}
            <strong>comunidade completa de marketing digital e networking</strong>
            , criada para pessoas que
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
