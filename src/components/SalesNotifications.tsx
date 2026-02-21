import { useState, useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";
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
const BUFFER_Y = -80;
const Y_POSITIONS_MOBILE = [BUFFER_Y, 0, 88, 170];
const Y_POSITIONS_DESKTOP = [BUFFER_Y, 0, 128, 248];
const SCALES    = [1,        1, 0.92, 0.84];
const OPACITIES = [0,        1, 1,    1   ];
const WIDTHS    = [100,    100, 94,   88  ]; // %

interface NotifItem {
  uid: number;
  price: string;
}

const useIsMd = () => {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsMd(mql.matches);
    mql.addEventListener("change", onChange);
    setIsMd(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return isMd;
};

const SalesNotifications = () => {
  const isMd = useIsMd();
  const nextUid = useRef(4);
  const nextNI  = useRef(4);

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
        return [newItem, prev[0], prev[1], prev[2]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

          {/* Text side */}
          <div className="flex-1 flex flex-col gap-5 text-left lg:text-left">
            {/* Badge */}
            <div className="flex justify-start">
              <span
                className="inline-flex items-center gap-2 border border-primary rounded-full px-4 py-1.5 text-white text-sm"
                style={{ fontFamily: "'Articulat CF', sans-serif" }}
              >
                <Bell size={18} className="text-white" />
                Afiliação
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Afiliação<br />
              <span className="text-primary">Rise Community</span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-white font-semibold text-base md:text-lg"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Promova a Rise Community e lucre com cada venda que você gerar
            </p>

            {/* Description */}
            <p
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm lg:mx-0"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Divulgue seu link de afiliado, gere vendas e receba comissões automáticas. Uma das formas mais simples de faturar no digital.
            </p>
          </div>

          {/* Notifications side */}
          <div className="w-full max-w-xl overflow-hidden" style={{ height: isMd ? 360 : 280 }}>
            <div className="relative w-full" style={{ height: isMd ? 360 : 280 }}>
              <AnimatePresence initial={false}>
                {items.map((item, position) => (
                  <m.div
                    key={item.uid}
                    initial={false}
                    animate={{
                      opacity: OPACITIES[position],
                      y: (isMd ? Y_POSITIONS_DESKTOP : Y_POSITIONS_MOBILE)[position],
                      scale: SCALES[position],
                    }}
                    exit={{ opacity: 0, y: 320, scale: 0.75 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute rounded-2xl border border-white/10 bg-[#111111] p-3 md:p-5 flex items-center gap-3 md:gap-5 shadow-lg shadow-black/30"
                    style={{
                      top: 0,
                      left: "50%",
                      x: "-50%",
                      width: `${WIDTHS[position]}%`,
                      maxWidth: 480,
                      transformOrigin: "center top",
                      pointerEvents: position === 0 ? "none" : "auto",
                    }}
                  >
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
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
                        className="text-white font-bold text-sm md:text-lg"
                        style={{ fontFamily: "'Articulat CF', sans-serif" }}
                      >
                        Venda realizada!
                      </p>
                      <p
                        className="text-white/60 text-xs md:text-base"
                        style={{ fontFamily: "'Articulat CF', sans-serif" }}
                      >
                        Valor: {item.price}
                      </p>
                    </div>
                    {position > 0 && (
                      <span
                        className="text-white/40 text-sm md:text-base flex-shrink-0"
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

        </div>
      </section>
    </LazyMotion>
  );
};

export default SalesNotifications;
