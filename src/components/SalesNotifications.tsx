import { useState, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import riseLogo from "@/assets/rise-logo-owl.webp";

const SALE_DATA = [
  { price: "R$ 67,00", time: "agora" },
  { price: "R$ 299,90", time: "2min" },
  { price: "R$ 499,00", time: "4min" },
  { price: "R$ 149,90", time: "1min" },
  { price: "R$ 89,90", time: "3min" },
  { price: "R$ 197,00", time: "5min" },
  { price: "R$ 347,00", time: "agora" },
  { price: "R$ 99,90", time: "2min" },
];

const SalesNotifications = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [cycleIndex, setCycleIndex] = useState(0);

  const getNextThree = useCallback((startIndex: number) => {
    return [0, 1, 2].map((offset) => (startIndex + offset) % SALE_DATA.length);
  }, []);

  useEffect(() => {
    // Start fresh each cycle
    setVisibleItems([]);

    const indices = getNextThree(cycleIndex * 3);

    // Drop notifications one by one with 1s delay
    const timers = indices.map((idx, i) =>
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, idx]);
      }, i * 1000)
    );

    // After all 3 are shown, wait 3s then restart cycle
    const resetTimer = setTimeout(() => {
      setCycleIndex((prev) => prev + 1);
    }, 6000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, [cycleIndex, getNextThree]);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-md mx-auto px-4 flex flex-col gap-4 min-h-[280px]">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((dataIndex, i) => {
              const sale = SALE_DATA[dataIndex];
              return (
                <m.div
                  key={`${cycleIndex}-${i}`}
                  initial={{ opacity: 0, y: -40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#111111] p-4 flex items-center gap-4 shadow-lg shadow-black/30"
                >
                  {/* Logo */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-primary/20">
                    <img
                      src={riseLogo}
                      alt="Rise Community"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-white font-bold text-sm md:text-base"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      Venda realizada!
                    </p>
                    <p
                      className="text-white/60 text-xs md:text-sm"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      Valor: {sale.price}
                    </p>
                  </div>

                  {/* Time */}
                  <span
                    className="text-white/40 text-xs md:text-sm flex-shrink-0"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {sale.time}
                  </span>
                </m.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </LazyMotion>
  );
};

export default SalesNotifications;
