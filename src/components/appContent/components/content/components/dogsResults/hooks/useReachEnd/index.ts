import { useEffect, RefObject, useCallback } from "react";

export const useReachEnd = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onReachEnd: () => void
) => {
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) onReachEnd();
    },
    [onReachEnd]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, handleIntersect]);
};
