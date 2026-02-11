import garantiaMobile from "@/assets/garantia-7-dias-new.png";

const GuaranteeSection = () => {
  return (
    <section className="relative z-0 w-full pt-0 pb-4 md:py-4 px-4 md:px-6 bg-background translate-y-10">
      <div className="max-w-4xl md:max-w-6xl mx-auto flex justify-center">
        {/* Mobile image (mantém o atual) */}
        <img 
          src={garantiaMobile} 
          alt="7 Dias de Garantia - Não gostou? Todo seu dinheiro de volta." 
          className="md:hidden w-full max-w-[26rem] h-auto rounded-3xl"
        />
        
        {/* Desktop - Nova versão como na referência */}
        <div className="hidden md:flex flex-col items-center justify-center py-16 px-8 w-full max-w-5xl">
          {/* Ícone do 7 */}
          <div className="mb-8">
            <img 
              src="https://risecommunity.com.br/wp-content/uploads/2026/01/Frame-1707478798.png" 
              alt="7 dias de garantia" 
              className="w-[180px] h-[180px] object-contain"
            />
          </div>
          
          {/* Título 1 */}
          <h2 
            className="text-4xl font-semibold mb-3 text-center"
            style={{
              fontFamily: "'Articulat CF', sans-serif",
              color: "rgb(255, 255, 255)",
            }}
          >
            Invista sem risco.
          </h2>
          
          {/* Título 2 (vermelho) */}
          <h3 
            className="text-5xl font-bold mb-8 text-center"
            style={{
              fontFamily: "'Articulat CF', sans-serif",
              color: "rgb(255, 0, 0)",
            }}
          >
            Garantia de 07 dias.
          </h3>
          
          {/* Texto explicativo */}
          <p 
            className="text-lg text-center leading-relaxed max-w-[800px]"
            style={{
              fontFamily: "'Articulat CF', sans-serif",
              color: "rgb(200, 200, 200)",
            }}
          >
            Você ainda conta com garantia total, conforme o Código de Defesa do Consumidor. 
            Isso significa que, se dentro do prazo legal você entender que o conteúdo não faz 
            sentido para o seu momento, pode solicitar o cancelamento e o reembolso, sem 
            burocracia e sem questionamentos desnecessários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
