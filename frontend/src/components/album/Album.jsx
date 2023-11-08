import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import style from "./Album.module.css";
import AlbumMain from "./AlbumMain";
import AlbumTrack from "./AlbumTrack";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";

export default function Album() {
  const token = useAuth();
  const idAlbum = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    const urlAlbumById = `https://api.spotify.com/v1/albums/${idAlbum.id}`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlAlbumById, params)
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data);
      });
  }, [token]);

  return (
    <>
      {!album && <p className={style.paraphLoading}>Loading...</p>}

      <NavBar />
      <Header />
      <div className={style.containerAlbum}>
        {album && (
          <div className={style.container}>
            <AlbumMain
              img={album.images[0].url}
              albumName={album.name}
              artist={album.artists[0].name}
              releaseDate={album.release_date}
            />

            <h3 className={style.title}>Songs in Album</h3>

            <ol className={style.list}>
              {album.tracks.items.map((track, index) => {
                return (
                  <AlbumTrack
                    key={track.id}
                    nameTrack={track.name}
                    duration={track.duration_ms}
                    artist={track.artists[0].name}
                    index={index + 1}
                  />
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </>
  );
}
