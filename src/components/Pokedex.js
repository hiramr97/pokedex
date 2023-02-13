import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '6F4E37',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPokemon = async () => {
    setLoading(true);
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=905&offset=0"
    );

    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    allPokemon.sort((a, b) => a.id - b.id);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  if (loading === true) return;

  allPokemon.sort((a, b) => a.id - b.id);

  return (
    <div className="flex flex-wrap justify-evenly text-center mx-auto w-[80%] shadow-lg shadow-black rounded-md bg-white">
      {allPokemon.map((actualPokemon, key) => {
        return (
          <div
            key={key}
            id={actualPokemon.id.toString().padStart(3, "0")}
            className="text-center mx-auto my-2"
          >
            <Link to={`/pokedex/${actualPokemon.name}`}>
              <img
                src={actualPokemon.sprites.front_default}
                alt={actualPokemon.name}
                title={actualPokemon.name.replace(/^./, (str) =>
                  str.toUpperCase()
                )}
                className="mx-auto"
              />
            </Link>
            <p>#{actualPokemon.id.toString().padStart(3, "0")}</p>
            <Link to={`/pokedex/${actualPokemon.name}`}>
              <p className="mx-auto">
                {actualPokemon.name.replace(/(^\w|-\w)/g, (str) => str.toUpperCase())}
              </p>
            </Link>
            <div className="flex mx-auto w-28">
              {actualPokemon.types.map((type, key) => {
                return (
                  <p key={type.type.name} className="mx-auto" style={{ color: `#${TYPE_COLORS[type.type.name]}` }}>
                    {type.type.name.replace(/^./, (str) => str.toUpperCase())}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokedex;
