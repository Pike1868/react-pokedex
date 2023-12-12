import Pokecard from "./Pokecard";

function Pokedex(props) {
  console.log(props);
  return (
    <div className="pokedexContainer">
      <h2>POKEDEX - Player {props.handIndex}</h2>
      {props.isWinner ? <p id="winner_badge">WINNER!</p> : null}
      <div className="pokedex">
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.totalExp}</h4>
    </div>
  );
}

export default Pokedex;
