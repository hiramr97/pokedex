import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemomStats from "./PokemonStats";

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
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        title={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
        alt={pokemon.name}
      />
      <img
        src={pokemon.sprites.other["official-artwork"].front_shiny}
        title={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
        alt={pokemon.name}
      />
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
              <p className="mr-2">
                {ability.ability.name.replace(/^./, (str) => str.toUpperCase())}
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
      <table>
        <tbody>
          <tr>
            <th>Lv.</th>
            <th>Move</th>
          </tr>
          {pokemon.moves.map((move, key) => {
            for (let i = 0; i < move.version_group_details.length; i++) {
              if (
                move.version_group_details[i].version_group.name ===
                  "sword-shield" &&
                move.version_group_details[i].move_learn_method.name ===
                  "level-up"
              ) {
                return (
                  <tr key={move.move.name}>
                    <td>{move.version_group_details[i].level_learned_at}</td>
                    <td>
                      {move.move.name
                        .replace("-", " ")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </td>
                  </tr>
                );
              }
            }
          })}
        </tbody>
      </table>
      <PokemomStats pokemon={pokemon}/>
    </div>
  );
};

export default Pokemon;
