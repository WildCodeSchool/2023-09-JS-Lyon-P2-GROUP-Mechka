import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import { useAuth } from "../../contexts/AuthContext";
import MainShowsCart from "./MainShowsCart";
import styles from "./MainShowsContainer.module.css";

export default function MainShowsContainer() {
  const token = useAuth();
  const [newShows, setNewShows] = useState(null);

  useEffect(() => {
    if (token === null) return;

    const urlRelease =
      "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ,2ybKKK1jFijdeWal2qYNsT,4rOoJ6Egrf8K2IrywzwOMk,7xsOQzpeP5QggUY2CacpR5,0awfiXK6dqA8gi5XRZOlRK,6y1PloEyNsCNJH9vHias4T,1VXcH8QHkjRcTCEd88U3ti";
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
        setNewShows(data.shows);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, [token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Next Shows</h2>
      <div className={styles.containerSlider}>
        <div className={styles.cardPosition}>
          {newShows === null && <p>Loading...</p>}
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
            {newShows !== null &&
              newShows.map((shows) => (
                <MainShowsCart
                  id={shows.id}
                  key={shows.id}
                  img={shows.images[0].url}
                />
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
