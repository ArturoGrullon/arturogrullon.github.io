import { LoadingContent } from "@/components/appContent/components/loadingContent";
import { ModalContentProps } from "./types";
import { AdoptedDog } from "../../../adoptedDog";
import { FavoriteDogsList } from "../../../favoriteDogsList";

export const ModalContent = ({
  adoptedDog,
  closePopup,
  favoriteDogs,
  handleAdoptClick,
  matchedDog,
  isMutating,
}: ModalContentProps) => {
  if (matchedDog) return <AdoptedDog {...{ adoptedDog, closePopup }} />;
  if (isMutating) return <LoadingContent />;

  return <FavoriteDogsList {...{ favoriteDogs, handleAdoptClick }} />;
};
