import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";

export default function Artist() {
  const token = useAuth();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if (token === null) return;

    const urlArtist =
      "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg";
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
  }, [token]);

  return (
    <>
      <NavBar />
      <Header />

      <div>
        {artist !== null && (
          <div>
            <img src={artist.images[0].url} alt="Artists" />
            <p>{artist.name}</p>
            <p>{artist.popularity}</p>
          </div>
        )}
      </div>
    </>
  );
}
