import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const data = useMemo(
    () => ({
      favourites,
      setFavourites,
    }),
    [favourites]
  );

  return (
    <FavouritesContext.Provider value={data}>
      {children}
    </FavouritesContext.Provider>
  );
}

FavouritesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
