import PropTypes from "prop-types";
import styles from "./ArtistMain.module.css";

export default function ArtistMain({ img, name }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.containerImg} src={img} alt="Artist" />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

ArtistMain.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
