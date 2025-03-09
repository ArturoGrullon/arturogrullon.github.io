import { Dog } from "../../../../mocks/dogs";

export const DogMetadata = ({
  name,
  breed,
  age,
  zip_code,
}: Omit<Dog, "id">) => (
  <section className="text-left">
    <p>Name: {name}</p>
    <p>Breed: {breed}</p>
    <p>Age: {age}</p>
    <p>Zip Code:{zip_code}</p>
  </section>
);
