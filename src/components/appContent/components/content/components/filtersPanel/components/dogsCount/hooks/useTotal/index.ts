import { useEffect, useState } from "react";

export const useTotal = (value: number | undefined) => {
  const [total, setPersistedTotal] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof value !== "number") return;
    setPersistedTotal(value);
  }, [value]);

  return total;
};
