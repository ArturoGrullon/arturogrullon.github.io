import { ContentProps } from "@/components/appContent/components/content/types";
import { UseDogs } from "@/components/appContent/hooks/useDogs/types";

export type FiltersPanelProps = Pick<
  ContentProps,
  "activeFilters" | "handleAddFilter"
> &
  Pick<UseDogs, "total" | "isLoading"> & {
    dogCount: number;
  };
