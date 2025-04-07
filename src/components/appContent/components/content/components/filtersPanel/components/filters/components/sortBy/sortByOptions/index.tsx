import { Card } from "pixel-retroui";
import { SORT_OPTIONS } from "../constants";
import { SortByOptionsProps } from "./types";

export const SortByOptions = ({
  isVisible,
  activeFilters,
  onClick: handleOnClick,
}: SortByOptionsProps) => {
  if (!isVisible) return null;

  return (
    <Card className="absolute z-10 top-15 w-full">
      <ul>
        {SORT_OPTIONS.map(({ label, value }) => {
          const isActive = value === activeFilters.sort;

          return (
            <li
              className="border-b-2! border-gray-500! last:border-none"
              key={value}
            >
              <button
                onClick={() => handleOnClick(value)}
                className={`w-full p-2 hover:font-bold! text-left ${
                  isActive ? "!font-bold" : ""
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
