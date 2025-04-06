import { Content } from "./components/content";
import { LoadingContent } from "./components/loadingContent";
import { AppContentProps } from "./types";
import { useActiveFilters } from "./components/content/components/filtersPanel/hooks/useActiveFilters";
import { useDogs } from "./hooks/useDogs";

export const AppContent = ({ name }: AppContentProps) => {
  const { activeFilters, ...filterHandlers } = useActiveFilters();
  const { dogs, ...dogsProps } = useDogs(activeFilters);

  if (!dogs) return <LoadingContent />;

  return (
    <Content
      {...{
        ...filterHandlers,
        ...dogsProps,
        dogs,
        activeFilters,
        name,
      }}
    />
  );
};
