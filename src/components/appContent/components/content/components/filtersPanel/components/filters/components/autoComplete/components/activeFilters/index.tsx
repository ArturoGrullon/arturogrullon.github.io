import { ActiveFiltersKeys } from "../../../../../../hooks/useActiveFilters/types";
import { RenderFilter } from "../renderFilter";
import { RenderFiltersArray } from "../renderFiltersArray";
import { ActiveFiltersProps } from "./types";

export const ActiveFilters = ({
  activeFilters,
  handleRemoveFilter,
}: ActiveFiltersProps) => {
  const hasActiveFilters = !!Object.values(activeFilters).some(
    (value) => !!value.length
  );

  if (!hasActiveFilters) return null;

  return (
    <div className="flex text-left items-center gap-2 flex-wrap">
      {Object.entries(activeFilters).map(([key, value], index) => {
        if (!value || !value.length) return null;
        const label = key as ActiveFiltersKeys;

        if (Array.isArray(value)) {
          return (
            <RenderFiltersArray
              key={index}
              {...{
                items: value,
                handleRemoveFilter,
                label,
              }}
            />
          );
        }

        return (
          <RenderFilter
            key={index}
            {...{
              label,
              value,
              handleRemoveFilter,
            }}
          />
        );
      })}
    </div>
  );
};
