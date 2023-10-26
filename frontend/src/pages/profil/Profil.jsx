import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import styles from "./Profil.module.css";

function Profil() {
  return (
    <div>
      <NavBar />
      <Header />
      <h1 className={styles.titleH1}>Encore rien...</h1>
    </div>
  );
}

export default Profil;
