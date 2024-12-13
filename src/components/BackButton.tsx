import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 left-4 text-white hover:text-primary"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
};