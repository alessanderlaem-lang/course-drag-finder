import { X } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl border-b border-red-500/30">
      <div className="max-w-7xl mx-auto relative py-2 sm:py-2.5 px-4">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-24 h-24 bg-red-500/10 rounded-full blur-xl" />
          <div className="absolute top-0 right-[10%] w-24 h-24 bg-red-500/10 rounded-full blur-xl" />
        </div>

        <div className="relative flex items-center justify-center gap-2">
          {/* Conteúdo principal */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center pr-8 sm:pr-0">
            <span className="text-xs sm:text-sm font-bold tracking-wide text-yellow-300">
              OFERTA EXCLUSIVA NOVEMBRO:
            </span>
            <span className="text-xs sm:text-sm font-medium">
              Compre agora e ganhe
            </span>
            <span className="inline-flex items-center bg-white text-red-900 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md font-bold text-xs sm:text-sm shadow-md border border-yellow-400">
              1 MÊS ChatGPT Plus GRÁTIS
            </span>
          </div>
        </div>

        {/* Botão de fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-all duration-200 hover:scale-110"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
