import { TriggerWithArgs } from "swr/mutation";
import { Dog } from "@/types";
import { MatchResponse } from "../../../api/matchDogFetcher/types";
import { UseMatchedDog } from "../../../hooks/useMatchedDog/types";

export type HandleAdoptClickProps = Pick<UseMatchedDog, "updateMatchedDog"> & {
  favoriteDogs: Dog[];
  trigger: TriggerWithArgs<
    MatchResponse,
    string,
    `${string}/dogs/match`,
    string[]
  >;
};
