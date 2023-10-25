import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (token !== null) {
      const params = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const url = "https://api.spotify.com/v1/browse/new-releases";

      fetch(url, params)
        .then((response) => response.json())
        .then((data) => setNewReleases(data));
    }
  }, [token]);

  return <div>{JSON.stringify(newReleases)}</div>;
}
