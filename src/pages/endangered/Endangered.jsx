import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import speciesData from "../../assets/json/endangered.json";
import "./Endangered.css";

function Endangered() {
  return (
    <>
      <div className="endangered-body">
        <Header />
        <div className="endangered-list">
          {speciesData.map((species, index) => (
            <div key={index} className="endangered-species">
              <div className="species-title">
                <h1>{species.speciesName}</h1>
              </div>
              <div className="species-tab">
                <div className="species-info">
                  <p><strong>Species Name:</strong> {species.speciesName}</p>
                  <p><strong>Scientific Name:</strong> {species.scientificName}</p>
                  <p><strong>Habitat:</strong> {species.habitat}</p>
                  <p><strong>Diet:</strong> {species.diet}</p>
                  <p><strong>Class:</strong> {species.class}</p>
                </div>
                <div className="species-picture">
                  <img src={species.image} alt={species.speciesName} />
                </div>
              </div>
              <div className="species-description">
                <div className="description">
                  <p>{species.description}</p>
                </div>
                <img src={species.distributionMap} alt={`Distribution of ${species.speciesName}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Endangered;
