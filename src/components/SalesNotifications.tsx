import { useState, useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import riseLogo from "@/assets/rise-logo-owl.webp";

const SALE_PRICES = [
  "R$ 67,00",
  "R$ 299,90",
  "R$ 499,00",
  "R$ 149,90",
  "R$ 89,90",
  "R$ 197,00",
  "R$ 347,00",
  "R$ 99,90",
  "R$ 159,00",
  "R$ 247,00",
];

const TIME_LABELS = ["agora", "1seg", "2seg"];

interface NotifItem {
  id: number;
  priceIndex: number;
}

const SalesNotifications = () => {
  const nextId = useRef(3);
  const [items, setItems] = useState<NotifItem[]>([
    { id: 0, priceIndex: 0 },
    { id: 1, priceIndex: 1 },
    { id: 2, priceIndex: 2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItem: NotifItem = {
          id: nextId.current++,
          priceIndex: (nextId.current - 1) % SALE_PRICES.length,
        };
        // New one at top, keep first 2 of previous (drop the 3rd/oldest)
        return [newItem, prev[0], prev[1]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-md mx-auto px-4 flex flex-col gap-4 min-h-[280px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item, position) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{
                  duration: 0.12,
                  layout: { type: "spring", stiffness: 500, damping: 35 },
                }}
                className="rounded-2xl border border-white/10 bg-[#111111] p-4 flex items-center gap-4 shadow-lg shadow-black/30"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={riseLogo} alt="Rise Community" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm md:text-base" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                    Venda realizada!
                  </p>
                  <p className="text-white/60 text-xs md:text-sm" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                    Valor: {SALE_PRICES[item.priceIndex]}
                  </p>
                </div>
                <span className="text-white/40 text-xs md:text-sm flex-shrink-0" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                  {TIME_LABELS[position]}
                </span>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </LazyMotion>
  );
};

export default SalesNotifications;
