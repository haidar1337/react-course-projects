import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveBoard(gameTurns) {
  let board = INITAL_GAMEBOARD.map((arr) => [...arr]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  return board;
}

function deriveWinner(board, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = board[combination[0].row][combination[0].column];
    const secondSquare = board[combination[1].row][combination[1].column];
    const thirdSquare = board[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }

  return winner;
}

function deriveCurrentPlayer(gameTurns) {
  let current = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    current = "O";
  }

  return current;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveCurrentPlayer(gameTurns);
  const board = deriveBoard(gameTurns);

  const winner = deriveWinner(board, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
  }

  function handleNameChange(symbol, name) {
    setPlayers((previous) => {
      return {
        ...previous,
        [symbol]: name,
      };
    });
  }

  function handleSelectSquare(row, col) {
    setGameTurns((previous) => {
      const currentPlayer = deriveCurrentPlayer(previous);

      const newGame = [
        { square: { row, col }, player: currentPlayer },
        ...previous,
      ];

      return newGame;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onNameChange={handleNameChange}
          ></Player>
          <Player
            name={players.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onNameChange={handleNameChange}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver onRematch={handleRematch} winner={winner}></GameOver>
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={board}
        ></GameBoard>
      </div>

      <Log gameTurns={gameTurns}></Log>
    </main>
  );
}
export default App;
