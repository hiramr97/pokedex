import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemomStats from "./PokemonStats";
import LevelUpMoves from "./PokemonMoves";
import Description from "./Description";
import Species from "./Species";

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

  return (
    <div className="flex flex-wrap items-center mx-auto w-[80%]">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        title={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
        alt={pokemon.name}
      />
      <img
        src={pokemon.sprites.other["official-artwork"].front_shiny}
        title={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
        alt={pokemon.name}
        className="hidden"
      />
      <div>
        <h1 className="font-bold text-2xl">Pokémon Data</h1>
        <p>{pokemon.name.replace(/^./, (str) => str.toUpperCase())}</p>
        <p>National Dex No. {pokemon.id.toString().padStart(3, "0")}</p>
        <Species />
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
                <p className="mr-2">
                  {ability.ability.name.replace(/^./, (str) =>
                    str.toUpperCase()
                  )}
                </p>
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
        <p>Base Exp. {pokemon.base_experience}</p>
      </div>
      <PokemomStats stats={pokemon.stats} />
      <LevelUpMoves moves={pokemon.moves} />
      <Description />
    </div>
  );
};

export default Pokemon;
