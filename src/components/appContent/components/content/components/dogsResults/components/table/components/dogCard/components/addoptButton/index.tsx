import { getColor } from "@/utils/getColor";
import { Button } from "pixel-retroui";

type AddoptButtonProps = {
  onClick?: () => void | undefined;
  adopted: boolean;
  disableAddoptButton?: boolean;
};

export const AddoptButton = ({
  onClick,
  disableAddoptButton,
  adopted = false,
}: AddoptButtonProps) => {
  if (!onClick) return null;

  const handleOnClick = () => {
    onClick?.();
  };

  if (disableAddoptButton) return null;

  return (
    <Button
      bg={getColor("primary")}
      textColor={getColor("background")}
      onClick={handleOnClick}
      className="w-28 h-fit"
    >
      {adopted ? "Remove" : "Addopt"}
    </Button>
  );
};
