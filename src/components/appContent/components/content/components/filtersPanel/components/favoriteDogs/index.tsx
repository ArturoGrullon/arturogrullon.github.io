import useSWRMutation from "swr/mutation";
import { motion } from "motion/react";
import { useContext } from "react";
import { usePopup } from "./hooks/usePopup";
import { FavoriteDogsModal } from "./components/favoriteDogsModal";
import { matchDogFetcher } from "./api/matchDogFetcher";
import { handleAdoptClick } from "./utils/handleAdoptClick";
import { handleClosePopup } from "./utils/handleClosePopup";
import { useMatchedDog } from "./hooks/useMatchedDog";
import { getColor } from "@/utils/getColor";
import { PixelButton } from "@/components/components/pixelButton";
import { FavoriteDogsContext } from "@/components/appContent/components/content/context/favoriteDogsContext";

export const FavoriteDogs = () => {
  //Matched dog state
  const { matchedDog, resetMatchedDog, updateMatchedDog } = useMatchedDog();

  //Context state
  const { favoriteDogs, handleResetFavoriteDogs } =
    useContext(FavoriteDogsContext);
  const numberOfFavoriteDogs = favoriteDogs.length;
  const hasFavoriteDogs = !!numberOfFavoriteDogs;
  const adoptedDog = favoriteDogs.find(({ id }) => id === matchedDog);

  //Popup state
  const { isPopupOpen, closePopup, openPopup } = usePopup({
    numberOfFavoriteDogs,
  });

  //Matched dog mutation
  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_BASE_URL}/dogs/match`,
    matchDogFetcher
  );

  if (!hasFavoriteDogs) return null;

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <PixelButton
          className="w-[20rem] "
          bg={getColor("primary")}
          textColor={getColor("background")}
          style={{ position: "sticky", top: 60, color: "white" }}
          onClick={openPopup}
        >
          Favorite dogs ({numberOfFavoriteDogs})
        </PixelButton>
      </motion.div>
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
