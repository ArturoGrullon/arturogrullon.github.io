import { Dog } from "@/types";
import { RefObject } from "react";

export type FavoriteDogsProps = {
  favoriteDogsRef: RefObject<Dog[]>;
  handleResetFavoriteDogs: () => void;
};
