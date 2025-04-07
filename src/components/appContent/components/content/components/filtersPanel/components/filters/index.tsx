import { Card } from "pixel-retroui";
import { AutoComplete } from "./components/autoComplete";
import { Input } from "./components/input";
import { FiltersProps } from "./types";
import { SortBy } from "./components/sortBy";
import { useFetch } from "./hooks/useFetch";
import { getColor } from "@/utils/getColor";

export const Filters = ({ handleAddFilter, activeFilters }: FiltersProps) => {
  const { data: breeds = [] } = useFetch("/dogs/breeds");

  return (
    <Card
      bg={getColor("surface")}
      borderColor={getColor("primary")}
      className="flex flex-col gap-6 p-4 m-[5rem]"
    >
      <h1>Filters</h1>
      <SortBy {...{ handleAddFilter, activeFilters }} />
      <AutoComplete
        {...{
          label: "Breed",
          options: breeds,
          activeOptions: activeFilters.breeds,
          onBlur: (breeds: string[]) => handleAddFilter("breeds", breeds),
        }}
      />
      <Input
        bg={getColor("secondary")}
        textColor={getColor("primary")}
        placeholder="Press enter to add"
        label={"Zip Code"}
        type="number"
        onPressEnter={(zipCode) => handleAddFilter("zipCodes", zipCode)}
      />
      <section className="flex gap-8">
        <Input
          bg={getColor("secondary")}
          textColor={getColor("primary")}
          className="w-28"
          label="Min Age"
          value={activeFilters.ageMin}
          type="number"
          onChange={(ageMin) => handleAddFilter("ageMin", ageMin)}
          placeholder="Min"
        />
        <Input
          bg={getColor("secondary")}
          textColor={getColor("primary")}
          className="w-28"
          label="Max Age"
          value={activeFilters.ageMax}
          placeholder="Max"
          type="number"
          onChange={(ageMax) => handleAddFilter("ageMax", ageMax)}
        />
      </section>
    </Card>
  );
};
