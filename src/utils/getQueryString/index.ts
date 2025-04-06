import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";

export const getQueryString = <TQueryString extends Partial<ActiveFilters>>(
  filters: TQueryString
) => {
  if (!filters || !Object.keys(filters).length) return "";
  const searchParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, filterValue]) => {
    if (!filterValue) return;
    if (!Array.isArray(filterValue)) return searchParams.set(key, filterValue);

    filterValue.forEach((item) => {
      searchParams.append(key, item);
    });
  });

  return searchParams.toString();
};
