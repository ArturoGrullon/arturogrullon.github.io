import { Card } from "pixel-retroui";
import { useContext } from "react";
import { DogMetadata } from "../dogMetadata";
import { AddoptButton } from "./components/addoptButton";
import { DogCardProps } from "./types";
import { FavoriteDogsContext } from "@/components/appContent/components/content/context/favoriteDogsContext";
import { getColor } from "@/utils/getColor";

export const DogCard = ({ dog, disableAddoptButton }: DogCardProps) => {
  const { handleFavoriteDog, favoriteDogs } = useContext(FavoriteDogsContext);
  const isAddopted = favoriteDogs.map(({ id }) => id).includes(dog.id);

  return (
    <Card
      bg={getColor("surface")}
      borderColor={getColor("primary")}
      className=" flex  gap-5 justify-between items-center"
    >
      <section className="flex gap-4 items-center">
        <img
          src={dog.img}
          alt={dog.name}
          className="w-[10rem] !h-[10rem] object-fill rounded-2xl"
        />
        <DogMetadata {...{ ...dog }} />
      </section>
      <AddoptButton
        adopted={isAddopted}
        onClick={() => handleFavoriteDog(dog)}
        disableAddoptButton={disableAddoptButton}
      />
    </Card>
  );
};
