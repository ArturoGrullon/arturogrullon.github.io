import { Card } from "pixel-retroui";
import { AnimatePresence } from "motion/react";
import { TableProps } from "./types";
import { NoTableData } from "./components/noTableData";
import { GenerateDogs } from "./components/generateDogs";

export const Table = ({ dogs }: TableProps) => {
  const hasData = dogs.length;

  return (
    <Card
      style={{ padding: "2rem" }}
      className="flex flex-col gap-4 h-full w-full h-max-screen"
      bg="gray"
    >
      {!hasData && <NoTableData />}
      <AnimatePresence>
        <GenerateDogs {...{ dogs }} />
      </AnimatePresence>
    </Card>
  );
};
