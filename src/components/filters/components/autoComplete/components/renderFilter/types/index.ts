import {
  ActiveFilters,
  UseActiveFilters,
} from "../../../hooks/useActiveFilters/types";

export type RenderFilterProps = Pick<UseActiveFilters, "handleRemoveFilter"> & {
  label: keyof ActiveFilters;
  value: string;
};
