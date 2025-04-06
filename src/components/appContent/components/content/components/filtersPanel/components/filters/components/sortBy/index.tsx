import { Button } from "pixel-retroui";
import { SORT_OPTIONS } from "./constants";
import { useVisible } from "../../hooks/useVisible";
import { FiltersProps } from "../../types";

export const SortBy = ({ handleAddFilter, activeFilters }: FiltersProps) => {
  const { isVisible, handleToggleVisible, handleSetVisible, containerRef } =
    useVisible<HTMLDivElement>();

  const handleOnClick = (value: string) => {
    handleAddFilter("sort", value);
    handleSetVisible(false);
  };

  return (
    <div ref={containerRef} className="relative flex items-center flex-col">
      <Button
        className="w-full px-5! flex justify-between"
        onClick={handleToggleVisible}
      >
        Filter By
        {isVisible ? <span>▲</span> : <span>▼</span>}
      </Button>
      {isVisible ? (
        <ul className="absolute w-full top-15 rounded bg-white z-10 border-2! border-neutral-400!">
          {SORT_OPTIONS.map(({ label, value }) => {
            const isActive = value === activeFilters.sort;

            return (
              <li className="border-b-2! last:border-none" key={value}>
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
      ) : null}
    </div>
  );
};
