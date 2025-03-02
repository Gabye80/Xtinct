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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <h2>Who we are</h2>
        <div className="home-about">
          <img
            src="../../img/kenya_rhino.jpg"
            className="about-img"
            alt="Kenyan Black Rhino"
          ></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
