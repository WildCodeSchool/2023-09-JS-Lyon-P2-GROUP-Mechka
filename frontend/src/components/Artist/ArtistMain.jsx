import PropTypes from "prop-types";
import styles from "./ArtistMain.module.css";

export default function ArtistMain({ img, name, genre }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.containerImg} src={img} alt="Artist" />
      </div>
      <div className={styles.infoArtist}>
        <h2 className={styles.titles}>Artist name</h2>
        <p className={styles.name}>{name}</p>
        <h2 className={styles.titles}>Genre</h2>
        <div className={styles.infos}>
          {genre.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

ArtistMain.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
