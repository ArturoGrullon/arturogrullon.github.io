import { useState } from "react";

export const useActiveFilters = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const handleAddFilter = <T,>(key: string, value: T) => {
    setActiveFilters({ ...activeFilters, [key]: value });
  };

  const handleRemoveFilter = <T,>(key: string, valueToRemove: T) => {
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
