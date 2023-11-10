import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./ArtistsList.module.css";

export default function ArtistsList() {
  const token = useAuth();
  const [artists, setartists] = useState(null);

  useEffect(() => {
    if (token === null) return;

    const urlArtists =
      "https://api.spotify.com/v1/artists?ids=3TVXtAsR1Inumwj472S9r4,06HL4z0CvFAxyc27GXpf02,31TPClRtHm23RisEBtV3X7,1HY2Jd0NmPuamShAr6KMms,4gzpq5DPGxSnKTe4SA8HAU,23zg3TcAtWQy7J6upgbUnj,3QVolfxko2UyCOtexhVTli,5YGY8feqx7naU7z4HrwZM6,58wXmynHaAWI5hwlPZP3qL,1Xyo4u8uXC1ZmMpatF05PJ,6eUKZXaKkcviH0Ku9w2n3V,7jVv8c5Fj3E9VhNjxT4snq,6vWDO969PvNqNYHIOW5v0m,66CXWjxzNUsdJxJ2JdwvnR,0C8ZW7ezQVs4URX5aX7Kqx,4dpARuHxo51G3z768sgnrY,6W5uA6CNMf3hd2j4a2XWCx,2RJBv9wXbW6m539q9NOfW1,6olE6TJLqED3rqDCT0FyPh,0Ntl0oWMPWfBOoi9Qcr9ht,5Nq9MbzweBc5oL4WzsECx4";
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(urlArtists, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setartists(data.artists);
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, [token]);

  return (
    <div className={styles.albumCovers}>
      {artists !== null &&
        artists.map((artist) => (
          <div key={artist.id} className={styles.albumCard}>
            <img src={artist.images[0].url} alt="Artists" />
            <p className={styles.p}>{artist.name}</p>
          </div>
        ))}
    </div>
  );
}
