import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import styles from "./List.module.css";
import ArtistsList from "./ArtistsList";

export default function Search() {
  const token = useAuth();
  const [searchInput, setSearchInput] = useState(null);
  const [albums, setAlbums] = useState([]);

  async function search() {
    try {
      // Get request using search to get the Artist ID
      const searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const artistID = await fetch(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          return data.artists.items[0].id;
        });

      if (artistID !== undefined) {
        // Get resquest with Artist ID grab all the albums from the artist
        await fetch(
          `https://api.spotify.com/v1/artists/${artistID}/albums` +
            `?include_groups=album&market=US&limit=50`,
          searchParameters
        )
          .then((response) => response.json())
          .then((data) => {
            setAlbums(data.items);
          });

        // Display those albums to the user
      }
      return null;
    } catch (error) {
      console.error(`Votre erreur est ${error}`);
      return error;
    }
  }

  return (
    <>
      <NavBar />
      <Header />
      <div className={styles.searchBar}>
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              search();
            }
          }}
          className={styles.p}
          placeholder="Search For Artist"
          type="input"
          onChange={(event) => setSearchInput(event.target.value)}
          name="text"
        />
        <button className={styles.buttonSearch} type="button" onClick={search}>
          <p>Search</p>
        </button>
      </div>
      <div className={styles.albumCovers}>
        {albums.map((album) => {
          return (
            <div className={styles.albumCard} key={album.id}>
              <Link to={`/albums/${album.id}`}>
                <img
                  className={styles.imageList}
                  src={album.images[0].url}
                  alt={album.name}
                />
              </Link>
              <p className={styles.p}>{album.name}</p>
            </div>
          );
        })}
        {searchInput !== null || <ArtistsList />}
      </div>
    </>
  );
}
