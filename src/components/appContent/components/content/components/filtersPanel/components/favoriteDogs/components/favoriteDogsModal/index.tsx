import { Popup } from "pixel-retroui";
import { ModalContent } from "./components/modalContent";
import { FavoriteDogsModalProps } from "./types";

export const FavoriteDogsModal = ({
  isPopupOpen,
  closePopup,
  ...modalContentProps
}: FavoriteDogsModalProps) => (
  <Popup
    isOpen={isPopupOpen}
    onClose={closePopup}
    bg="#fefcd0"
    baseBg="#c381b5"
    textColor="black"
    borderColor="black"
    className="p-5 w-full"
  >
    <ModalContent {...{ ...modalContentProps, closePopup }} />
  </Popup>
);
