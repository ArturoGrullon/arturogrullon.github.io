import { Card } from "pixel-retroui";
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

  return (
    <Card className="absolute top-0 left-[-21.5rem] w-[20rem] flex flex-col gap-6 p-4">
      <h1>Filters</h1>
      <AutoComplete {...{ label: "Breed", options }} />
      <section className="flex gap-8">
        <AgeRangeInput label="Max Age" />
        <AgeRangeInput label="Min Age" />
      </section>
    </Card>
  );
};
