import garantiaImage from "@/assets/garantia-7-dias.jpg";

const GuaranteeSection = () => {
  return (
    <section className="w-full py-8 md:py-10 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto flex justify-center">
        <img 
          src={garantiaImage} 
          alt="7 Dias de Garantia - Não gostou? Todo seu dinheiro de volta." 
          className="w-full max-w-2xl h-auto rounded-3xl"
        />
      </div>
    </section>
  );
};

export default GuaranteeSection;
