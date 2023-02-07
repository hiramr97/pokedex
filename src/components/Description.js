import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = (pokemon) => {
    const [description, setDescription] = useState([])
    const [loading, setLoading] = useState(true);
  const id = useParams();
  console.log(id.id);

  const getDescription = () => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.flavor_text_entries);
        setLoading(false)
      });
  };

  useEffect(() => {
    getDescription()
  }, [])

  console.log(description)
  return(
    <div>
        {description.map((text) => {
            if(text.version.name === 'sword' && text.language.name === 'en') {
                console.log(text.flavor_text)
                return( 
                    <p>{text.flavor_text}</p>
                )
            }
        })}
    </div>
  )
};

export default Description;
