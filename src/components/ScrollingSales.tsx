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

const ITEMS = [...SALES, ...SALES, ...SALES]; // 30 items

// Use 4 different cycle durations (prime-ish) so cards never fully sync
// Clear window = 20% of each cycle → guarantees ~6 cards visible at all times
const DURATIONS = [11, 14, 17, 20];

const SaleCard = ({ price, index }: { price: string; index: number }) => {
  const duration = DURATIONS[index % DURATIONS.length];
  // Spread delays within their own cycle so the clear window hits at different times
  const delay = `${((index % 10) * (duration / 10)).toFixed(2)}s`;
  const animName = `blur-pulse-${duration}`;

  return (
    <div
      className="flex-shrink-0 flex items-center gap-2 md:gap-5 bg-[#111111] border border-white/10 rounded-xl md:rounded-2xl pl-2 pr-3 md:pl-4 md:pr-7 py-1.5 md:py-4 mx-1 md:mx-2 shadow-lg shadow-black/30 min-w-[240px] md:min-w-[420px]"
      style={{ animation: `${animName} ${duration}s linear ${delay} infinite` }}
    >
      <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
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
          className="text-white font-bold text-xs md:text-sm"
          style={{ fontFamily: "'Articulat CF', sans-serif" }}
        >
          Venda Aprovada!
        </p>
        <p
          className="text-white/60 text-[10px] md:text-xs"
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
    <section className="w-full bg-background pt-24 md:pt-16 pb-10 overflow-hidden">
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
            <SaleCard key={`row2-${i}`} price={s.price} index={i + 2} />
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

        /* Shared keyframe shape — 20% clear at start+end, 60% blurred in middle */
        @keyframes blur-pulse-11 {
          0%   { filter: blur(0px); opacity: 1;   }
          10%  { filter: blur(0px); opacity: 1;   }
          25%  { filter: blur(6px); opacity: 0.35;}
          75%  { filter: blur(6px); opacity: 0.35;}
          90%  { filter: blur(0px); opacity: 1;   }
          100% { filter: blur(0px); opacity: 1;   }
        }
        @keyframes blur-pulse-14 {
          0%   { filter: blur(0px); opacity: 1;   }
          10%  { filter: blur(0px); opacity: 1;   }
          25%  { filter: blur(6px); opacity: 0.35;}
          75%  { filter: blur(6px); opacity: 0.35;}
          90%  { filter: blur(0px); opacity: 1;   }
          100% { filter: blur(0px); opacity: 1;   }
        }
        @keyframes blur-pulse-17 {
          0%   { filter: blur(0px); opacity: 1;   }
          10%  { filter: blur(0px); opacity: 1;   }
          25%  { filter: blur(6px); opacity: 0.35;}
          75%  { filter: blur(6px); opacity: 0.35;}
          90%  { filter: blur(0px); opacity: 1;   }
          100% { filter: blur(0px); opacity: 1;   }
        }
        @keyframes blur-pulse-20 {
          0%   { filter: blur(0px); opacity: 1;   }
          10%  { filter: blur(0px); opacity: 1;   }
          25%  { filter: blur(6px); opacity: 0.35;}
          75%  { filter: blur(6px); opacity: 0.35;}
          90%  { filter: blur(0px); opacity: 1;   }
          100% { filter: blur(0px); opacity: 1;   }
        }
      `}</style>
    </section>
  );
};

export default ScrollingSales;
