import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import styles from "./Favorite.module.css";

function Favorite() {
  return (
    <div>
      <NavBar />
      <Header />
      <h1 className={styles.titleH1}>Toujours rien...</h1>
    </div>
  );
}

export default Favorite;
