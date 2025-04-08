import { useEffect, useState } from "react";
import { UsePopup, UsePopupProps } from "./types";

export const usePopup = ({ numberOfFavoriteDogs }: UsePopupProps): UsePopup => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (numberOfFavoriteDogs < 1) setIsPopupOpen(false);
  }, [numberOfFavoriteDogs]);

  return {
    isPopupOpen,
    closePopup: () => setIsPopupOpen(false),
    openPopup: () => setIsPopupOpen(true),
  };
};
