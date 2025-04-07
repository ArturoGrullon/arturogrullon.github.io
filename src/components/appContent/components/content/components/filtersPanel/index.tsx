import { AnimatePresence } from "motion/react";
import { FavoriteDogs } from "./components/favoriteDogs";
import { Filters } from "./components/filters";
import { FiltersPanelProps } from "./types";

export const FiltersPanel = ({ ...filters }: FiltersPanelProps) => (
  <section id="filters-panel" className="basis-[30%] flex flex-col w-full p-5">
    <AnimatePresence>
      <FavoriteDogs />
    </AnimatePresence>
    <Filters {...filters} />
  </section>
);
