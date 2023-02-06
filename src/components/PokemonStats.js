const PokemomStats = (pokemon) => {
    console.log(pokemon)

    return(
        <div>
        <h1>Base Stats</h1>
        {pokemon.pokemon.stats.map((stat) => {
          console.log(stat)
          return(
            <p>{stat.stat.name} {stat.base_stat}</p>
            
          )
        })}
      </div>
    )

}

export default PokemomStats