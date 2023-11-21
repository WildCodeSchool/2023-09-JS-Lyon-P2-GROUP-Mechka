import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import styles from "./ProfilComponent.module.css";
import { useTheme } from "../../contexts/ThemeContext";

function Profil() {
  const { isLight } = useTheme();
  return (
    <div className={isLight ? `${styles.lightMode}` : `${styles.darkMode}`}>
      <NavBar />
      <Header />
      <div className={styles.outline}>
        <div className={styles.container}>
          <form className={styles.formProfil}>
            <label>
              <p>Email :</p>
              <input type="text" name="text" />
            </label>
            <br />
            <label>
              <p>Password :</p>
              <input type="password" name="password" />
            </label>
            <br />
            <button className={styles.button} type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profil;
