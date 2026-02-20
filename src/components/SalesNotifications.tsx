import { useState, useEffect } from "react";
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

const TIME_LABELS = ["agora", "1min", "2min"];

const SalesNotifications = () => {
  // Stack holds indices into SALE_PRICES, newest first
  const [stack, setStack] = useState<number[]>([0, 1, 2]);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        const next = prev + 1;
        setStack((prevStack) => {
          // Add new item at the top, remove the bottom one
          const newIndex = prev % SALE_PRICES.length;
          return [newIndex, prevStack[0], prevStack[1]];
        });
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-md mx-auto px-4 flex flex-col gap-4 min-h-[280px] overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {stack.map((dataIndex, position) => (
              <m.div
                key={`${counter - position}-${dataIndex}`}
                layout
                initial={{ opacity: 0, y: -60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.85, transition: { duration: 0.4 } }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                  layout: { type: "spring", stiffness: 350, damping: 30 },
                }}
                className="rounded-2xl border border-white/10 bg-[#111111] p-4 flex items-center gap-4 shadow-lg shadow-black/30"
              >
                {/* Logo */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0">
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
                    Valor: {SALE_PRICES[dataIndex]}
                  </p>
                </div>

                {/* Time */}
                <span
                  className="text-white/40 text-xs md:text-sm flex-shrink-0"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
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
