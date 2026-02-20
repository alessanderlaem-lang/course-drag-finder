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

interface Notification {
  id: number;
  priceIndex: number;
  createdAt: number; // timestamp in seconds
}

const formatTime = (secondsAgo: number): string => {
  if (secondsAgo < 1) return "agora";
  if (secondsAgo < 60) return `${Math.floor(secondsAgo)}s`;
  return `${Math.floor(secondsAgo / 60)}min`;
};

const SalesNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [now, setNow] = useState(Date.now() / 1000);
  const nextId = useRef(0);
  const priceCounter = useRef(0);

  // Tick every second to update times
  useEffect(() => {
    const ticker = setInterval(() => setNow(Date.now() / 1000), 1000);
    return () => clearInterval(ticker);
  }, []);

  // Add a new notification every 3 seconds
  useEffect(() => {
    const addNotification = () => {
      const id = nextId.current++;
      const priceIndex = priceCounter.current % SALE_PRICES.length;
      priceCounter.current++;
      const createdAt = Date.now() / 1000;

      setNotifications((prev) => {
        const updated = [{ id, priceIndex, createdAt }, ...prev];
        // Keep only 3
        return updated.slice(0, 3);
      });
    };

    // Add first 3 immediately staggered
    addNotification();
    const t1 = setTimeout(addNotification, 1000);
    const t2 = setTimeout(addNotification, 2000);

    // Then every 3 seconds
    const interval = setInterval(addNotification, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-md mx-auto px-4 flex flex-col gap-4 min-h-[280px] overflow-hidden">
          <AnimatePresence initial={false}>
            {notifications.map((notif) => {
              const secondsAgo = now - notif.createdAt;
              return (
                <m.div
                  key={notif.id}
                  layout
                  initial={{ opacity: 0, y: -60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    layout: { type: "spring", stiffness: 300, damping: 28 },
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
                      Valor: {SALE_PRICES[notif.priceIndex]}
                    </p>
                  </div>
                  <span className="text-white/40 text-xs md:text-sm flex-shrink-0" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                    {formatTime(secondsAgo)}
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
