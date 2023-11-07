import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import MainShowsCart from "./MainShowsCart";
import styles from "./MainShowsContainer.module.css";

export default function MainShowsContainer() {
  const token = useAuth();
  const [newShows, setNewShows] = useState(null);

  useEffect(() => {
    if (!token) return;

    const urlRelease =
      "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ";
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlRelease, params)
      .then((response) => response.json())
      .then((data) => setNewShows(data.shows));
  }, [token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Next Shows</h2>
      <div className={styles.containerSlider}>
        <div className={styles.cardPosition}>
          {newShows &&
            newShows.map((shows) => (
              <MainShowsCart key={shows.id} img={shows.images[0].url} />
            ))}
        </div>
      </div>
    </div>
  );
}
