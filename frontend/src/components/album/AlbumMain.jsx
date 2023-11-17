import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import style from "./AlbumMain.module.css";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function AlbumMain({ img, albumName, artist, releaseDate, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, setFavorites } = useFavorites();

  useEffect(() => {
    const isAlbumInFavorites = favorites.some((album) => album.id === id);
    setIsFavorite(isAlbumInFavorites);
  }, [favorites]);

  const albumInfo = { img, albumName, artist, releaseDate, id };

  const onClickAddToFavourites = () => {
    if (favorites.find((album) => album.id === id) === undefined) {
      setFavorites((oldState) => [...oldState, albumInfo]);
    } else {
      setFavorites((album) =>
        album.filter((albumFav) => {
          return albumFav.id !== id;
        })
      );
    }
  };
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img src={img} alt="Album Cover" />
        <svg
          onClick={() => {
            onClickAddToFavourites();
          }}
          className={isFavorite ? `${style.heartRed}` : `${style.heartWhite}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
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
  id: PropTypes.string.isRequired,
};
