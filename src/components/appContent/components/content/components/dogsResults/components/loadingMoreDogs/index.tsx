import { LoadingMoreDogsProps } from "./types";

export const LoadingMoreDogs = ({
  isFetching,
  loaderRef,
  isLoading,
}: LoadingMoreDogsProps) => {
  if (isLoading) return null;

  if (isFetching)
    return <h4 className="text-black !text-2xl">Fetching more dogs...</h4>;

  return <div ref={loaderRef}></div>;
};
