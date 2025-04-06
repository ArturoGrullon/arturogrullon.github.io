import axios, { AxiosRequestConfig } from "axios";
import useSWR, { SWRConfiguration } from "swr";

export const useFetch = <TRespose = string[], TData = string[]>(
  resourcePath: `/${string}` | null,
  config: Omit<AxiosRequestConfig<TData>, "url"> & SWRConfiguration = {
    method: "get",
  }
) => {
  const {
    data: response,
    mutate,
    isLoading,
  } = useSWR(
   !resourcePath ? null : import.meta.env.VITE_BASE_URL + resourcePath,
    (url: string) =>
      axios.request<TRespose>({ url, withCredentials: true, ...config }),
    config
  );

  return {
    data: response?.data,
    mutate,
    isLoading,
  };
};
