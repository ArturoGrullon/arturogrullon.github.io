import { Card } from "pixel-retroui";
import { RenderFilter } from "../renderFilter";
import { RenderFiltersArray } from "../renderFiltersArray";
import { ActiveFiltersProps } from "./types";

export const ActiveFilters = <T,>({
  activeFilters,
  handleRemoveFilter,
}: ActiveFiltersProps<T>) => {
  const hasActiveFilters = !!Object.values(activeFilters).some(
    (value) => !!value.length
  );

  if (!hasActiveFilters) return null;

  return (
    <Card className="flex text-left flex-col gap-2">
      {Object.entries(activeFilters).map(([key, value]) => {
        if (!value || !value.length) return null;

        if (Array.isArray(value)) {
          return (
            <RenderFiltersArray
              {...{
                key: value,
                value,
                handleRemoveFilter,
                label: key,
              }}
            />
          );
        }

        return (
          <RenderFilter
            {...{
              key: value,
              label: key,
              value,
            }}
          />
        );
      })}
    </Card>
  );
};
