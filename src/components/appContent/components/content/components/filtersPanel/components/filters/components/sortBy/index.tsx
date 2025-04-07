import { Button } from "pixel-retroui";
import { useVisible } from "../../hooks/useVisible";
import { FiltersProps } from "../../types";
import { getColor } from "@/utils/getColor";
import { SortByOptions } from "./sortByOptions";

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
        bg={getColor("primary")}
        textColor={getColor("background")}
        className="w-full px-5! flex justify-between"
        onClick={handleToggleVisible}
      >
        Sort By
        {isVisible ? <span>▲</span> : <span>▼</span>}
      </Button>
      <SortByOptions
        {...{ isVisible, activeFilters, onClick: handleOnClick }}
      />
    </div>
  );
};
