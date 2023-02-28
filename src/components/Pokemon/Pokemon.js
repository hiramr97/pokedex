import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemomStats from "./PokemonStats";
import LevelUpMoves from "./PokemonMoves";
import Description from "./Description";
import Species from "./Species";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

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
    <div className="flex flex-wrap items-center mx-auto w-[80%] shadow-lg shadow-slate-900 rounded-md bg-white">
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
        <table>
          <tbody>
            <tr>
              <th>National Dex No.</th>
              <td>{pokemon.id.toString().padStart(3, "0")}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>
                {pokemon.types.map((type, key) => {
                  return (
                    <span
                      key={type.type.name}
                      style={{ color: `#${TYPE_COLORS[type.type.name]}` }}
                      className="pr-2"
                    >
                      {type.type.name.replace(/^./, (str) => str.toUpperCase())}
                    </span>
                  );
                })}
              </td>
            </tr>
            <Species />
            <tr>
              <th>Weight</th>
              <td>{Math.round(pokemon.weight * 0.22)} lbs</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{Math.round(pokemon.height * 3.93)}"</td>
            </tr>
            <tr>
              <th>Abilities</th>
              <td>
                {pokemon.abilities.map((ability, key) => {
                  if (ability.is_hidden === true) {
                    return (
                      <span className="flex" key={ability.ability.name}>
                        <p className="mr-2">
                          {ability.ability.name
                            .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
                            .replace("-", " ")}
                        </p>
                        <p> (Hidden Ability)</p>
                      </span>
                    );
                  }
                  return (
                    <p key={ability.ability.name}>
                      {ability.ability.name.replace(/^./, (str) =>
                        str.toUpperCase()
                      )}
                    </p>
                  );
                })}
              </td>
            </tr>
            <tr>
              <th>Base Exp.</th>
              <td>{pokemon.base_experience}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PokemomStats stats={pokemon.stats} />
      <LevelUpMoves moves={pokemon.moves} />
      <Description />
    </div>
  );
};

export default Pokemon;
