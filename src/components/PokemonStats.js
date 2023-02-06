const PokemomStats = (stats) => {
  console.log(stats.stats);

  return (
    <div>
      <h1>Base Stats</h1>
      {stats.stats.map((stat) => {
        console.log(stat);
        return (
          <p key={stat.stat.name}>
            {stat.stat.name} {stat.base_stat}
          </p>
        );
      })}
    </div>
  );
};

export default PokemomStats;
