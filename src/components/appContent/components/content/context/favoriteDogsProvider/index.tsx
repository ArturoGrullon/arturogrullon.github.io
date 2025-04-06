import { User } from "@/components/loginWrapper/types";
import { FavoriteDogsContext } from "../favoriteDogsContext";
import { useFavoriteDogs } from "./hooks/useFavoriteDogs";

type FavoriteDogsProviderProps = {
  children: React.ReactNode;
  userName: User["name"];
};

export const FavoriteDogsProvider = ({
  children,
  userName,
}: FavoriteDogsProviderProps) => {
  const { ...favoriteDogs } = useFavoriteDogs();

  return (
    <FavoriteDogsContext.Provider value={{ ...favoriteDogs, userName }}>
      {children}
    </FavoriteDogsContext.Provider>
  );
};
