import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CarrouselContainer from "./components/carrouselMain/CarrouselContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CarrouselContainer />
    </div>
  );
}

export default App;
