import { Dog } from "@/types";

export type FavoriteDogsProps = {
  favoriteDogs: Dog[];
  handleAdoptClick: () => void;
};
