import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CarrouselCart from "./CarrouselCart";
import styles from "./CarrouselContainer.module.css";

export default function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState(null);

  useEffect(() => {
    if (token === null) return;

    const urlRelease = "https://api.spotify.com/v1/browse/new-releases";
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlRelease, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setNewReleases(data.albums.items);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, [token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>New releases</h2>
      <div className={styles.containerCarrousel}>
        {newReleases !== null &&
          newReleases.map((release) => (
            <CarrouselCart
              key={release.id}
              img={release.images[0].url}
              nameAlbum={release.name}
              nameArtist={release.artists[0].name}
              id={release.id}
            />
          ))}
      </div>
    </div>
  );
}
