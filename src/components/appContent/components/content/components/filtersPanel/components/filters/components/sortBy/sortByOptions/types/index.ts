import { UseVisible } from "../../../../hooks/useVisible/types";
import { FiltersProps } from "../../../../types";

export type SortByOptionsProps = Pick<FiltersProps, "activeFilters"> & {
  isVisible: UseVisible<HTMLDivElement>["isVisible"];
  onClick: (value: string) => void;
};
