import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import ArtistMain from "./ArtistMain";

export default function Artist() {
  const token = useAuth();
  const [artist, setArtist] = useState(null);
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
            >
              <p>{artist.popularity}</p>
            </ArtistMain>
          </div>
        )}
      </div>
    </>
  );
}
