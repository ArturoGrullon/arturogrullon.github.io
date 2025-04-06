import { motion } from "motion/react";
import { DogCard } from "../dogCard";
import { Dog } from "@/types";

export const GenerateDogs = ({ dogs }: { dogs: Dog[] }) =>
  dogs.map(({ ...dogProps }) => (
    <motion.div key={dogProps.id} layout>
      <DogCard {...{ dog: dogProps }} />
    </motion.div>
  ));
