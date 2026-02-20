import riseLogo from "@/assets/rise-logo-owl.webp";

const SALES = [
  { price: "R$ 29,90" },
  { price: "R$ 67,00" },
  { price: "R$ 149,90" },
  { price: "R$ 299,90" },
  { price: "R$ 89,90" },
  { price: "R$ 197,00" },
  { price: "R$ 499,00" },
  { price: "R$ 224,91" },
  { price: "R$ 59,90" },
  { price: "R$ 399,00" },
];

// Each card gets unique duration + delay for organic feel
// index % 10 → varied config; index % 11 === 5 = no blur (1 in 11 cards clean)
const BLUR_CONFIGS = [
  { duration: "4s",  delay: "0s"  },
  { duration: "7s",  delay: "1.5s" },
  { duration: "5s",  delay: "3s"  },
  { duration: "9s",  delay: "0.5s" },
  { duration: "3s",  delay: "5s"  },
  { duration: "6s",  delay: "2s"  },
  { duration: "8s",  delay: "4s"  },
  { duration: "4.5s",delay: "6s"  },
  { duration: "5.5s",delay: "1s"  },
  { duration: "7.5s",delay: "3.5s"},
];

const ITEMS = [...SALES, ...SALES, ...SALES];

const SaleCard = ({ price, index }: { price: string; index: number }) => {
  const skipBlur = index % 11 === 5; // ~1 in 11 stays clean
  const cfg = BLUR_CONFIGS[index % BLUR_CONFIGS.length];

  return (
    <div
      className="flex-shrink-0 flex items-center gap-5 bg-[#111111] border border-white/10 rounded-2xl pl-4 pr-7 py-4 mx-2 shadow-lg shadow-black/30 min-w-[420px]"
      style={
        !skipBlur
          ? { animation: `blur-pulse ${cfg.duration} ease-in-out ${cfg.delay} infinite` }
          : undefined
      }
    >
      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={riseLogo}
          alt="Rise"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
      </div>
      <div>
        <p
          className="text-white font-bold text-sm"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          Venda Aprovada!
        </p>
        <p
          className="text-white/60 text-xs"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          Valor {price}
        </p>
      </div>
    </div>
  );
};

const ScrollingSales = () => {
  return (
    <section className="w-full bg-background py-10 overflow-hidden">
      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div
          className="flex"
          style={{ animation: "scroll-left 42s linear infinite", width: "max-content" }}
        >
          {ITEMS.map((s, i) => (
            <SaleCard key={`row1-${i}`} price={s.price} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div
          className="flex"
          style={{ animation: "scroll-right 35s linear infinite", width: "max-content" }}
        >
          {ITEMS.map((s, i) => (
            <SaleCard key={`row2-${i}`} price={s.price} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes blur-pulse {
          0%   { filter: blur(0px);  opacity: 1;   }
          25%  { filter: blur(5px);  opacity: 0.5; }
          55%  { filter: blur(5px);  opacity: 0.5; }
          85%  { filter: blur(0px);  opacity: 1;   }
          100% { filter: blur(0px);  opacity: 1;   }
        }
      `}</style>
    </section>
  );
};

export default ScrollingSales;
