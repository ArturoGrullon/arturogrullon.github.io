type SortOptions = "breed" | "name" | "age";
type SortOrder = "asc" | "desc";
export type Sort = `${SortOptions}:${SortOrder}`;

export type ActiveFilters = {
  city: string;
  states: string[];
  breeds: string[];
  zipCodes: string[];
  sort: Sort;
  ageMin: string;
  ageMax: string;
};

export type ActiveFiltersKeys = keyof ActiveFilters;

export type HandleAddFilter<TKeys extends ActiveFiltersKeys> = (
  key: TKeys,
  value: ActiveFilters[TKeys] extends Array<infer TArrayType>
    ? TArrayType | Array<TArrayType>
    : ActiveFilters[TKeys]
) => void;

export type UseActiveFilters = {
  activeFilters: ActiveFilters;
  handleAddFilter: HandleAddFilter<ActiveFiltersKeys>;
  handleRemoveFilter: <TKeys extends ActiveFiltersKeys>(
    key: TKeys,
    valueToRemove: ActiveFilters[TKeys]
  ) => void;
};
