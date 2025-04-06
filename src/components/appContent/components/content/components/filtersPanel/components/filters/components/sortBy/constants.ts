import { Sort } from "../../../../hooks/useActiveFilters/types";

type SortOptions = { label: string; value: Sort }[];

export const SORT_OPTIONS: SortOptions = [
  {
    label: "Ascending by breed",
    value: "breed:asc",
  },
  {
    label: "Descending by breed",
    value: "breed:desc",
  },
  {
    label: "Ascending by age",
    value: "age:asc",
  },
  {
    label: "Descending by age",
    value: "age:desc",
  },
  {
    label: "Ascending by name",
    value: "name:asc",
  },
  {
    label: "Descending by name",
    value: "name:desc",
  },
];
