import { DogsSearch } from "@/types";

export const getKey =
  (getEndpointWithQuerys: (path: `/${string}`) => string) =>
  (pageIndex: number, previousPageData: DogsSearch) => {
    const dogsSearchUrl = getEndpointWithQuerys("/dogs/search");

    if (pageIndex === 0) return dogsSearchUrl;
    if (previousPageData && !previousPageData.next) return null;

    const nextPage = `${import.meta.env.VITE_BASE_URL}${previousPageData.next}`;
    return nextPage;
  };
