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

  console.log(pokemon);

  return (
    <div>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <img src={pokemon.sprites.other["official-artwork"].front_shiny} />
      <p>{pokemon.name.replace(/^./, (str) => str.toUpperCase())}</p>
      <p>National Dex No. {pokemon.id.toString().padStart(3, "0")}</p>
      <p>Base Exp. {pokemon.base_experience}</p>
      <p>Type</p>
      {pokemon.types.map((type, key) => {
        return (
          <p key={type.type.name}>
            {type.type.name.replace(/^./, (str) => str.toUpperCase())}
          </p>
        );
      })}
      <p>Weight: {Math.round(pokemon.weight * 0.22)} lbs</p>
      <p>Height: {Math.round(pokemon.height * 3.93)}"</p>
      <p>Abilities</p>
      {pokemon.abilities.map((ability, key) => {
        if (ability.is_hidden === true) {
          return (
            <div className="flex" key={ability.ability.name}>
              <p className="mr-2">{ability.ability.name.replace(/^./, (str) => str.toUpperCase())}</p>
              <p> (Hidden Ability)</p>
            </div>
          );
        }
        return (
          <p key={ability.ability.name}>
            {ability.ability.name.replace(/^./, (str) => str.toUpperCase())}
          </p>
        );
      })}
    </div>
  );
};

export default Pokemon;
