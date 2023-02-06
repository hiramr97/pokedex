const PokemonMoves = (pokemon) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Lv.</th>
          <th>Move</th>
        </tr>
        {pokemon.pokemon.moves.map((move, key) => {
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
  );
};

export default PokemonMoves;
