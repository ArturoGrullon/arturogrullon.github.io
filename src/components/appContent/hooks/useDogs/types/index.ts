import { Dog } from "@/types";
import { UseFetchDogsIds } from "../hooks/useFetchDogsIds/types";

export type UseDogs = Pick<
  UseFetchDogsIds,
  "hasNextPage" | "handleLoadMore"
> & {
  dogs: Dog[] | null;
  isLoading: boolean;
  isValidating: boolean;
};
