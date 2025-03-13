import { Card } from "pixel-retroui";
import { AutoComplete } from "./components/autoComplete/";
import { useActiveFilters } from "./components/autoComplete/hooks/useActiveFilters";
import { Input } from "./components/input";
import { US_STATES } from "../../data/states";
import { FilterBy } from "../filterBy";

export const Filters = () => {
  const breeds = [
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
    <Card className="w-[20rem] flex flex-col gap-6 p-4 sticky top-29 m-[5rem]">
      <h1>Filters</h1>
      {/* <ActiveFilters
        {...{
          handleRemoveFilter,
          activeFilters,
        }}
      /> */}

      <FilterBy />
      <AutoComplete
        {...{
          label: "State",
          options: US_STATES,
          activeOptions: activeFilters.breeds,
          onBlur: (breeds: string[]) => handleAddFilter("breeds", breeds),
        }}
      />
      <Input placeholder="City" label={"City"} />
      <AutoComplete
        {...{
          label: "Breed",
          options: breeds,
          activeOptions: activeFilters.breeds,
          onBlur: (breeds: string[]) => handleAddFilter("breeds", breeds),
        }}
      />
      <Input
        placeholder="Press enter to add"
        label={"Zip Code"}
        type="number"
      />
      <section className="flex gap-8">
        <Input
          className="w-28"
          label="Min Age"
          type="number"
          onChange={(minAge) => handleAddFilter("minAge", minAge)}
          placeholder="Min"
        />
        <Input
          className="w-28"
          label="Max Age"
          placeholder="Max"
          type="number"
          onChange={(maxAge) => handleAddFilter("maxAge", maxAge)}
        />
      </section>
    </Card>
  );
};
