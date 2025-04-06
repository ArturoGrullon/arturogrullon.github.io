import axios from "axios";
import toast from "react-hot-toast";
import useSWR from "swr";
import { UseFetchDogsMetaData } from "./types";
import { Dog } from "@/types";

export const useFetchDogsMetaData = ({
  setDogs,
  size,
  getEndpointWithQuerys,
  dogsIdsArray,
  queriesChanged,
  hasNextPage,
}: UseFetchDogsMetaData) => {
  //Size starts at 1, so we need to subtract 1 to match the index
  const currentArray = size - 1;
  const dogIds = dogsIdsArray?.[currentArray]?.resultIds ?? [];
  const hasDogsIds = !!dogIds.length;
  const dogsUrl = getEndpointWithQuerys("/dogs");

  const { isLoading: isLoadingDogs } = useSWR(
    hasDogsIds && hasNextPage ? [dogsUrl, dogIds] : null,
    ([url]) =>
      axios.request<Dog[]>({
        url,
        withCredentials: true,
        method: "post",
        data: dogIds,
      }),
    {
      onSuccess: ({ data: newDogs }) => {
        if (queriesChanged.current) {
          queriesChanged.current = false;
          return setDogs(newDogs);
        }
        setDogs((prev) => [...(prev || []), ...newDogs]);
      },
      revalidateOnFocus: false,
      onError: () => toast.error("Error fetching dogs, please try again later"),
    }
  );

  return {
    isLoadingDogs,
  };
};
