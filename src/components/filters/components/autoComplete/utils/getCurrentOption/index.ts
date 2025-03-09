import { AutoCompleteProps } from "../../../../types";

export const getCurrentOption = <T>(
  option: T,
  getValue?: AutoCompleteProps<T>["getValue"]
) => {
  if (getValue) return getValue(option);
  if (typeof option === "string") return option;
  if (typeof option === "number") return option.toString();

  throw new Error("Invalid option");
};
