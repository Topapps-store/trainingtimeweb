import logoColor from "@assets/Color logo - no background_1756766954736.png";
import logoWhite from "@assets/White logo - no background_1756766954737.png";
import logoBlack from "@assets/Black logo - no background_1756766954735.png";

interface TrainingTimeLogoProps {
  className?: string;
  variant?: "color" | "white" | "black";
}

export default function TrainingTimeLogo({ className = "h-16 w-auto", variant = "color" }: TrainingTimeLogoProps) {
  const getLogoSrc = () => {
    switch (variant) {
      case "white":
        return logoWhite;
      case "black":
        return logoBlack;
      default:
        return logoColor;
    }
  };

  return (
    <img 
      src={getLogoSrc()} 
      alt="Training Time - Entrenament Personal" 
      className={className}
    />
  );
}
