import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Sizo" symbol="O"></Player>
          <Player name="KIJ" symbol="X"></Player>
        </ol>
      </div>
    </main>
  );
}

export default App;
