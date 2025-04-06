import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";
import { DogSearchParams } from "./types";

export const getDogSearchParams = (activeFilters: ActiveFilters) => {
  const dogSearchParams = ({
    breeds,
    zipCodes,
    ageMin,
    ageMax,
    sort,
  }: DogSearchParams) => ({
    breeds,
    zipCodes,
    ageMin,
    ageMax,
    sort,
  });

  return dogSearchParams(activeFilters);
};
