import { Card } from "pixel-retroui";
import { DogsCountProps } from "./types";
import { getColor } from "@/utils/getColor";
import { useTotal } from "./hooks/useTotal";

export const DogsCount = ({
  dogCount,
  total: totalDogs,
  isLoading,
}: DogsCountProps) => {
  const total = useTotal(totalDogs);

  if (isLoading) return null;

  return (
    <Card
      bg={getColor("surface")}
      className="text-black b !text-xl text-left w-fit"
    >
      {dogCount} of {total} dogs
    </Card>
  );
};
