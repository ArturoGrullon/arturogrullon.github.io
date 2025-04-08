import { motion } from "motion/react";
import { DogCard } from "../dogCard";
import { GenerateDogsProps } from "./types";

export const GenerateDogs = ({ dogs }: GenerateDogsProps) =>
  dogs.map(({ ...dogProps }) => (
    <motion.div key={dogProps.id} layout>
      <DogCard {...{ dog: dogProps }} />
    </motion.div>
  ));
