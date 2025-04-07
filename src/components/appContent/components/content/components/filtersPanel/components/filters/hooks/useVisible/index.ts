import { useState, useRef, useEffect } from "react";
import { UseVisible, UseVisibleProps } from "./types";

export const useVisible = <TElement extends HTMLElement>({
  onBlur,
}: UseVisibleProps = {}): UseVisible<TElement> => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSetVisible = (value: boolean) => setIsVisible(value);
  const handleToggleVisible = () => setIsVisible(!isVisible);
  const containerRef = useRef<TElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isVisible
      ) {
        onBlur?.();
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
    handleToggleVisible,
  };
};
