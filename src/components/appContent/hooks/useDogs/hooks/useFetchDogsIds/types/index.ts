import { DogsSearch } from "@/types";

export type UseFetchDogsIdsProps = {
  getEndpointWithQuerys: (path: `/${string}`) => string;
};

export type UseFetchDogsIds = {
  dogsIdsArray: DogsSearch[] | undefined;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  isLoadingIds: boolean;
  isValidating: boolean;
  handleLoadMore: () => void;
  hasNextPage: boolean;
  total: number | undefined;
};
