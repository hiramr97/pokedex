const PokemomStats = (stats) => {
  return (
    <div className="px-10 w-full">
      <h1 className="font-bold text-2xl">Base Stats</h1>
      <table className="w-full">
        <tbody>
          {stats.stats.map((stat) => {
            if (stat.stat.name === "hp") {
              return (
                <tr key={stat.stat.name}>
                  <th className="text-right">HP</th>
                  <td className="w-full">
                    <div
                      style={{ width: `${stat.base_stat / 2.55}%` }}
                      className={`h-3 mx-4 my-3 rounded-md ${
                        stat.base_stat / 2.55 < 39
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      }`}
                    ></div>
                  </td>
                </tr>
              );
            }
            if (stat.stat.name === "special-attack") {
              return (
                <tr key={stat.stat.name}>
                  <th className="text-right">Sp. Atk</th>
                  <td className="w-full">
                    <div
                      style={{ width: `${stat.base_stat / 2.55}%` }}
                      className={`h-3 mx-4 my-3 rounded-md ${
                        stat.base_stat / 2.55 < 39
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      }`}
                    ></div>
                  </td>
                </tr>
              );
            }
            if (stat.stat.name === "special-defense") {
              return (
                <tr key={stat.stat.name}>
                  <th className="text-right">Sp. Def</th>
                  <td className="w-full">
                    <div
                      style={{ width: `${stat.base_stat / 2.55}%` }}
                      className={`h-3 mx-4 my-3 rounded-md ${
                        stat.base_stat / 2.55 < 39
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      }`}
                    ></div>
                  </td>
                </tr>
              );
            }
            return (
              <tr>
                <th className="text-right">
                  {stat.stat.name
                    .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
                    .replace("-", " ")}{" "}
                </th>
                <td className="w-full">
                  <div
                    style={{ width: `${stat.base_stat / 2.55}%` }}
                    className={`h-3 mx-4 my-3 rounded-md ${
                      stat.base_stat / 2.55 < 39
                        ? "bg-yellow-600"
                        : "bg-green-600"
                    }`}
                  ></div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>BST</th>
            <td>
              {stats.stats[0].base_stat +
                stats.stats[1].base_stat +
                stats.stats[2].base_stat +
                stats.stats[3].base_stat +
                stats.stats[4].base_stat +
                stats.stats[5].base_stat}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PokemomStats;
