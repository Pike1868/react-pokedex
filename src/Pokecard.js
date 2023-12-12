const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
    <div className="pokecard">
      <h3>{props.name}</h3>
      <img src={imgSrc} alt="" />
      <p>Type:{props.type}</p>
      <p>EXP: {props.exp}</p>
    </div>
  );
}

export default Pokecard;
