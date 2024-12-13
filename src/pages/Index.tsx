import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ProfileButton } from "@/components/ProfileButton";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ProfileButton />
      
      <div className="h-screen flex flex-col md:flex-row">
        <motion.div 
          className="flex-1 relative cursor-pointer group"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/create')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="text-center">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Créer un projet
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-white/80"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Découvrez nos designs et obtenez un devis personnalisé
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative cursor-pointer group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/maintenance')}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-primary-light/20 to-primary-light opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="text-center">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Maintenance
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-white/80"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Besoin d'aide avec votre site existant ?
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Index;