import { Button } from "pixel-retroui";
import { RenderFiltersArrayProps } from "./types";

export const RenderFiltersArray = ({
  label,
  items,
  handleRemoveFilter,
}: RenderFiltersArrayProps) => (
  <div className="flex gap-2 flex-wrap items-center">
    {label}:
    {items.map((item: string, index) => (
      <Button
        key={index}
        onClick={() => handleRemoveFilter(label, item)}
      >{`${item} X`}</Button>
    ))}
  </div>
);
