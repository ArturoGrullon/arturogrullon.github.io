import { Button } from "pixel-retroui";
import { RenderFilterProps } from "./types";
import { getColor } from "@/utils/getColor";

export const RenderFilter = ({
  label,
  value,
  handleRemoveFilter,
}: RenderFilterProps) => (
  <section className="flex gap-2 items-center text-nowrap">
    {label ? <h2 className="text-black">{label}:</h2> : null}
    <Button
      bg={getColor("primary")}
      textColor={getColor("background")}
      onClick={() => handleRemoveFilter(label, value)}
    >{`${value} X`}</Button>
  </section>
);
