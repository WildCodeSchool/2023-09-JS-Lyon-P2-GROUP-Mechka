import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import styles from "./Profil.module.css";
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
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              <p>Password :</p>
              <input type="text" name="password" />
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
