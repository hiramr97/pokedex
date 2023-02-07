import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams();

  const getDescription = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.flavor_text_entries);
        setLoading(false);
      });
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <div>
      {description.map((text) => {
        if (text.language.name === "en") {
          console.log(text);
          return (
            <div>
              <p>
                {text.version.name.replace(/(^\w|-\w)/g, (str) =>
                  str.toUpperCase()
                )}
              </p>
              <p>{text.flavor_text.replace('\f', ' ')}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Description;
