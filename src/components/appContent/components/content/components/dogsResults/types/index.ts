import { ContentProps } from "@/components/appContent/components/content/types";

export type DogsResultsProps = Omit<ContentProps, "handleAddFilter" | "name">;
