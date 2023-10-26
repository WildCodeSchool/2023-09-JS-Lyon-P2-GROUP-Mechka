import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav className={styles.nav_header}>
        <img
          className={styles.logo}
          src="/src/assets/images/Logo-Mechka.svg"
          alt="Logo Mechka"
        />
        <img
          className={styles.icon_log_in}
          src="/src/assets/images/icon-log-in.png"
          alt="icon connexion"
        />
      </nav>
    </div>
  );
}
export default Header;
