import { motion } from "framer-motion";

interface StyleCardProps {
  title: string;
  description: string;
  image: string;
}

export const StyleCard = ({ title, description, image }: StyleCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-dark-light rounded-xl p-6 hover-glow cursor-pointer overflow-hidden group"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};