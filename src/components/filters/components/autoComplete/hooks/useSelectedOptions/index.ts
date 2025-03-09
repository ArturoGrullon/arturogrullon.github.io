import { useState } from "react";

export const useSelectedOptions = <T>(onChange?: (options: T[]) => void) => {
  const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

  const handleSelectedOption = (currentOption: T) => {
    if (!selectedOptions.includes(currentOption))
      return setSelectedOptions([...selectedOptions, currentOption]);

    setSelectedOptions((prevOptions) => {
      const newOptions = prevOptions.filter(
        (option) => option !== currentOption
      );
      onChange?.(newOptions);
      return newOptions;
    });
  };

  return {
    handleSelectedOption,
    selectedOptions,
  };
};
