import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import extinctData from "../../assets/json/extinct.json";
import "./Extinct.css";

function Extinct() {
  return (
    <>
      <div className="endangered-body">
        <Header />
        <div className="endangered-list">
          {extinctData.map((extinct, index) => (
            <div key={index} className="extinct-species">
              <div className="extinct-title">
                <h1>{extinct.extinctName}</h1>
              </div>
              <div className="extinct-tab">
                <div className="extinct-info">
                  <p><strong>Species Name:</strong> {extinct.extinctName}</p>
                  <p><strong>Scientific Name:</strong> {extinct.scientificName}</p>
                  <p><strong>Habitat:</strong> {extinct.habitat}</p>
                  <p><strong>Diet:</strong> {extinct.diet}</p>
                  <p><strong>Class:</strong> {extinct.class}</p>
                </div>
                <div className="extinct-picture">
                  <img src={extinct.image} alt={extinct.extinctName} />
                </div>
              </div>
              <div className="extinct-description">
                <div className="description">
                  <p>{extinct.description}</p>
                </div>
                <img src={extinct.distributionMap} alt={`Distribution of ${extinct.extinctName}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Extinct;
