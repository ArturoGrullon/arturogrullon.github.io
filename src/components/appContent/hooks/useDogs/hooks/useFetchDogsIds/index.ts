import useSWRInfinite from "swr/infinite";
import { getKey } from "./utils/getKey";
import { fetcher } from "./utils/fetcher";
import { UseFetchDogsIds, UseFetchDogsIdsProps } from "./types";
import { ActiveFilters } from "@/components/appContent/components/content/components/filtersPanel/hooks/useActiveFilters/types";
import { DogsSearch } from "@/types";

export const useFetchDogsIds = ({
  getEndpointWithQuerys,
}: UseFetchDogsIdsProps): UseFetchDogsIds => {
  const key = getKey(getEndpointWithQuerys);

  //Fetch Ids
  const {
    data: dogsIdsArray,
    size,
    setSize,
    isLoading: isLoadingIds,
    isValidating,
  } = useSWRInfinite<DogsSearch, ActiveFilters>(key, fetcher, {
    revalidateOnFocus: false,
  });

  const handleLoadMore = () => setSize(size + 1);

  //Size starts at 1, so we need to subtract 1 to match the index
  const index = size - 1;
  const total = dogsIdsArray?.[index]?.total;
  const hasNextPage =
    Array.isArray(dogsIdsArray) && Boolean(dogsIdsArray[index]?.next);

  return {
    dogsIdsArray,
    size,
    setSize,
    isLoadingIds,
    isValidating,
    handleLoadMore,
    hasNextPage,
    total,
  };
};
