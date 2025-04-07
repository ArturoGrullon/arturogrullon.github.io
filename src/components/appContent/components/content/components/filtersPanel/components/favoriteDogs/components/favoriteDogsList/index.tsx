import { GenerateDogs } from "@/components/appContent/components/content/components/dogsResults/components/table/components/generateDogs";
import { Dog } from "@/types";
import { getColor } from "@/utils/getColor";
import { PixelButton } from "@/components/components/pixelButton";

type FavoriteDogsProps = {
  favoriteDogs: Dog[];
  handleAdoptClick: () => void;
};

export const FavoriteDogsList = ({
  favoriteDogs,
  handleAdoptClick,
}: FavoriteDogsProps) => (
  <section className="p-12 flex flex-col gap-10 items-center">
    <h1 className="text-black !text-2xl">Favorite dogs</h1>
    <div className="flex gap-5 flex-wrap items-center justify-between w-[80rem] max-h-[50rem] overflow-y-scroll">
      <GenerateDogs dogs={favoriteDogs} />
    </div>
    <PixelButton
      bg={getColor("surface")}
      textColor={getColor("primary")}
      onClick={handleAdoptClick}
      className="w-[8rem] align-middle"
    >
      Adopt one
    </PixelButton>
  </section>
);
