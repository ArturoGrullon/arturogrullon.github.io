import { UseActiveFilters } from "../../../hooks/useActiveFilters/types";

export type ActiveFiltersProps = Pick<
  UseActiveFilters,
  "activeFilters" | "handleRemoveFilter"
>;
