import { Card, Button } from "pixel-retroui";
import { Dog } from "../../../../mocks/dogs";
import { DogMetadata } from "../dogMetadata";

export const DogCard = ({ img, name, ...dogMetaData }: Omit<Dog, "id">) => (
  <Card
    bg="white"
    style={{
      padding: `.5rem`,
    }}
    className=" flex p-5 gap-5 justify-between items-center"
  >
    <section className="flex gap-4 items-center">
      <img src={img} alt={name} className="w-25 rounded-full" />
      <DogMetadata {...{ ...dogMetaData, name, img }} />
    </section>
    <Button className="w-28 h-fit">Adopt</Button>
  </Card>
);
