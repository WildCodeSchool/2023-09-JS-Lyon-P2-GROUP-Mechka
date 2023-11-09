import React from "react";
import styles from "./ButtonRandom.module.css";

export default function ButtonRandom() {
  return (
    <div className={styles.buttonPosition}>
      <button type="button" id={styles["button-random"]}>
        Surprise me
      </button>
    </div>
  );
}
