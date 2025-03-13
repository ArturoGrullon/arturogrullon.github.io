import { Card } from "pixel-retroui";
import { AnimatePresence, motion } from "motion/react";
import { DogTableProps } from "./types";
import { DogCard } from "./components/dogCard";

export const Table = ({ dogs }: DogTableProps) => (
  <Card
    style={{ padding: "2rem" }}
    className="flex flex-col gap-4 w-3xl"
    bg="gray"
  >
    <AnimatePresence>
      {dogs.map(({ img, id, name, age, zip_code, breed }) => (
        <motion.div key={id} layout>
          <DogCard
            key={id}
            img={img}
            name={name}
            age={age}
            zip_code={zip_code}
            breed={breed}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  </Card>
);
