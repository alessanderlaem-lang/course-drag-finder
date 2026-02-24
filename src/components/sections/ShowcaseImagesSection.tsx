import { motion } from "framer-motion";

const ShowcaseImagesSection = () => {
  const placeholders = [1, 2, 3, 4];

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-video bg-[#111] border border-[#333] rounded-2xl flex items-center justify-center"
            >
              <span className="text-gray-500 text-sm md:text-base">Imagem {i}</span>
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
          <div className="w-full md:w-1/2 aspect-video bg-[#111] border border-[#333] rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 text-sm md:text-base">Imagem 5</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShowcaseImagesSection;
