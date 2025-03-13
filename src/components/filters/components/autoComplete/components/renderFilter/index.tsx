import { Button } from "pixel-retroui";
import { RenderFilterProps } from "./types";


export const RenderFilter = ({
  label,
  value,
  handleRemoveFilter,
}: RenderFilterProps) => (
  <section className="flex gap-2 items-center text-nowrap">
    {label ? <h2>{label}:</h2> : null}
    <Button
      onClick={() => handleRemoveFilter(label, value)}
    >{`${value} X`}</Button>
  </section>
);
