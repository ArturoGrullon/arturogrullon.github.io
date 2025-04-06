import { Popup } from "pixel-retroui";
import { ModalContent } from "./components/modalContent";
import { FavoriteDogsModalProps } from "./types";
import { getColor } from "@/utils/getColor";

export const FavoriteDogsModal = ({
  isPopupOpen,
  closePopup,
  ...modalContentProps
}: FavoriteDogsModalProps) => (
  <Popup
    isOpen={isPopupOpen}
    onClose={closePopup}
    bg={getColor("background")}
    baseBg={getColor("surface")}
    textColor="black"
    borderColor="black"
    className="p-5 w-full"
  >
    <ModalContent {...{ ...modalContentProps, closePopup }} />
  </Popup>
);
