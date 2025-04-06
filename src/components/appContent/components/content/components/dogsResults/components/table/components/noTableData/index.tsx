import { getColor } from "@/utils/getColor";
import { Card } from "pixel-retroui";

export const NoTableData = () => (
  <Card
    bg={getColor("surface")}
    borderColor={getColor("primary")}
    className="h-20 items-center flex justify-center"
  >
    No dogs found
  </Card>
);
