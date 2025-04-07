import { RenderFiltersArrayProps } from "./types";
import { getColor } from "@/utils/getColor";
import { PixelButton } from "@/components/components/pixelButton";

export const RenderFiltersArray = ({
  label,
  items,
  handleRemoveFilter,
}: RenderFiltersArrayProps) => (
  <div className="flex gap-2 flex-wrap items-center text-red-600">
    <h2 className="text-black">{label}</h2>:
    {items.map((item: string, index) => (
      <PixelButton
        bg={getColor("primary")}
        textColor={getColor("background")}
        key={index}
        onClick={() => handleRemoveFilter(label, item)}
      >{`${item} X`}</PixelButton>
    ))}
  </div>
);
