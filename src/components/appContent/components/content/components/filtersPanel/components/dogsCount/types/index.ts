import { UseDogs } from "@/components/appContent/hooks/useDogs/types";

export type DogsCountProps = Pick<UseDogs, "isLoading" | "total"> & {
  dogCount: number;
};
