import { AutoCompleteProps } from "../../../types";

export type GenerateOptionsProps<T> = Pick<AutoCompleteProps<T>, "getValue"> & {
  filteredOptions: T[];
  inputValue: string;
  handleSelectedOption: (option: T) => void;
  selectedOptionsRef: React.RefObject<T[]>;
};
