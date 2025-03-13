export type ActiveFilters = {
  city: string;
  state: string[];
  breeds: string[];
  zipCode: string[];
  filterBy: string;
  minAge: string;
  maxAge: string;
};

export type UseActiveFilters = {
  activeFilters: ActiveFilters;
  handleAddFilter: <T extends keyof ActiveFilters>(
    key: T,
    value: ActiveFilters[T]
  ) => void;

  handleRemoveFilter: <T extends keyof ActiveFilters>(
    key: T,
    valueToRemove: ActiveFilters[T]
  ) => void;
};
