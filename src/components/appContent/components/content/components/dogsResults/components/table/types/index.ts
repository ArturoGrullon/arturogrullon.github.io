import { UseDogs } from "@/components/appContent/hooks/useDogs/types";
import { Dog } from "@/types";

export type TableProps = Pick<UseDogs, "isLoading"> & {
  dogs: Dog[];
};
