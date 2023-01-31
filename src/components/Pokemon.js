import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const id = useParams();

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`);
    const data = await res.json();
    setPokemon(data);
    console.log(pokemon);
  };

  useEffect(() => {
    getPokemon();
  }, []);


  return <div></div>;
};

export default Pokemon;
