import { useState } from "react";
import { useDebounce } from "../../../../../../utils/debounce";
import { InputProps } from "../../types";

export const useInputValue = ({
  onChange,
  onPressEnter,
}: Pick<InputProps, "onChange" | "onPressEnter">) => {
  const safeOnChange = onChange ?? (() => {}); // Handle possible undefined
  const debounceOnChange = useDebounce(safeOnChange, 500);

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (value: string) => {
    setInputValue(value);
    return debounceOnChange?.(value);
  };

  const handleOnKeyDown = (key: string, target: EventTarget) => {
    const value = (target as HTMLInputElement).value;
    setInputValue(value);

    if (key === "Enter") {
      onPressEnter?.(value);
      setInputValue("");
    }
  };

  return {
    inputValue,
    handleOnChange,
    handleOnKeyDown,
  };
};
