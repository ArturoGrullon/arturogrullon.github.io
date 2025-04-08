import { UseDogs } from "@/components/appContent/hooks/useDogs/types";
import { Dog } from "@/types";

export type TableContentProps = Pick<UseDogs, "isLoading"> & {
  dogs: Dog[];
};
