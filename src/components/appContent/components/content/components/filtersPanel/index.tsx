import { AnimatePresence } from "motion/react";
import { FavoriteDogs } from "./components/favoriteDogs";
import { Filters } from "./components/filters";
import { FiltersPanelProps } from "./types";
import { DogsCount } from "./components/dogsCount";

export const FiltersPanel = ({
  dogCount,
  total,
  ...filters
}: FiltersPanelProps) => (
  <section id="filters-panel" className="basis-[30%] w-full p-5 relative">
    <div className="sticky top-25 flex flex-col gap-3">
      <AnimatePresence>
        <FavoriteDogs />
      </AnimatePresence>
      <Filters {...filters} />
      <DogsCount {...{ dogCount, total }} />
    </div>
  </section>
);
