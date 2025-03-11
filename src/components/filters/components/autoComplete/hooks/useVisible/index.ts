import { useState, useRef, useEffect } from "react";
import { UseVisibleProps } from "./types";

export const useVisible = <T>({
  selectedOptionsRef,
  handleResetSelectedOptions,
  onBlur,
}: UseVisibleProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSetVisible = () => setIsVisible(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isVisible
      ) {
        onBlur?.(selectedOptionsRef.current);
        setIsVisible(false);
        handleResetSelectedOptions();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return {
    isVisible,
    handleSetVisible,
    containerRef,
  };
};
