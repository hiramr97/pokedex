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
      });
  };

  useEffect(() => {
    getSpecies();
  }, []);

  return (
    <tr>
      <th>Species</th>
      {species.map((word) => {
        if (word.language.name === "en") {
          return <span key={word.genus}>{word.genus}</span>;
        }
      })}
    </tr>
  );
};

export default Species;
