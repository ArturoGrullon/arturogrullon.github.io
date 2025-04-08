import { useState, useRef, useEffect } from "react";
import { UseLoadingProps } from "./types";

export const useLoading = ({
  isLoadingDogs,
  isLoadingIds,
  isValidating,
}: UseLoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const delay = 5000; //5s
    timerRef.current = setTimeout(() => {
      setIsLoading(true);
    }, delay);

    if (!isLoadingDogs && !isLoadingIds && !isValidating) {
      setIsLoading(false);
      clearTimeout(timerRef.current);
    }

    //Reset ID on unmount
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isLoadingDogs, isLoadingIds, isValidating]);

  return isLoading;
};
