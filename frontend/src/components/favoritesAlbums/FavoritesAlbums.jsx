import { useFavorites } from "../../contexts/FavoritesContext";
import FavoriteCart from "./FavoriteCart";
import "./test.css";

export default function FavoritesAlbums() {
  const { favorites } = useFavorites();

  return (
    <>
      <div>
        {favorites.length === 0 && (
          <p className="test">You don't have any favorites for now!</p>
        )}
      </div>

      <div>
        {favorites.length > 0 &&
          favorites.map((album) => {
            return (
              <FavoriteCart
                key={album.id}
                img={album.img}
                title={album.albumName}
                artistName={album.artist}
                alt={album.albumName}
                id={album.id}
              />
            );
          })}
      </div>
    </>
  );
}
