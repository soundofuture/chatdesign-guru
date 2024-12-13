import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-dark flex items-center justify-center">
      <div className="container max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className="w-full aspect-square relative gradient-border bg-dark-light rounded-xl p-8 hover-glow cursor-pointer"
            onClick={() => navigate('/create')}
          >
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Créer un projet</h2>
              <p className="text-gray-400">
                Découvrez nos designs et obtenez un devis personnalisé
              </p>
            </div>
          </div>

          <div 
            className="w-full aspect-square relative gradient-border bg-dark-light rounded-xl p-8 hover-glow cursor-pointer"
            onClick={() => navigate('/maintenance')}
          >
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="text-3xl font-bold gradient-text">Maintenance</h2>
              <p className="text-gray-400">
                Besoin d'aide avec votre site existant ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;