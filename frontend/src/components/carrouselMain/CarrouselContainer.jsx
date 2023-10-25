import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default async function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState(null);

  useEffect(() => {
    if (token !== null) {
      const params = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const url = "https://api.spotify.com/v1/browse/new-releases";

      fetch(url, params)
        .then((response) => response.json())
        .then((data) => setNewReleases(data.albums.items));
    }
  }, [token]);

  return <div>{JSON.stringify(newReleases)}</div>;
}
