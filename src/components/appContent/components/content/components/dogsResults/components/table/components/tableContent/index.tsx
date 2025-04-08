import { AnimatePresence } from "motion/react";
import { LoadingContent } from "@/components/appContent/components/loadingContent";
import { NoTableData } from "../noTableData";
import { GenerateDogs } from "../generateDogs";
import { TableContentProps } from "./types";

export const TableContent = ({ dogs, isLoading }: TableContentProps) => {
  const hasData = !!dogs.length;

  if (isLoading) return <LoadingContent />;
  if (!hasData) return <NoTableData />;

  return (
    <AnimatePresence>
      <GenerateDogs {...{ dogs }} />
    </AnimatePresence>
  );
};
