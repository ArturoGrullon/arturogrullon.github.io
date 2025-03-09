import { useState, useRef, useEffect } from "react";

export const useVisible = <T>(
  selectedOptions: T[],
  onBlur?: (options: T[]) => void
) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSetVisible = () => setIsVisible(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onBlur?.(selectedOptions);
        setIsVisible(false);
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
