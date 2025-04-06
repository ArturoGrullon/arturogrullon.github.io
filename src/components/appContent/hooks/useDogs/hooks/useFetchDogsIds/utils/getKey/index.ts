import { DogsSearch } from "@/types";

export const getKey =
  (getEndpointWithQuerys: (path: `/${string}`) => string) =>
  (pageIndex: number, previousPageData: DogsSearch) => {
    const dogsSearchUrl = getEndpointWithQuerys("/dogs/search");

    if (previousPageData && !previousPageData.next) return null;
    if (pageIndex === 0) return dogsSearchUrl;

    return getEndpointWithQuerys(previousPageData.next as `/${string}`);
  };
