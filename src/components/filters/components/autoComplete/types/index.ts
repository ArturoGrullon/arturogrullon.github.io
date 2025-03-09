import { AutoCompleteProps } from "../../../types";

export type GenerateOptionsProps<T> = Pick<
  AutoCompleteProps<T>,
  "getValue" | "activeOptions"
> & {
  filteredOptions: T[];
  inputValue: string;
  handleSelectedOption: (option: T) => void;
};
