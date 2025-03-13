import { useState } from "react";
import { DEFAULT_ACTIVE_FILTERS } from "./constants";
import { ActiveFilters, UseActiveFilters } from "./types";

export const useActiveFilters = (): UseActiveFilters => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>(
    DEFAULT_ACTIVE_FILTERS
  );

  const handleAddFilter = <T extends keyof ActiveFilters>(
    key: T,
    value: ActiveFilters[T]
  ) => {
    setActiveFilters({ ...activeFilters, [key]: value });
  };

  const handleRemoveFilter = <T extends keyof ActiveFilters>(
    key: T,
    valueToRemove: ActiveFilters[T]
  ) => {
    if (!valueToRemove) return;
    const objectValue = activeFilters[key];

    if (Array.isArray(objectValue)) {
      const newFilters = objectValue.filter((item) => item !== valueToRemove);
      return setActiveFilters({ ...activeFilters, [key]: newFilters });
    }

    const newFilters = { ...activeFilters, [key]: null };
    return setActiveFilters(newFilters);
  };

  return {
    activeFilters,
    handleAddFilter,
    handleRemoveFilter,
  };
};
