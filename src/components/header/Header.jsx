import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  let navigate = useNavigate();
  const routeEndangered = () => {
    let path = `/endangered`;
    navigate(path);
  };

  const routeHome = () => {
    let path = `/Home`;
    navigate(path);
  };

  const routeExtinct = () => {
    let path = `/Extinct`;
    navigate(path);
  };

  const routeConservation = () => {
    let path = `/Conservation`;
    navigate(path);
  };
 
  return (
    <>
      <header>
        <div className="header">
          <img className="header-logo" src="../../img/logo.png" onClick={routeHome}/>
          <div className="header-routes">
            <ul onClick={routeEndangered}>
              <a>Endangered</a>
            </ul>
            <ul onClick={routeExtinct}>
              <a>Extinct</a>
            </ul>
            <ul onClick={routeConservation}>
              <a>Conservation</a>
            </ul>
            <ul >
              <a href="/Suggestions">Suggestions</a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;