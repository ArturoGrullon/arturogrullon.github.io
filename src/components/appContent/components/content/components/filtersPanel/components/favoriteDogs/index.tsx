import { Button } from "pixel-retroui";
import useSWRMutation from "swr/mutation";
import { useContext } from "react";
import { usePopup } from "./hooks/usePopup";
import { FavoriteDogsModal } from "./components/favoriteDogsModal";
import { matchDogFetcher } from "./api/matchDogFetcher";
import { handleAdoptClick } from "./utils/handleAdoptClick";
import { handleClosePopup } from "./utils/handleClosePopup";
import { useMatchedDog } from "./hooks/useMatchedDog";
import { FavoriteDogsContext } from "../../../../context/favoriteDogsContext";

export const FavoriteDogs = () => {
  //Popup state
  const { isPopupOpen, closePopup, openPopup } = usePopup();

  //Matched dog state
  const { matchedDog, resetMatchedDog, updateMatchedDog } = useMatchedDog();

  //Context state
  const { favoriteDogs, handleResetFavoriteDogs } =
    useContext(FavoriteDogsContext);
  const numberOfFavoriteDogs = favoriteDogs.length;
  const hasFavoriteDogs = !!numberOfFavoriteDogs;
  const adoptedDog = favoriteDogs.find(({ id }) => id === matchedDog);

  //Matched dog mutation
  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_BASE_URL}/dogs/match`,
    matchDogFetcher
  );

  if (!hasFavoriteDogs) return null;

  return (
    <>
      <Button style={{ position: "sticky", top: 60 }} onClick={openPopup}>
        Favorite dogs ({numberOfFavoriteDogs})
      </Button>
      <FavoriteDogsModal
        {...{
          isPopupOpen,
          closePopup: () =>
            handleClosePopup({
              matchedDog,
              handleResetFavoriteDogs,
              resetMatchedDog,
              closePopup,
            }),
          adoptedDog,
          favoriteDogs,
          handleAdoptClick: () =>
            handleAdoptClick({
              favoriteDogs,
              trigger,
              updateMatchedDog,
            }),
          matchedDog,
          isMutating,
        }}
      />
    </>
  );
};
