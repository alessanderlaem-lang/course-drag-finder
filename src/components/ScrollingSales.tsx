import { useRef } from "react";
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

// Triple the array for seamless infinite loop
const ITEMS = [...SALES, ...SALES, ...SALES];

const SaleCard = ({ price }: { price: string }) => (
  <div className="flex-shrink-0 flex items-center gap-4 bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 mx-3 shadow-lg shadow-black/30 min-w-[320px]">
    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
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

const ScrollingSales = () => {
  return (
    <section className="w-full bg-background py-10 overflow-hidden">
      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex"
          style={{
            animation: "scroll-left 35s linear infinite",
            width: "max-content",
          }}
        >
          {ITEMS.map((s, i) => (
            <SaleCard key={`row1-${i}`} price={s.price} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex"
          style={{
            animation: "scroll-right 35s linear infinite",
            width: "max-content",
          }}
        >
          {ITEMS.map((s, i) => (
            <SaleCard key={`row2-${i}`} price={s.price} />
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
      `}</style>
    </section>
  );
};

export default ScrollingSales;
