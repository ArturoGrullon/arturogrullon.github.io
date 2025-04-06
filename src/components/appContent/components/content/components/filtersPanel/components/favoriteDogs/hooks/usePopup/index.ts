import { useState } from "react";
import { UsePopup } from "./types";

export const usePopup = (): UsePopup => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return {
    isPopupOpen,
    closePopup: () => setIsPopupOpen(false),
    openPopup: () => setIsPopupOpen(true),
  };
};
