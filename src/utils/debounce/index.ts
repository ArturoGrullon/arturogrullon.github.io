import { useRef } from "react";

export const useDebounce = <T extends (...args: never[]) => unknown>(
  callback: T,
  delay = 300
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return (...args: Parameters<T>): void => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => callback(...args), delay);
  };
};
