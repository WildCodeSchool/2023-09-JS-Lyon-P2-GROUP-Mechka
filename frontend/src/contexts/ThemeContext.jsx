import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(false);

  const data = useMemo(
    () => ({
      isLight,
      setIsLight,
    }),
    [isLight]
  );
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
