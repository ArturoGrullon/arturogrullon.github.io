import { LoadingMoreDogsProps } from "./types";

export const LoadingMoreDogs = ({
  isLoading,
  loaderRef,
}: LoadingMoreDogsProps) => {
  if (isLoading)
    return <h4 className="text-black !text-2xl">Fetching more dogs...</h4>;

  return <div ref={loaderRef}></div>;
};
