import discordPreview from "@/assets/discord-preview.jpg";
import cat1 from "@/assets/categories/1.png";
import cat2 from "@/assets/categories/2.png";
import cat3 from "@/assets/categories/3.png";
import cat4 from "@/assets/categories/4.png";
import cat5 from "@/assets/categories/5.png";
import cat6 from "@/assets/categories/6.png";
import cat7 from "@/assets/categories/7.png";
import cat8 from "@/assets/categories/8.png";
import cat9 from "@/assets/categories/9.png";
import cat10 from "@/assets/categories/10.png";
import cat11 from "@/assets/categories/11.png";
import cat12 from "@/assets/categories/12.png";
import cat13 from "@/assets/categories/13.png";
import cat14 from "@/assets/categories/14.png";
import cat15 from "@/assets/categories/15.png";
import cat16 from "@/assets/categories/16.png";

const categoryImages = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];
const categoryImages2 = [cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16];

const DiscordPreviewSection = () => {
  return (
    <section className="relative bg-background pt-8 pb-32 overflow-visible">
      <div className="flex flex-col items-center text-center px-4">
        <div className="relative">
          <img
            src={discordPreview}
            alt="Discord Rise Community Preview"
            className="w-[52rem] rounded-lg shadow-lg"
          />
          <div className="absolute top-[17rem] md:top-[30rem] left-1/2 -translate-x-1/2 text-center z-10">
            <p className="text-foreground text-xl md:text-4xl font-bold whitespace-nowrap">
              Acesso ao <span className="text-primary font-extrabold">maior acervo</span> de rateio do Brasil
            </p>
            <p className="text-foreground/70 text-xs md:text-sm font-light mt-2 whitespace-nowrap w-max max-w-none mx-auto">
              Além de todo o conteúdo exclusivo da comunidade, você tem acesso vitalicio a centenas de
            </p>
            <p className="text-foreground/70 text-xs md:text-sm font-light whitespace-nowrap w-max max-w-none mx-auto">
              recursos organizados por segmento e área. Tudo atualizado semanalmente.
            </p>
            
            {/* Category Images Row 1 - Scroll Left */}
            <div className="-mt-14 overflow-hidden relative z-50 w-screen left-1/2 -translate-x-1/2">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-background via-background to-transparent z-20 pointer-events-none" />
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-background via-background to-transparent z-20 pointer-events-none" />
              <div className="flex flex-nowrap gap-0 animate-scroll-left w-max">
                {[...categoryImages, ...categoryImages, ...categoryImages, ...categoryImages].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Imagem de categoria ${(idx % 8) + 1}`}
                    className="w-56 h-56 object-contain flex-shrink-0"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
            
            {/* Category Images Row 2 - Scroll Right */}
            <div className="-mt-44 md:-mt-40 overflow-hidden relative z-50 w-screen left-1/2 -translate-x-1/2">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-background via-background to-transparent z-20 pointer-events-none" />
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-background via-background to-transparent z-20 pointer-events-none" />
              <div className="flex flex-nowrap gap-0 animate-scroll-right w-max">
                {[...categoryImages2, ...categoryImages2, ...categoryImages2, ...categoryImages2].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Imagem de categoria ${(idx % 8) + 9}`}
                    className="w-56 h-56 object-contain flex-shrink-0"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordPreviewSection;
