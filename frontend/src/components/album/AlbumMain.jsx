import PropTypes from "prop-types";
import style from "./AlbumMain.module.css";

export default function AlbumMain({ img, albumName, artist, releaseDate }) {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img src={img} alt="Album Cover" />
      </div>
      <div className={style.infoAlbum}>
        <p className={style.albumName}>{albumName}</p>
        <p className={style.artistName}>{artist}</p>
        <p className={style.date}>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
}

AlbumMain.propTypes = {
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
