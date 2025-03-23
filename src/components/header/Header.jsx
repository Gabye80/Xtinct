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
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;



// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import "./Header.css";

// function Header() {
//   let navigate = useNavigate();
//   const { i18n } = useTranslation();

//   const changeLanguage = (event) => {
//     i18n.changeLanguage(event.target.value);
//   };

//   return (
//     <>
//       <header>
//         <div className="header">
//           <img
//             className="header-logo"
//             src="../../img/logo.png"
//             onClick={() => navigate("/Home")}
//           />
//           <div className="header-routes">
//             <ul onClick={() => navigate("/endangered")}>
//               <a>Endangered</a>
//             </ul>
//             <ul onClick={() => navigate("/Extinct")}>
//               <a>Extinct</a>
//             </ul>
//             <ul onClick={() => navigate("/Conservation")}>
//               <a>Conservation</a>
//             </ul>
//           </div>

//           <select
//             onChange={changeLanguage}
//             defaultValue={i18n.language}
//             className="language-selector"
//           >
//             <option value="en">English</option>
//             <option value="fr">Français</option>
//           </select>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;
