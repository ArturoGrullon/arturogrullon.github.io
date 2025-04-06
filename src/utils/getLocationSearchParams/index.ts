import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";
import { LocationSearchParams } from "./types";

export const getLocationSearchParams = (activeFilters: ActiveFilters) => {
  const locationSearchParams = ({ city, states }: LocationSearchParams) => ({
    city,
    states,
  });

  return locationSearchParams(activeFilters);
};
