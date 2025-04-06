import { useState } from "react";
import { UseFavoriteDogs } from "./types";
import { Dog } from "@/types";

export const useFavoriteDogs = (): UseFavoriteDogs => {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);

  const handleFavoriteDog = (dogToAdd: Dog) => {
    const { id: dogId } = dogToAdd;
    const isInArray = favoriteDogs.some(({ id }) => id === dogId);

    //Append dog
    if (!isInArray) return setFavoriteDogs([...favoriteDogs, dogToAdd]);

    //Remove dog
    const filteredDogsArray = favoriteDogs.filter(({ id }) => id !== dogId);
    setFavoriteDogs(filteredDogsArray);
  };

  return {
    favoriteDogs,
    handleFavoriteDog,
    handleResetFavoriteDogs: () => setFavoriteDogs([]),
  };
};
