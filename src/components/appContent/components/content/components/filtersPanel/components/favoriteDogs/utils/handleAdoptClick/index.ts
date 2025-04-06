import { HandleAdoptClickProps } from "./types";

export const handleAdoptClick = async ({
  favoriteDogs,
  trigger,
  updateMatchedDog,
}: HandleAdoptClickProps) => {
  const dogIds = favoriteDogs.map(({ id }) => id);
  const { match } = await trigger(dogIds);
  updateMatchedDog(match);
};
