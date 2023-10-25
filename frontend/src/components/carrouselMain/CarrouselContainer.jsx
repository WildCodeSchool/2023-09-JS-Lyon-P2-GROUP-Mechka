import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default async function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.spotify.com/v1/browse/new-releases";
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des nouvelles sorties"
          );
        }

        const data = await response.json();
        setNewReleases(data.albums.items);
      } catch (error) {
        console.error(error);
      }
    };

    if (token !== null) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      {newReleases.map((release) => (
        <div key={release.id}>
          {release.name}
          <img width="20%" src={release.images[0].url} alt="cover album" />
        </div>
      ))}
    </div>
  );
}
