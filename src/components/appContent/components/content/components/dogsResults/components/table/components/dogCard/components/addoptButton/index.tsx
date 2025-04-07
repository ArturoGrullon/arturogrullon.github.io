import { PixelButton } from "@/components/components/pixelButton";
import { getColor } from "@/utils/getColor";
import { AddoptButtonProps } from "./types";

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
    <PixelButton
      bg={getColor("primary")}
      textColor={getColor("background")}
      onClick={handleOnClick}
      className="w-28 h-fit"
    >
      {adopted ? "Remove" : "Addopt"}
    </PixelButton>
  );
};
