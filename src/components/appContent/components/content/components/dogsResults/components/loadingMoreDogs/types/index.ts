import { RefObject } from "react";

export type LoadingMoreDogsProps = {
  isLoading: boolean;
  loaderRef: RefObject<HTMLDivElement | null>;
};
