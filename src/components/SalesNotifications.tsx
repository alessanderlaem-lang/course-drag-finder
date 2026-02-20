import { useState, useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import riseLogo from "@/assets/rise-logo-owl.webp";

const NOTIFICATIONS = [
  { price: "R$ 67,00" },
  { price: "R$ 299,90" },
  { price: "R$ 499,00" },
  { price: "R$ 149,90" },
  { price: "R$ 89,90" },
  { price: "R$ 197,00" },
];

const TIME_LABELS = ["agora", "1seg", "2seg"];
const SCALES = [1, 0.92, 0.84];
const Y_POSITIONS = [0, 112, 216];

interface NotifItem {
  uid: number;
  price: string;
}

const SalesNotifications = () => {
  const nextUid = useRef(3);
  const nextNI = useRef(3);
  const mounted = useRef(false);

  const [items, setItems] = useState<NotifItem[]>([
    { uid: 0, price: NOTIFICATIONS[0].price },
    { uid: 1, price: NOTIFICATIONS[1].price },
    { uid: 2, price: NOTIFICATIONS[2].price },
  ]);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = riseLogo;
    mounted.current = true;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const ni = nextNI.current % NOTIFICATIONS.length;
        nextNI.current++;
        const newItem: NotifItem = {
          uid: nextUid.current++,
          price: NOTIFICATIONS[ni].price,
        };
        // Prepend new item, keep only first 2 existing ones
        return [newItem, prev[0], prev[1]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        {/* Preload: render all images hidden so browser caches them instantly */}
        <div aria-hidden className="sr-only absolute">
          {NOTIFICATIONS.map((_, i) => (
            <img key={i} src={riseLogo} alt="" fetchPriority="high" decoding="sync" />
          ))}
        </div>
        <div className="max-w-lg mx-auto px-4 overflow-hidden" style={{ height: 320 }}>
          <div className="relative flex justify-center">
            <AnimatePresence initial={false}>
              {items.map((item, position) => (
                <m.div
                  key={item.uid}
                  // Only truly NEW items (uid >= 3) slide in from top
                  initial={
                    item.uid >= 3
                      ? { opacity: 0, y: -70, scale: SCALES[0] }
                      : false
                  }
                  animate={{
                    opacity: 1,
                    y: Y_POSITIONS[position],
                    scale: SCALES[position],
                  }}
                  exit={{ opacity: 0, y: 310, scale: 0.75 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute rounded-2xl border border-white/10 bg-[#111111] p-4 flex items-center gap-4 shadow-lg shadow-black/30"
                  style={{
                    top: 0,
                    left: "50%",
                    x: "-50%",
                    width: `${100 - position * 6}%`,
                    maxWidth: 480,
                    transformOrigin: "center top",
                  }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={riseLogo}
                      alt="Rise Community"
                      className="w-full h-full object-cover"
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </div>
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
                      Valor: {item.price}
                    </p>
                  </div>
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
        </div>
      </section>
    </LazyMotion>
  );
};

export default SalesNotifications;
