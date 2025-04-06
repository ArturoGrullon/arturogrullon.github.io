import React, { RefObject } from "react";
import { Dog, DogsSearch } from "@/types";

export type UseFetchDogsMetaData = {
  setDogs: React.Dispatch<React.SetStateAction<Dog[] | null>>;
  size: number;
  dogsIdsArray: DogsSearch[] | undefined;
  getEndpointWithQuerys: (path: `/${string}`) => string;
  queriesChanged: RefObject<boolean>;
  hasNextPage: boolean;
};
