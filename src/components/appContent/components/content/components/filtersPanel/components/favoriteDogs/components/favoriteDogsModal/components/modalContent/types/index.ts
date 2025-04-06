import { Dog } from "@/types";

export type ModalContentProps = {
  adoptedDog: Dog | undefined;
  closePopup: () => void;
  favoriteDogs: Dog[];
  handleAdoptClick: () => void;
  matchedDog: string | null;
  isMutating: boolean;
};
