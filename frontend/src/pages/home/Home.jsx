import NavBar from "../../components/navBar/NavBar";
import CarrouselContainer from "../../components/carrouselMain/CarrouselContainer";
import Header from "../../components/header/Header";
import ButtonRandom from "../../components/buttonRandom/ButtonRandom";
import MainShowsContainer from "../../components/mainShows/MainShowsContainer";

function Home() {
  return (
    <div>
      <Header />
      <MainShowsContainer />
      <CarrouselContainer />
      <ButtonRandom />
      <NavBar />
    </div>
  );
}

export default Home;
