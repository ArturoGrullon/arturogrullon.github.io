import { FiltersPanel } from "./components/filtersPanel";
import { DogsResults } from "./components/dogsResults";
import { FavoriteDogsProvider } from "./context/favoriteDogsProvider";
import { ContentProps } from "./types";

export const Content = ({
  activeFilters,
  handleAddFilter,
  name: userName,
  ...dogResultsProps
}: ContentProps) => (
  <main className="flex gap-2rem">
    <FavoriteDogsProvider userName={userName}>
      <FiltersPanel {...{ activeFilters, handleAddFilter }} />
      <DogsResults {...{ ...dogResultsProps, activeFilters }} />
    </FavoriteDogsProvider>
  </main>
);
