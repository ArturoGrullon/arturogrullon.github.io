import { Button } from "pixel-retroui";
import { GenerateDogs } from "@/components/appContent/components/content/components/dogsResults/components/table/components/generateDogs";
import { Dog } from "@/types";

type FavoriteDogsProps = {
  favoriteDogs: Dog[];
  handleAdoptClick: () => void;
};

export const FavoriteDogsList = ({
  favoriteDogs,
  handleAdoptClick,
}: FavoriteDogsProps) => (
  <section className="p-12 flex flex-col gap-10 items-center">
    <h1>Favorite dogs</h1>
    <div className="flex gap-5 flex-wrap">
      <GenerateDogs dogs={favoriteDogs} />
    </div>
    <Button onClick={handleAdoptClick} className="w-[8rem] align-middle">
      Adopt one
    </Button>
  </section>
);
