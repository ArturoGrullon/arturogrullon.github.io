import { Card } from "pixel-retroui";
import { useState } from "react";
import { AutoComplete } from "./components/autoComplete/";
import { AgeRangeInput } from "./components/ageRangeInput";

export const Filters = () => {
  const options = [
    "Labrador",
    "Golden Retriever",
    "German Shepherd",
    "Beagle",
    "Poodle",
    "Pug",
  ];

  const zipCodes = [423142, 12434231, 412, 4124, 532];

  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const handleAddFilter = <T,>(key: string, value: T) => {
    setActiveFilters({ ...activeFilters, [key]: value });
  };

  return (
    <Card className="absolute top-0 left-[-21.5rem] w-[20rem] flex flex-col gap-6 p-4">
      <h1>Filters</h1>
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
        />
        <AgeRangeInput
          label="Max Age"
          onChange={(maxAge) => handleAddFilter("maxAge", maxAge)}
        />
      </section>
    </Card>
  );
};
