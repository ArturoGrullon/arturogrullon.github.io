import { UseDogs } from "@/components/appContent/hooks/useDogs/types";
import { RefObject } from "react";

export type LoadingMoreDogsProps = Pick<UseDogs, "isLoading" | "isFetching"> & {
  loaderRef: RefObject<HTMLDivElement | null>;
};
