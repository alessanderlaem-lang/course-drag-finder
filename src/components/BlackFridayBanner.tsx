import { X } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#8B0000] text-white py-2.5 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs sm:text-sm md:text-base font-medium text-center px-8">
          Só no mês de novembro: Compre agora e ganhe 1 mês de{" "}
          <span className="inline-block bg-white text-[#8B0000] px-3 py-1 rounded-md font-bold mx-1 border-2 border-white shadow-sm">
            ChatGPT Plus GRÁTIS
          </span>
          !
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
