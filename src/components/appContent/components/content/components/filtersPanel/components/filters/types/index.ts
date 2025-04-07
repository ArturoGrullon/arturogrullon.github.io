import { FiltersPanelProps } from "../../../types";

type AutoComplete<TOptions = string | number> = {
  label: string;
  options: TOptions[];
  activeOptions?: TOptions[];
  onChange?: (options: TOptions[]) => void;
  onBlur?: (options: TOptions[]) => void;
  getValue: (value: TOptions) => string;
};

export type AutoCompleteProps<TOptions> = TOptions extends {
  [key: string]: unknown;
}
  ? AutoComplete<TOptions>
  : Omit<AutoComplete<TOptions>, "getValue"> & {
      getValue?: AutoComplete<TOptions>["getValue"];
    };

export type FiltersProps = Pick<
  FiltersPanelProps,
  "activeFilters" | "handleAddFilter"
>;
