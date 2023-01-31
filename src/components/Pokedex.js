import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemon((currentList) => [...currentList, data]);
        allPokemon.sort();
      });
    }
    createPokemonObject(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  if (loading === true) return;

  return (
    <div className="flex flex-wrap justify-center items-center mx-auto">
      {allPokemon.map((actualPokemon, key) => {
        return (
          <div
            key={key}
            id={actualPokemon.id.toString().padStart(3, "0")}
            className="text-center"
          >
            <Link to={`/pokedex/${actualPokemon.name}`}>
              <img
                src={actualPokemon.sprites.front_default}
                alt={actualPokemon.name}
                title={actualPokemon.name.replace(/^./, (str) =>
                  str.toUpperCase()
                )}
              />
            </Link>
            <p>#{actualPokemon.id.toString().padStart(3, "0")}</p>
            <Link to={`/pokedex/${actualPokemon.name}`}>
              <p>
                {actualPokemon.name.replace(/^./, (str) => str.toUpperCase())}
              </p>
            </Link>
            <p>
              {actualPokemon.types[0].type.name.replace(/^./, (str) =>
                str.toUpperCase()
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokedex;
