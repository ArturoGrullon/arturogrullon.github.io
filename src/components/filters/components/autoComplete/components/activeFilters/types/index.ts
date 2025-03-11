export type ActiveFiltersProps<T> = {
  activeFilters: Record<string, any>;
  handleRemoveFilter: (key: string, valueToRemove: T) => void;
};
