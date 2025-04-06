import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";

export type DogSearchParams = Pick<
  ActiveFilters,
  "breeds" | "zipCodes" | "ageMin" | "ageMax" | "sort"
>;
