import { motion } from 'framer-motion';

export default function HeroImageBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <img
        src="src/assets/hero.png"
        alt="Visuel transition"
        className="w-full h-[500px] object-cover"
      />
    </motion.div>
  );
}

