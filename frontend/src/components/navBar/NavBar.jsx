import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import whiteHome from "../../assets/images/whiteHome.png";
import whiteSearch from "../../assets/images/whiteSearch.png";
import whiteFav from "../../assets/images/whiteFav.png";
import whiteMoon from "../../assets/images/whiteMoon.png";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.home}>
        <Link to="/">
          <img src={whiteHome} alt="white hearth" />
        </Link>
        <p>Home</p>
      </div>

      <div className={styles.search}>
        <Link to="/list">
          <img src={whiteSearch} alt="White Search" />
        </Link>
        <p>Search</p>
      </div>

      <div className={styles.favoris}>
        <Link to="/favorite">
          <img src={whiteFav} alt="White Favoris" />
        </Link>
        <p>Favoris</p>
      </div>

      <div className={styles.switch}>
        <img src={whiteMoon} alt="" />
        <p>Switch</p>
      </div>
    </div>
  );
}

export default NavBar;
