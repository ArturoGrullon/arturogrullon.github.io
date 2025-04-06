import { useContext } from "react";
import { Button } from "pixel-retroui";
import { AdoptedDogProps } from "./types";
import { DogCard } from "@/components/appContent/components/content/components/dogsResults/components/table/components/dogCard";
import { FavoriteDogsContext } from "@/components/appContent/components/content/context/favoriteDogsContext";

export const AdoptedDog = ({ adoptedDog, closePopup }: AdoptedDogProps) => {
  const { userName } = useContext(FavoriteDogsContext);
  if (!adoptedDog) return null;

  return (
    <div className="w-[40rem] h-[30rem] gap-12 flex flex-col justify-center items-center">
      <h2>Congrats {userName}! here's your adopted dog</h2>
      <DogCard {...{ dog: adoptedDog, disableAddoptButton: true }} />
      <Button onClick={closePopup}>Close</Button>
    </div>
  );
};
