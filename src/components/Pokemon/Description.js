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
    <div className="w-full">
      <h1 className="font-bold text-2xl">Pokédex Entries</h1>
      <table>
        <tbody>
          {description.map((text) => {
            if (text.language.name === "en") {
              return (
                <tr>
                  <th className="font-normal">
                    {text.version.name
                      .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
                      .replace("-", " ").replace("-", " ")}
                  </th>
                  <td>{text.flavor_text.replace("\f", " ").replace("-", " ")}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Description;
