import { AutoCompleteProps } from "../../../../types";
import { getCurrentOption } from "../getCurrentOption";

export const getFilteredOptions = <T>(
  options: T[],
  inputValue: string,
  getValue: AutoCompleteProps<T>["getValue"]
) =>
  options.filter((option) => {
    const currentOption = getCurrentOption(option, getValue);
    return currentOption?.toLowerCase().includes(inputValue.toLowerCase());
  });
