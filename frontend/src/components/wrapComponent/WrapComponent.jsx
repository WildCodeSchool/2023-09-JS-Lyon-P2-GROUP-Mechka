import PropTypes from "prop-types";
import styles from "./WrapComponent.module.css";
import { useTheme } from "../../contexts/ThemeContext";

export default function WrapComponent({ children }) {
  const { isLight } = useTheme();

  return (
    <div className={!isLight ? `${styles.darkMode}` : `${styles.lightMode}`}>
      {children}
    </div>
  );
}

WrapComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
