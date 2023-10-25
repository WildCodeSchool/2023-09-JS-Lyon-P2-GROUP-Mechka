import styles from "./NavBar.module.css";
import whiteHome from "../../assets/images/whiteHome.png";
import whiteSearch from "../../assets/images/whiteSearch.png";
import whiteFav from "../../assets/images/whiteFav.png";
import whiteMoon from "../../assets/images/whiteMoon.png";

function navBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.home}>
        <img src={whiteHome} alt="white hearth" />
        <p>Home</p>
      </div>

      <div className={styles.search}>
        <img src={whiteSearch} alt="White Search" />
        <p>Search</p>
      </div>

      <div className={styles.favoris}>
        <img src={whiteFav} alt="White Favoris" />
        <p>Favoris</p>
      </div>

      <div className={styles.switch}>
        <img src={whiteMoon} alt="" />
        <p>Switch</p>
      </div>
    </div>
  );
}

export default navBar;
