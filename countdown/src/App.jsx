import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" target={1} />
        <TimerChallenge title="Medium" target={5} />
        <TimerChallenge title="Hard" target={10} />
        <TimerChallenge title="Extreme" target={15} />
      </div>
    </>
  );
}

export default App;
