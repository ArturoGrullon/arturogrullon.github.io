import { FavoriteDogs } from "./components/favoriteDogs";
import { Filters } from "./components/filters";
import { FiltersPanelProps } from "./types";

export const FiltersPanel = ({ ...filters }: FiltersPanelProps) => (
  <section className="basis-[30%] flex flex-col w-full p-5">
    <FavoriteDogs />
    <Filters {...filters} />
  </section>
);
