import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import styles from "./Shows.module.css";

function Shows() {
  const token = useAuth();
  const [newShows, setNewShows] = useState(null);
  const idShow = useParams();
  const { isLight } = useTheme();

  useEffect(() => {
    if (token === null) return;

    const urlRelease = `https://api.spotify.com/v1/shows/${idShow.id}`;
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
        setNewShows(data);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, [token]);

  return (
    <div className={isLight ? `${styles.lightMode}` : `${styles.darkMode}`}>
      <div className={styles.containerShows}>
        {newShows !== null && (
          <div className={styles.showsPosition}>
            {newShows.images && newShows.images.length > 0 && (
              <img
                className={styles.imageContainerShows}
                src={newShows.images[0].url}
                alt="Cover show"
              />
            )}
            <h2 className={styles.showsTitle}>{newShows.name}</h2>
            <p className={styles.descriptionShows}>{newShows.description}</p>

            {newShows.episodes && newShows.episodes.items && (
              <div className={styles.positionEpisodes}>
                <h3 className={styles.episode}>Episodes :</h3>
                <ul className={styles.carouselEpisode}>
                  {newShows.episodes.items.map((episode) => (
                    <li className={styles.episodesApparence} key={episode.id}>
                      <img
                        className={styles.imageTitreShows}
                        src={newShows.images[0].url}
                        alt="Cover show"
                      />
                      <p>{episode.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <NavBar />
      <Header />
    </div>
  );
}

export default Shows;
