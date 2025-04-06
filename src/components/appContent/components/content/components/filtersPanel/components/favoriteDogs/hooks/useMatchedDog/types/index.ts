export type MatchedDog = string | null;

export type UseMatchedDog = {
  matchedDog: MatchedDog;
  resetMatchedDog: () => void;
  updateMatchedDog: (dog: NonNullable<MatchedDog>) => void;
};
