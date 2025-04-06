import { Dog } from "@/types";

export type AdoptedDogProps = {
  adoptedDog: Dog | undefined;
  closePopup: () => void;
};
