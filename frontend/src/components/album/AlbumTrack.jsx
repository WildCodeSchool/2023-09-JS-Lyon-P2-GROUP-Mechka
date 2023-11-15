import PropTypes from "prop-types";
import styles from "./AlbumTrack.module.css";

const replaceString = (str) => {
  return str.replace(".", ":");
};

export default function AlbumTrack({ nameTrack, duration, index }) {
  return (
    <div className={styles.container}>
      <li className={styles.songsList}>
        <p className={styles.name}>
          {index}. {nameTrack}
        </p>
        <div className={styles.info}>
          <p className={styles.infos}>
            {replaceString((duration / 60000).toFixed(2))}{" "}
            {/* Je reçois les données en millisecondes et je les transforme en minutes en divisant par 6000 */}
          </p>
        </div>
      </li>
    </div>
  );
}

AlbumTrack.propTypes = {
  nameTrack: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
