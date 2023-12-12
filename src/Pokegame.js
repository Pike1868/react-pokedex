import React from "react";
import { splitArrayIntoTwo } from "./helpers";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let hands = splitArrayIntoTwo(props.pokemon);

  const expTotals = hands.map((hand) =>
    hand.reduce((acc, currPokemon) => acc + currPokemon.base_experience, 0)
  );

  const winnerIndex = expTotals[0] > expTotals[1] ? 0 : 1;

  return (
    <div className="pokegame">
      {hands.map((hand, index) => (
        <Pokedex
          key={index}
          pokemon={hand}
          handIndex={index + 1}
          totalExp={expTotals[index]}
          isWinner={index === winnerIndex}
        />
      ))}
    </div>
  );
}

export default Pokegame;
