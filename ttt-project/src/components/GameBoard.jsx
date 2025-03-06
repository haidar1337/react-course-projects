export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, i) => (
        <ol key={i}>
          {row.map((col, idx) => (
            <li key={idx}>
              <button
                disabled={board[i][idx] !== null}
                onClick={() => onSelectSquare(i, idx)}
              >
                {col}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
