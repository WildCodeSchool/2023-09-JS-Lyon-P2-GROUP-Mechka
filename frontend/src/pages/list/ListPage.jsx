import { useTheme } from "../../contexts/ThemeContext";
import List from "../../components/list/List";
import styles from "./ListPage.module.css";

export default function ListPage() {
  const { isLight } = useTheme();
  return (
    <div className={isLight ? `${styles.lightMode}` : `${styles.darkMode}`}>
      <List />
    </div>
  );
}
