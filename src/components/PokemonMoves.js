const LevelUpMoves = (moves) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Lv.</th>
          <th>Move</th>
        </tr>
        {moves.moves.map((move, key) => {
          for (let i = 0; i < move.version_group_details.length; i++) {
            if (
              move.version_group_details[i].version_group.name ===
                "scarlet-violet" &&
              move.version_group_details[i].move_learn_method.name ===
                "level-up"
            ) {
              return (
                <tr key={move.move.name}>
                  <td>{move.version_group_details[i].level_learned_at}</td>
                  <td>
                    {move.move.name
                      .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
                      .replace("-", " ")}
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

export default LevelUpMoves;
