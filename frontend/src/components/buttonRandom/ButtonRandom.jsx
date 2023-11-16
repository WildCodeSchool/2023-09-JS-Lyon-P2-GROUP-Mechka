import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./ButtonRandom.module.css";

export default function ButtonRandom({ id }) {
  const { isLight } = useTheme();
  return (
    <div className={styles.buttonPosition}>
      <Link to={`/albums/${id}`}>
        <button
          type="button"
          id={styles["button-random"]}
          className={isLight ? `${styles.lightMode}` : `${styles.darkMode}`}
        >
          SURPRISE ME
        </button>
      </Link>
    </div>
  );
}

ButtonRandom.propTypes = {
  id: PropTypes.string.isRequired,
};
