import { Dog } from "@/types";

export type UseFavoriteDogs = {
  favoriteDogs: Dog[];
  handleResetFavoriteDogs: () => void;
  handleFavoriteDog: (dogToAdd: Dog) => void;
};
