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
    if (token === null) {
      return;
    }

    const urlAlbumById = `https://api.spotify.com/v1/albums/${idAlbum.id}`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlAlbumById, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setAlbum(data);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, [token]);

  return (
    <>
      {album === null && <p className={style.paraphLoading}>Loading...</p>}

      <NavBar />
      <Header />
      <div className={style.containerAlbum}>
        {album !== null && (
          <div className={style.container}>
            <AlbumMain
              img={album.images[0].url}
              albumName={album.name}
              artist={album.artists[0].name}
              releaseDate={album.release_date}
              id={album.id}
            />

            <h3 className={style.title}>Songs in Album</h3>

            <ol className={style.list}>
              {album.tracks.items.map((track, index) => {
                return (
                  <AlbumTrack
                    key={track.id}
                    nameTrack={track.name}
                    duration={track.duration_ms}
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
