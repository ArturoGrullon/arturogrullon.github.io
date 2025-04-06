import { UseActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";

export type ActiveFiltersProps = Pick<
  UseActiveFilters,
  "activeFilters" | "handleRemoveFilter"
>;
