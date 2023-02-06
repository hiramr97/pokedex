const PokemomStats = (stats) => {
  return (
    <div>
      <h1>Base Stats</h1>
      {stats.stats.map((stat) => {
        if (stat.stat.name === "hp") {
          return <p key={stat.stat.name}>HP {stat.base_stat}</p>;
        }
        return (
          <p key={stat.stat.name}>
            {stat.stat.name
              .replace(/(^\w|-\w)/g, (str) => str.toUpperCase())
              .replace("-", " ")}{" "}
            {stat.base_stat}
          </p>
        );
      })}
    </div>
  );
};

export default PokemomStats;
