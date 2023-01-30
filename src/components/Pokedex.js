import { useEffect, useState } from "react";

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const getAllPokemon = async () => {
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
        allPokemon.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div>
      {allPokemon.map((actualPokemon, key) => {
        return (
          <div key={key} id={actualPokemon.id.toString().padStart(3, "0")}>
            <img
              src={actualPokemon.sprites.front_default}
              alt={actualPokemon.name}
              title={actualPokemon.name.replace(/^./, (str) =>
                str.toUpperCase()
              )}
            />
            <p>#{actualPokemon.id.toString().padStart(3, "0")}</p>
            <p>
              {actualPokemon.name.replace(/^./, (str) => str.toUpperCase())}
            </p>
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
