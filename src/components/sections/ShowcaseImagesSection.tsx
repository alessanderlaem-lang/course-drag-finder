import { motion } from "framer-motion";
import img1 from "@/assets/showcase/1.webp";
import img2 from "@/assets/showcase/2.webp";
import img3 from "@/assets/showcase/3.webp";
import img4 from "@/assets/showcase/4.webp";
import img5 from "@/assets/showcase/5.webp";

const images = [img1, img2, img3, img4];

const ShowcaseImagesSection = () => {
  return (
    <div className="py-8 md:py-12 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Showcase ${i + 1}`}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* 5th image centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={img5}
            alt="Showcase 5"
            className="w-full md:w-1/2 h-auto rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ShowcaseImagesSection;
