import { createContext } from "react";
import { User } from "@/components/loginWrapper/types";
import { Dog } from "@/types";

export const FavoriteDogsContext = createContext<{
  favoriteDogs: Dog[];
  handleResetFavoriteDogs: () => void;
  handleFavoriteDog: (dogToAdd: Dog) => void;
  userName: User["name"];
}>({
  favoriteDogs: [],
  handleResetFavoriteDogs: () => {},
  handleFavoriteDog: () => {},
  userName: "",
});
