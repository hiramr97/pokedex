const PokemomStats = (stats) => {
  return (
    <div>
      <h1>Base Stats</h1>
      {stats.stats.map((stat) => {
        if (stat.stat.name === "hp") {
          return (
            <div key={stat.stat.name}>
              <p>HP</p>
              <p>{stat.base_stat}</p>
              <div className="h-3 w-full bg-white">
                <div
                  style={{ width: `${stat.base_stat / 2.55}%` }}
                  className={`h-full rounded-sm ${
                    stat.base_stat / 2.55 < 39
                      ? "bg-yellow-600"
                      : "bg-green-600"
                  }`}
                ></div>
              </div>
            </div>
          );
        }
        return (
          <div key={stat.stat.name}>
            <p>
              {stat.stat.name
                .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
                .replace("-", " ")}{" "}
            </p>
            <p>{stat.base_stat}</p>
            <div className="h-3 w-full bg-white">
              <div
                style={{ width: `${stat.base_stat / 2.55}%` }}
                className={`h-full rounded-sm ${
                  stat.base_stat / 2.55 < 39 ? "bg-yellow-600" : "bg-green-600"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemomStats;
