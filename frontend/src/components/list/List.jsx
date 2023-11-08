import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import styles from "./List.module.css";
import ArtistsList from "./ArtistsList";

export default function Search() {
  const token = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  async function search() {
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
        />
        <button className={styles.button} type="button" onClick={search}>
          Search
        </button>
      </div>
      <div className={styles.albumCovers}>
        {albums.map((album) => {
          return (
            <div className={styles.albumCard} key={album.id}>
              <img
                className={styles.imageList}
                src={album.images[0].url}
                alt="Cover album"
              />
              <p className={styles.p}>{album.name}</p>
            </div>
          );
        })}
        {searchInput || <ArtistsList />}
      </div>
    </>
  );
}
