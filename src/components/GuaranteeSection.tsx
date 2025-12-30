import garantiaMobile from "@/assets/garantia-7-dias.jpg";
import garantiaDesktop from "@/assets/garantia-desktop.jpg";

const GuaranteeSection = () => {
  return (
    <section className="w-full py-8 md:py-10 px-4 md:px-6 bg-background">
      <div className="max-w-4xl md:max-w-6xl mx-auto flex justify-center">
        {/* Mobile image */}
        <img 
          src={garantiaMobile} 
          alt="7 Dias de Garantia - Não gostou? Todo seu dinheiro de volta." 
          className="md:hidden w-full max-w-5xl h-auto rounded-3xl"
        />
        {/* Desktop image */}
        <img 
          src={garantiaDesktop} 
          alt="7 Dias de Garantia - Não gostou? Todo seu dinheiro de volta." 
          className="hidden md:block w-full max-w-6xl h-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default GuaranteeSection;
