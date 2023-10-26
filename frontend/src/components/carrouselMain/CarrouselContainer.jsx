import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CarrouselCart from "./CarrouselCart";
import styles from "./CarrouselContainer.module.css";

export default function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!token) return;

    const urlRelease = "https://api.spotify.com/v1/browse/new-releases";
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlRelease, params)
      .then((response) => response.json())
      .then((data) => setNewReleases(data.albums.items));
  }, [token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>New releases</h2>
      <div className={styles.containerCarrousel}>
        {!newReleases && <p className={styles.paraphLoading}>Loading...</p>}

        {newReleases &&
          newReleases.map((release) => (
            <CarrouselCart key={release.id} img={release.images[0].url} />
          ))}
      </div>
    </div>
  );
}
