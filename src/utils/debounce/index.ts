import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay = 300
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return (...args: Parameters<T>): void => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => callback(...args), delay);
  };
};
