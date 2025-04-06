import {
  UseActiveFilters,
  ActiveFilters,
} from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";

export type RenderFilterProps = Pick<UseActiveFilters, "handleRemoveFilter"> & {
  label: keyof ActiveFilters;
  value: string;
};
