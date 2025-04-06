import { useEffect, useRef } from "react";

export const useQueriesResetRef = (queries: string[]) => {
  const prevQueriesRef = useRef<string[] | null>(null);
  const shouldResetRef = useRef(false);

  useEffect(() => {
    const prev = prevQueriesRef.current;
    if (!prev) {
      prevQueriesRef.current = queries;
      return;
    }

    const changed = queries.some((query, index) => query !== prev[index]);
    if (changed) {
      shouldResetRef.current = true;
      prevQueriesRef.current = queries;
    }
  }, [queries.join("|")]);

  return shouldResetRef;
};
