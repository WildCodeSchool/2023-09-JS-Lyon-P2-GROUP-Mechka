import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import styles from "./List.module.css";

function List() {
  return (
    <div>
      <NavBar />
      <Header />
      <h1 className={styles.titleH1}>Rien...</h1>
    </div>
  );
}

export default List;
