import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const data = useMemo(
    () => ({
      favorites,
      setFavorites,
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
