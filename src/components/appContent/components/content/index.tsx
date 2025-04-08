import { FiltersPanel } from "./components/filtersPanel";
import { DogsResults } from "./components/dogsResults";
import { FavoriteDogsProvider } from "./context/favoriteDogsProvider";
import { ContentProps } from "./types";
import { userGuide } from "./utils/userGuide";

export const Content = ({
  activeFilters,
  handleAddFilter,
  name: userName,
  ...dogResultsProps
}: ContentProps) => {
  const { dogs, total, isLoading } = dogResultsProps;
  userGuide();
  return (
    <main className="flex gap-2rem">
      <FavoriteDogsProvider userName={userName}>
        <FiltersPanel
          {...{
            activeFilters,
            handleAddFilter,
            dogCount: dogs.length,
            total,
            isLoading,
          }}
        />
        <DogsResults {...{ ...dogResultsProps, activeFilters, isLoading }} />
      </FavoriteDogsProvider>
    </main>
  );
};
