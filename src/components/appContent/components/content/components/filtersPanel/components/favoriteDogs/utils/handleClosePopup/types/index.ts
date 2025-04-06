import { UsePopup } from "../../../hooks/usePopup/types";

export type HandleClosePopupProps = Pick<UsePopup, "closePopup"> & {
  matchedDog: string | null;
  handleResetFavoriteDogs: () => void;
  resetMatchedDog: () => void;
};
