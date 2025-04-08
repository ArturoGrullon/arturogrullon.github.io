import { useCallback, useState } from "react";
import { useFetchDogsIds } from "./hooks/useFetchDogsIds";
import { useFetchDogsMetaData } from "./hooks/useFetchDogsMetaData";
import { useQueriesResetRef } from "./hooks/useQueriesChanged";
import { UseDogs } from "./types";
import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";
import { Dog } from "@/types";
import { getDogSearchParams } from "@/utils/getDogSearchParams";
import { DogSearchParams } from "@/utils/getDogSearchParams/types";
import { getLocationSearchParams } from "@/utils/getLocationSearchParams";
import { getQueryString } from "@/utils/getQueryString";
import { useLoading } from "./hooks/useLoading";

export const useDogs = (activeFilters: ActiveFilters): UseDogs => {
  //Dogs search params
  const dogSearchParams = getDogSearchParams(activeFilters);
  const dogQueryString = getQueryString<DogSearchParams>(dogSearchParams);

  //Location search params
  const locationSearchParams = getLocationSearchParams(activeFilters);
  const locationQueryString = getQueryString(locationSearchParams);

  const getEndpointWithQuerys = useCallback(
    (path: `/${string}`) =>
      `${
        import.meta.env.VITE_BASE_URL
      }${path}?${dogQueryString}&${locationQueryString}`,
    [dogQueryString, locationQueryString]
  );

  //Fetch dogs ids
  const {
    dogsIdsArray,
    handleLoadMore,
    hasNextPage,
    isLoadingIds,
    isValidating,
    size,
    total,
  } = useFetchDogsIds({ getEndpointWithQuerys });

  const queriesChanged = useQueriesResetRef([
    dogQueryString,
    locationQueryString,
  ]);

  const [dogs, setDogs] = useState<Dog[] | null>(null);
  const { isLoadingDogs } = useFetchDogsMetaData({
    setDogs,
    size,
    getEndpointWithQuerys,
    dogsIdsArray,
    queriesChanged,
    hasNextPage,
  });

  const isLoading = useLoading({
    isLoadingDogs,
    isLoadingIds,
    isValidating,
  });

  return {
    dogs,
    handleLoadMore,
    isFetching: isLoadingDogs || isLoadingIds || isValidating,
    hasNextPage,
    isLoading,
    isValidating,
    total,
  };
};
