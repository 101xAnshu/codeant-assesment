import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: string;
  text: string;
  onRouteChange?: (loading: boolean) => void;
};

export const SignInCard = ({ icon, text, onRouteChange }: Props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    onRouteChange?.(true);

    // Wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsLoading(false);
    onRouteChange?.(false);
    navigate("/repositories");
  };

  return (
    <div className="w-full md:w-2/3">
      <div
        className="flex justify-center items-center gap-4 hover:bg-background-neutral py-4 border border-border-muted rounded-[8px] w-full cursor-pointer"
        onClick={!isLoading ? handleClick : undefined}
      >
        <img src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} />
        <h1 className="text-text-muted font-semibold text-base">{text}</h1>
      </div>
    </div>
  );
};
