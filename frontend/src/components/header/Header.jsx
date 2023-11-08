import { Link } from "react-router-dom";
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav className={styles.nav_header}>
        <Link to="/">
          <img
            className={styles.logo}
            src="/src/assets/images/Logo-Mechka.svg"
            alt="Logo Mechka"
          />
        </Link>
        <h1 className={styles.titleH1}>Mечка</h1>
        <Link to="/profil">
          <img
            className={styles.icon_log_in}
            src="/src/assets/images/icon-log-in.png"
            alt="icon connexion"
          />
        </Link>
      </nav>
    </div>
  );
}
export default Header;
