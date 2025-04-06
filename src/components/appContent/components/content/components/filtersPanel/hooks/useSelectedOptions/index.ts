import { useEffect, useRef } from "react";

export const useSelectedOptions = <T>(
  onChange?: (options: T[]) => void,
  activeOptions: T[] = []
) => {
  const selectedOptionsRef = useRef<T[]>(activeOptions);

  //Keep selectedOptionsRef up to date with activeOptions
  useEffect(() => {
    selectedOptionsRef.current = activeOptions;
  }, [activeOptions]);

  const handleSelectedOption = (currentOption: T) => {
    const selectedOptions = selectedOptionsRef.current;

    const newOptions = selectedOptions.includes(currentOption)
      ? selectedOptions.filter((option) => option !== currentOption) // Remove
      : [...selectedOptions, currentOption]; // Add

    selectedOptionsRef.current = newOptions;
    onChange?.(newOptions);
  };

  return {
    selectedOptionsRef,
    handleSelectedOption,
  };
};
