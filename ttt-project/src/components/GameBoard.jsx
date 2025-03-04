import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ children, ...props }) {
  const [placement, setPlacement] = useState(initialBoard);

  function handlePlacement(row, col, player) {
    setPlacement((placement) => {
      const newPlacement = placement.map((row) => [...row]);
      newPlacement[row][col] = player;
      return newPlacement;
    });
  }

  return (
    <ol id="game-board">
      {placement.map((row, i) => (
        <ol key={i}>
          {row.map((col, idx) => (
            <li key={idx}>
              <button onClick={() => handlePlacement(i, idx, "X")}>
                {col}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
