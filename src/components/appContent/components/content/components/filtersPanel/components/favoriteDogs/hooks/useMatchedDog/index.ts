import { useState } from "react";
import { MatchedDog, UseMatchedDog } from "./types";

export const useMatchedDog = (): UseMatchedDog => {
  const [matchedDog, setMatchedDog] = useState<MatchedDog>(null);

  return {
    matchedDog,
    resetMatchedDog: () => setMatchedDog(null),
    updateMatchedDog: (dog) => setMatchedDog(dog),
  };
};
