import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const id = useParams();

  const getPokemon = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading === true) return;

  console.log(pokemon.types);

  return (
    <div>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <img src={pokemon.sprites.other["official-artwork"].front_shiny} />
      <p>{pokemon.name.replace(/^./, (str) => str.toUpperCase())}</p>
      <p>National Dex No. {pokemon.id.toString().padStart(3, "0")}</p>
      <p>Base Exp. {pokemon.base_experience}</p>
      {pokemon.types.map((type, key) => {
        console.log(type.type.name)
        return(
          <p key={type.type.name}>{type.type.name.replace(/^./, (str) => str.toUpperCase())}</p>
        )
      })}
      <p>Weight: {Math.round(pokemon.weight * 0.22)} lbs</p>
      <p>Height: {Math.round(pokemon.height * 3.93)}"</p>
    </div>
  );
};

export default Pokemon;
