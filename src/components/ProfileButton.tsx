import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

export const ProfileButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 text-white hover:text-primary"
      onClick={() => {/* TODO: Add login functionality */}}
    >
      <UserRound className="h-6 w-6" />
    </Button>
  );
};