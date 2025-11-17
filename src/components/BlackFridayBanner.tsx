import { X } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-500 to-red-900 text-white shadow-lg border-b border-red-500/30">
      <div className="max-w-7xl mx-auto relative py-2 px-4 sm:px-6">
        {/* Conteúdo principal - texto inline horizontal */}
        <p className="text-center text-xs sm:text-sm font-bold pr-6 sm:pr-0">
          <span className="font-extrabold text-white">OFERTA EXCLUSIVA DE NOVEMBRO:</span>{" "}
          Compre agora e ganhe{" "}
          <span className="inline-block bg-white text-red-500 px-2.5 py-0.5 rounded-md font-extrabold text-xs sm:text-sm shadow-lg mx-0.5">
            1 MÊS ChatGPT Plus GRÁTIS
          </span>
        </p>

        {/* Botão de fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:scale-110"
          aria-label="Fechar banner"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
