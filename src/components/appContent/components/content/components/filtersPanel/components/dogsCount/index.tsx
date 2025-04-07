import { DogsCountProps } from "./types";

export const DogsCount = ({ dogCount, total }: DogsCountProps) => (
  <h4 className="text-black b !text-2xl text-left">
    {dogCount} of {total}
  </h4>
);
