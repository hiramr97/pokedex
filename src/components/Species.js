import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams();

  const getSpecies = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSpecies(data.genera);
        setLoading(false);
        console.log(species);
      });
  };

  useEffect(() => {
    getSpecies();
  }, []);

  console.log(species);
  return (
    <div>
      <p>Species</p>
      {species.map((word) => {
        if (word.language.name === "en") {
          return <p key={word.genus}>{word.genus}</p>;
        }
      })}
    </div>
  );
};

export default Species;
