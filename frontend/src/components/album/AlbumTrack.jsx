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
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
          </svg>
          <p>{replaceString((duration / 60000).toFixed(2))}</p>
          <p>{artist}</p>
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
