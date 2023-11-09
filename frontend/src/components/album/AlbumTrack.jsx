import PropTypes from "prop-types";
import styles from "./AlbumTrack.module.css";

const replaceString = (str) => {
  return str.replace(".", ":");
};

export default function AlbumTrack({ nameTrack, duration, artist, index }) {
  return (
    <div className={styles.container}>
      <li>
        <p className={styles.name}>
          {index}. {nameTrack}
        </p>
        <div className={styles.info}>
          <p className={styles.infos}>
            {replaceString((duration / 60000).toFixed(2))}
          </p>
          <p className={styles.infos}>{artist}</p>
        </div>
      </li>
    </div>
  );
}

AlbumTrack.propTypes = {
  nameTrack: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
