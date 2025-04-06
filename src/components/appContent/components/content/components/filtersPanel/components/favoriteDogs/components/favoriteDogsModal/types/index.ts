import { Dog } from "@/types";
import { UsePopup } from "../../../hooks/usePopup/types";

export type FavoriteDogsModalProps = Omit<UsePopup, "openPopup"> & {
  adoptedDog: Dog | undefined;
  favoriteDogs: Dog[];
  handleAdoptClick: () => Promise<void>;
  matchedDog: string | null;
  isMutating: boolean;
};
