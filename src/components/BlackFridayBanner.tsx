import { X, Sparkles, Gift } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl border-b-2 border-red-500/50">
      <div className="max-w-7xl mx-auto relative py-3 px-4">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
          <div className="absolute top-0 right-[10%] w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
        </div>

        <div className="relative flex items-center justify-center gap-2 sm:gap-3">
          {/* Ícone decorativo esquerda */}
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse hidden sm:block" />
          
          {/* Conteúdo principal */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center">
            <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wide">
              🔥 <span className="text-yellow-300">OFERTA EXCLUSIVA NOVEMBRO:</span>
            </span>
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Compre agora e ganhe
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white text-red-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg font-bold text-xs sm:text-sm md:text-base shadow-lg border-2 border-yellow-400 animate-pulse-glow">
              <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
              1 MÊS ChatGPT Plus GRÁTIS
            </span>
          </div>

          {/* Ícone decorativo direita */}
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse hidden sm:block" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Botão de fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1.5 transition-all duration-200 hover:scale-110"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
