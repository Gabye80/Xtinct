import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import XtinctService from "../../services/xtinctService"; 
import "./Endangered.css";

function Endangered() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    XtinctService.getSpeciesByType("endangered")
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Fetched Endangered Data:", data);
          setSpecies(Object.values(data));
        } else {
          console.log("No data available.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="endangered-body">
        <Header />
        <div className="endangered-list">
          {species.length > 0 ? (
            species.map((specie, index) => (
              <div key={index} className="endangered-species">
                <div className="species-title">
                  <h1>{specie.speciesName}</h1>
                </div>
                <div className="species-tab">
                  <div className="species-info">
                    <p><strong>Species Name:</strong> {specie.speciesName}</p>
                    <p><strong>Scientific Name:</strong> {specie.scientificName}</p>
                    <p><strong>Habitat:</strong> {specie.habitat}</p>
                    <p><strong>Diet:</strong> {specie.diet}</p>
                    <p><strong>Class:</strong> {specie.class}</p>
                  </div>
                  <div className="species-picture">
                    <img src={specie.image} alt={specie.speciesName} />
                  </div>
                </div>
                <div className="species-description">
                  <div className="description">
                    <p>{specie.description}</p>
                  </div>
                  <img src={specie.distributionMap} alt={`Distribution of ${specie.speciesName}`} />
                </div>
              </div>
            ))
          ) : (
            <p>Loading endangered species...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Endangered;
