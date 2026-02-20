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

// Position 0 = buffer (hidden above stack, loads image silently)
// Positions 1, 2, 3 = visible stack
const BUFFER_Y = -100;
const Y_POSITIONS = [BUFFER_Y, 0, 112, 216];
const SCALES    = [1,        1, 0.92, 0.84];
const OPACITIES = [0,        1, 1,    1   ];
const WIDTHS    = [100,    100, 94,   88  ]; // %

interface NotifItem {
  uid: number;
  price: string;
}

const SalesNotifications = () => {
  const nextUid = useRef(4);
  const nextNI  = useRef(4);

  // Start with 4 items: index 0 = hidden buffer, 1-3 = visible
  const [items, setItems] = useState<NotifItem[]>([
    { uid: 0, price: NOTIFICATIONS[0].price },
    { uid: 1, price: NOTIFICATIONS[1].price },
    { uid: 2, price: NOTIFICATIONS[2].price },
    { uid: 3, price: NOTIFICATIONS[3].price },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const ni = nextNI.current % NOTIFICATIONS.length;
        nextNI.current++;
        const newItem: NotifItem = {
          uid: nextUid.current++,
          price: NOTIFICATIONS[ni].price,
        };
        // New item goes to buffer (pos 0, invisible).
        // Old buffer (prev[0]) slides down to visible pos 1.
        // prev[3] falls off the array → AnimatePresence fires exit on it.
        return [newItem, prev[0], prev[1], prev[2]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-lg px-4 overflow-hidden ml-auto mr-8 md:mr-16 lg:mr-32" style={{ height: 320 }}>
          <div className="relative flex justify-center">
            <AnimatePresence initial={false}>
              {items.map((item, position) => (
                <m.div
                  key={item.uid}
                  // New items land directly at buffer position without animation
                  initial={false}
                  animate={{
                    opacity: OPACITIES[position],
                    y: Y_POSITIONS[position],
                    scale: SCALES[position],
                  }}
                  exit={{ opacity: 0, y: 320, scale: 0.75 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute rounded-2xl border border-white/10 bg-[#111111] p-4 flex items-center gap-4 shadow-lg shadow-black/30"
                  style={{
                    top: 0,
                    left: "50%",
                    x: "-50%",
                    width: `${WIDTHS[position]}%`,
                    maxWidth: 480,
                    transformOrigin: "center top",
                    // pointer-events off for the hidden buffer slot
                    pointerEvents: position === 0 ? "none" : "auto",
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
                  {position > 0 && (
                    <span
                      className="text-white/40 text-xs md:text-sm flex-shrink-0"
                      style={{ fontFamily: "'Articulat CF', sans-serif" }}
                    >
                      {position === 1 ? "agora" : position === 2 ? "1seg" : "2seg"}
                    </span>
                  )}
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
