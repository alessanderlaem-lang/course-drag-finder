import { X } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#8B0000] to-[#FF0000] text-white py-1.5 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold leading-tight">
            🔥 <span className="animate-pulse">BLACK FRIDAY:</span> Compre agora e ganhe{" "}
            <span className="bg-white text-[#FF0000] px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold">
              1 mês de ChatGPT GRÁTIS
            </span>
            ! Válido apenas em novembro.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
