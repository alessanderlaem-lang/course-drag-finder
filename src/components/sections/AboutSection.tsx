const AboutSection = () => {

  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          {/* Título Principal */}
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-white">O Que Você Vai </span>
            <span
              style={{
                background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Receber
            </span>
          </h3>

          {/* Subtítulo */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Vamos ao que interessa. Veja na prática tudo que você vai receber de forma vitalícia entrando na{" "}
            <strong>Rise Community</strong> hoje.
          </p>
        </div>

        {/* Video Banner Placeholder */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div
            className="w-full bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              aspectRatio: "16 / 9",
              border: "2px solid #333",
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-gray-400">Espaço reservado para vídeo</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
