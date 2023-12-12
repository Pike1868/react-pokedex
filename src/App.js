import "./App.css";
import Pokemon from "./PokemonList"
import Pokegame from "./Pokegame";

function App() {
  return <div className="App">
    <Pokegame pokemon={Pokemon}>
 
    </Pokegame>
  </div>;
}

export default App;
