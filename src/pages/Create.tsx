import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";

const Create = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold gradient-text mb-8">Création de Projet</h1>
        <p className="text-gray-400 text-lg">
          Connectez-vous pour commencer à créer votre projet
        </p>
      </motion.div>
    </div>
  );
};

export default Create;