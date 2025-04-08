import { useRef } from "react";
import { DogsResultsProps } from "./types";
import { LoadingMoreDogs } from "./components/loadingMoreDogs";
import { Table } from "@/components/appContent/components/content/components/dogsResults/components/table";
import { ActiveFilters } from "../filtersPanel/components/filters/components/autoComplete/components/activeFilters";
import { useReachEnd } from "./hooks/useReachEnd";

export const DogsResults = ({
  activeFilters,
  handleRemoveFilter,
  dogs,
  handleLoadMore,
  isFetching,
  isLoading,
  hasNextPage,
}: DogsResultsProps) => {
  const getMoreDogs = () => {
    if (isFetching || !hasNextPage) return;
    handleLoadMore();
  };

  const loaderRef = useRef<HTMLDivElement>(null);
  useReachEnd<HTMLDivElement>(loaderRef, getMoreDogs);

  return (
    <section className="basis-[70%] w-screen flex flex-col gap-5">
      <ActiveFilters
        {...{
          activeFilters,
          handleRemoveFilter,
        }}
      />
      <Table {...{ dogs, isLoading }} />
      <LoadingMoreDogs {...{ isFetching, loaderRef, isLoading }} />
    </section>
  );
};
