import { useContext } from "react";
import { AdoptedDogProps } from "./types";
import { DogCard } from "@/components/appContent/components/content/components/dogsResults/components/table/components/dogCard";
import { FavoriteDogsContext } from "@/components/appContent/components/content/context/favoriteDogsContext";
import { getColor } from "@/utils/getColor";
import { PixelButton } from "@/components/components/pixelButton";

export const AdoptedDog = ({ adoptedDog, closePopup }: AdoptedDogProps) => {
  const { userName } = useContext(FavoriteDogsContext);
  if (!adoptedDog) return null;

  return (
    <div className="w-[40rem] h-[30rem] gap-12 flex flex-col justify-center items-center">
      <h2 className="text-black w-[40rem] text-2xl overflow-hidden text-ellipsis whitespace-wrap">
        Congrats {userName}! here's your adopted dog
      </h2>
      <DogCard {...{ dog: adoptedDog, disableAddoptButton: true }} />
      <PixelButton
        bg={getColor("surface")}
        textColor={getColor("primary")}
        onClick={closePopup}
      >
        Close
      </PixelButton>
    </div>
  );
};
