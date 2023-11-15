import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import ArtistMain from "./ArtistMain";
import CarrouselCart from "../carrouselMain/CarrouselCart";
import styles from "./Artist.module.css";

export default function Artist() {
  const token = useAuth();
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  // const [track, setTrack] = useState(null);
  const idArtist = useParams();

  useEffect(() => {
    if (token === null) return;

    const urlArtist = `https://api.spotify.com/v1/artists/${idArtist.id}`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlArtist, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setArtist(data);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });

    const urlAlbum = `https://api.spotify.com/v1/artists/${idArtist.id}/albums`;

    fetch(urlAlbum, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setAlbum(data.items);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });

    // const urlTrack = `https://api.spotify.com/v1/artists/${idArtist.id}/top-tracks`;

    // fetch(urlTrack, params)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network Error");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setTrack(data);
    //   })
    //   .catch((error) => {
    //     console.error("Something bad happened!", error);
    //   });
  }, [token]);

  return (
    <>
      <NavBar />
      <Header />

      <div>
        {artist !== null && (
          <div>
            <ArtistMain
              key={artist.id}
              img={artist.images[0].url}
              name={artist.name}
              genre={artist.genres}
            />
          </div>
        )}
        <div className={styles.containerSlide}>
          {album !== null && (
            <div className={styles.container}>
              {album.map((albumItem) => (
                <div key={albumItem.id}>
                  <CarrouselCart
                    key={albumItem.id}
                    img={albumItem.images[0].url}
                    nameAlbum={albumItem.name}
                    nameArtist={albumItem.artists[0].name}
                    id={albumItem.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
