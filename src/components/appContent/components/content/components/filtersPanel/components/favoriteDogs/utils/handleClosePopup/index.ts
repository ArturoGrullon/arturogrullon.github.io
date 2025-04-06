import toast from "react-hot-toast";
import { HandleClosePopupProps } from "./types";

export const handleClosePopup = ({
  matchedDog,
  handleResetFavoriteDogs,
  closePopup,
  resetMatchedDog,
}: HandleClosePopupProps) => {
  if (matchedDog) {
    handleResetFavoriteDogs();
    resetMatchedDog();
    toast.success("Dog has been adopted!");
  }
  closePopup();
};
