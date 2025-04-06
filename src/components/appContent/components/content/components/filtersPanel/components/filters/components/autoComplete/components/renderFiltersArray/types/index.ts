import { RenderFilterProps } from "../../renderFilter/types";

export type RenderFiltersArrayProps = Omit<RenderFilterProps, "value"> & {
  items: string[];
};
