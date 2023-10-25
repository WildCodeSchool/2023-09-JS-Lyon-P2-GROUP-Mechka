/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from "react";

const CLIENT_ID = "3e84a082eae94ca08634cc53ced8e5ed";
const CLIENT_SECRET = "9effeea05a9e4569b8d97e7276304287";

function App() {
  // API ACCESS TOKEN
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(result => result.json())
      // eslint-disable-next-line no-restricted-syntax
      .then(data => setAccessToken(data.access_token))

  }, []);

  // SEARCH FUNCTION

  async function search() {
    console.log("Search for " + searchInput);

    // Get request using search to get the Artist ID
    const searchParameters = {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    }

    const artistID = await fetch ("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

    console.log("Artist ID is " + artistID);

    // Get resquest with Artist ID grab all the albums from the artist
    const returnedAlbums = await fetch ("https://api.spotify.com/v1/artists/" + artistID + "/albums" + "?include_groups=album&market=US&limit=50", searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.items);
    });

    // Display those albums to the user

    // Get request for new releases

    const newReleases = await fetch ("https://api.spotify.com/v1/browse/new-releases", searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewReleases(data.items);
      });

  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl 
            placeholder="Search For Artist"
            type="input"
            onKeyPress={event => {
              if (event.key == "Enter") { 
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map( (album, i) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title>{album.name}
                    </Card.Title>
                  </Card.Body>
              </Card>
            )
          })}
          </Row>
      </Container>
      {/* <Container>
        <Row className="mx-2 row row-cols-4">
          {newReleases.map( (album, i) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title>{album.name}
                    </Card.Title>
                  </Card.Body>
              </Card>
            )
          })}
        
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
