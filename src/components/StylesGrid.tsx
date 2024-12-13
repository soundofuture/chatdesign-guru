import { motion } from "framer-motion";
import { StyleCard } from "./StyleCard";

const styles = [
  {
    title: "Moderne",
    description: "Design épuré avec des lignes claires et une navigation intuitive",
    image: "/placeholder.svg",
  },
  {
    title: "Minimaliste",
    description: "L'essentiel mis en avant, sans fioritures",
    image: "/placeholder.svg",
  },
  {
    title: "Élégant",
    description: "Sophistiqué et raffiné, pour une image premium",
    image: "/placeholder.svg",
  },
  {
    title: "Créatif",
    description: "Unique et mémorable, pour se démarquer",
    image: "/placeholder.svg",
  },
];

interface StylesGridProps {
  onSelect: (style: string) => void;
}

export const StylesGrid = ({ onSelect }: StylesGridProps) => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map((style, index) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(style.title)}
            >
              <StyleCard {...style} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};