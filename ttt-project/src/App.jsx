import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <React.StrictMode>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Sizo" symbol="O"></Player>
            <Player name="KIJ" symbol="X"></Player>
          </ol>
          <GameBoard></GameBoard>
        </div>
      </main>
    </React.StrictMode>
  );
}

export default App;
