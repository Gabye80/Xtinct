import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  let navigate = useNavigate();
  const routeEndangered = () => {
    let path = `/endangered`;
    navigate(path);
  };
  const routeExtinct = () => {
    let path = `/extinct`;
    navigate(path);
  };
  return (
    <>
      <div className="home-body">
        <Header />
        <div className="home-heading">
          <img
            className="home-logo"
            src="../../img/xtinct.png"
            alt="XTINCT LOGO"
          ></img>
          <p>
          "In every walk with nature one receives far more than he seeks." - John Muir
          </p>
          <div className="section-selector">
            <figure onClick={routeEndangered}>
              <img src="../../img/iberian_lynx.jpg" alt="Iberian Lynx"></img>
              <figcaption>Endangered</figcaption>
            </figure>
            <figure onClick={routeExtinct}> 
              <img
                src="../../img/tasmanian_tiger.jpg"
                alt="Tasmanian Tiger"
              ></img>
              <figcaption>Extinct</figcaption>
            </figure>
          </div>
        </div>
        <hr></hr>
        <h2>About our page</h2>
        <div className="home-about">
          <img
            src="../../img/kenya_rhino.jpg"
            className="about-img"
            alt="Kenyan Black Rhino"
          ></img>
          <p>
            What drives us is the love for all animals and species, and one of our objectives is to shed light on the 
            importancy of learning about and helping in the efforts to protect endangered species or restore those extinct.
            Visit our different pages to learn about some of the species in our world!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
