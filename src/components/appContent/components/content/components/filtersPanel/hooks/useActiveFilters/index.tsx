import { useState } from "react";
import { DEFAULT_ACTIVE_FILTERS } from "./constants";
import { ActiveFilters, HandleAddFilter, UseActiveFilters } from "./types";

export const useActiveFilters = (): UseActiveFilters => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>(
    DEFAULT_ACTIVE_FILTERS
  );

  const handleAddFilter: HandleAddFilter<keyof ActiveFilters> = (
    key,
    value
  ) => {
    //If the value to add is not an array, and the property type is an array
    //Add element to array
    if (Array.isArray(activeFilters[key]) && !Array.isArray(value)) {
      return setActiveFilters({
        ...activeFilters,
        [key]: [...activeFilters[key], value],
      });
    }

    return setActiveFilters({ ...activeFilters, [key]: value });
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
