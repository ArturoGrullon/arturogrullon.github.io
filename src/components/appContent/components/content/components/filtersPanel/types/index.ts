import { ContentProps } from "@/components/appContent/components/content/types";

export type FiltersPanelProps = Pick<
  ContentProps,
  "activeFilters" | "handleAddFilter"
>;
