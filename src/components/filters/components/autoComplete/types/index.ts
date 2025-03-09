import { AutoCompleteProps } from "../../../types";

export type GenerateOptionsProps<T> = {
  filteredOptions: T[];
  getValue: AutoCompleteProps<T>["getValue"];
  inputValue: string;
  handleSelectedOption: (option: T) => void;
};
