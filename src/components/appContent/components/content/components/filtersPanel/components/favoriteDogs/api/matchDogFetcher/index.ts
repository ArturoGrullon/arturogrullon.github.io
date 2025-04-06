import axios from "axios";
import { Args, MatchResponse } from "./types";

export const matchDogFetcher = async (
  url: string,
  { arg }: Args
): Promise<MatchResponse> => {
  const { data } = await axios.post<MatchResponse>(url, arg, {
    withCredentials: true,
  });
  return data;
};
