import { Card } from "pixel-retroui";
import { TableProps } from "./types";
import { getColor } from "@/utils/getColor";
import { TableContent } from "./components/tableContent";

export const Table = ({ ...tableContentProps }: TableProps) => (
  <Card
    style={{ padding: "2rem" }}
    className="flex flex-col gap-4 h-full w-full h-max-screen"
    bg={getColor("primary")}
    borderColor={getColor("secondary")}
  >
    <TableContent {...tableContentProps} />
  </Card>
);
