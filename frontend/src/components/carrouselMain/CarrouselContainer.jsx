import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function CarrouselContainer() {
  const token = useAuth();
  const [newReleases, setNewReleases] = useState(null);

  const url = "https://api.spotify.com/v1/browse/new-releases";

  const handleFetchData = async () => {
    try {
      const params = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, params);
      const data = await response.json();
      setNewReleases(data.albums.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token !== null) {
      handleFetchData();
      // fetch(url, params)
      //   .then((response) => response.json())
      //   .then((data) => setNewReleases(data.albums.items));
    }
  }, [token]);

  return (
    <div>
      {newReleases.map((element) => {
        return <div key={element.name}>{element.name}</div>;
      })}
    </div>
  );
}
