import { NoResultsProps } from "./types";

export function NoResults({ filteredOptionsCount }: NoResultsProps) {
  if (!filteredOptionsCount)
    return <p className="text-center">No options found</p>;

  return null;
}
