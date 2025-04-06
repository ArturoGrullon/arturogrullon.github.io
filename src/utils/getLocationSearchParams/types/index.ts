import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";

export type LocationSearchParams = Pick<ActiveFilters, "city" | "states">;
