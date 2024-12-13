import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Créez votre site web avec{" "}
          <span className="gradient-text">Evosyte</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Une nouvelle façon de concevoir votre présence en ligne,
          guidée par l'intelligence artificielle
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover-glow"
        >
          Découvrir les styles
        </motion.button>
      </motion.div>
    </section>
  );
};