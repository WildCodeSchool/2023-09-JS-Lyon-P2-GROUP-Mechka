import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { Carousel } from "react-responsive-3d-carousel";
import { useAuth } from "../../contexts/AuthContext";
import MainShowsCart from "./MainShowsCart";
import styles from "./MainShowsContainer.module.css";

export default function MainShowsContainer() {
  const token = useAuth();
  const [newShows, setNewShows] = useState(null);

  useEffect(() => {
    if (!token) return;

    const urlRelease =
      "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ,4jaLLRDjv0OvVT3QBSuza2,4rOoJ6Egrf8K2IrywzwOMk,7xsOQzpeP5QggUY2CacpR5,0awfiXK6dqA8gi5XRZOlRK";
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
          {!newShows && <p>Loading...</p>}
          <Carousel
            className={styles.carouselDesktop}
            width="20rem"
            height="20rem"
            spread="narrow"
            interval={5000}
            depth={3}
            showStatus={false}
            showArrows={false}
          >
            {newShows &&
              newShows.map((shows) => (
                <MainShowsCart key={shows.id} img={shows.images[0].url} />
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
