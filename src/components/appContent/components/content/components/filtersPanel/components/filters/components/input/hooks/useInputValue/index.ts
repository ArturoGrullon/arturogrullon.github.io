import { useEffect, useState } from "react";
import { InputProps } from "../../types";
import { useDebounce } from "@/utils/debounce";

export const useInputValue = ({
  onChange,
  onPressEnter,
  value,
}: Pick<InputProps, "onChange" | "onPressEnter" | "value">) => {
  const safeOnChange = onChange ?? (() => {});
  const safeOnPressEnter = onPressEnter ?? (() => {});
  const debounceOnChange = useDebounce(safeOnChange, 500);

  const [inputValue, setInputValue] = useState(value ?? "");

  useEffect(() => {
    setInputValue(value?.toString() ?? "");
  }, [value]);

  const handleOnChange = (value: string) => {
    setInputValue(value);
    debounceOnChange(value);
  };

  const handleOnKeyDown = (key: string, target: EventTarget) => {
    const value = (target as HTMLInputElement).value;
    setInputValue(value);

    if (key === "Enter") {
      safeOnPressEnter(value);
      setInputValue("");
    }
  };

  return {
    inputValue,
    handleOnChange,
    handleOnKeyDown,
  };
};
