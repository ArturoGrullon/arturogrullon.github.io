import { Card } from "pixel-retroui";
import { AutoComplete } from "./components/autoComplete/";
import { AgeRangeInput } from "./components/ageRangeInput";
import { useActiveFilters } from "./components/autoComplete/hooks/useActiveFilters";
import { ActiveFilters } from "./components/autoComplete/components/activeFilters";

export const Filters = () => {
  const zipCodes = [423142, 12434231, 412, 4124, 532];
  const options = [
    "Labrador",
    "Golden Retriever",
    "German Shepherd",
    "Beagle",
    "Poodle",
    "Pug",
  ];

  const { activeFilters, handleAddFilter, handleRemoveFilter } =
    useActiveFilters();

  return (
    <Card className="absolute top-0 left-[-21.5rem] w-[20rem] flex flex-col gap-6 p-4">
      <h1>Filters</h1>
      <ActiveFilters
        {...{
          handleRemoveFilter,
          activeFilters,
        }}
      />
      <AutoComplete
        {...{
          label: "Breed",
          options,
          activeOptions: activeFilters.breeds,
          onBlur: (breeds: string[]) => handleAddFilter("breeds", breeds),
        }}
      />
      <AutoComplete
        {...{
          label: "Zip Code",
          options: zipCodes,
          activeOptions: activeFilters.zipCodes,
          onBlur: (zipCodes: number[]) => handleAddFilter("zipCodes", zipCodes),
        }}
      />
      <section className="flex gap-8">
        <AgeRangeInput
          label="Min Age"
          onChange={(minAge) => handleAddFilter("minAge", minAge)}
          placeholder="Min"
        />
        <AgeRangeInput
          label="Max Age"
          placeholder="Max"
          onChange={(maxAge) => handleAddFilter("maxAge", maxAge)}
        />
      </section>
    </Card>
  );
};
