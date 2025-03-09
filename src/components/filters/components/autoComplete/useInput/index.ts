import { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (value: string) => setInputValue(value);

  return {
    inputValue,
    handleInputValue,
  };
};
