export default function Log({ gameTurns }) {
  return (
    <div id="log">
      <ol>
        {gameTurns.map((turn, i) => (
          <li
            className={i === 0 ? "highlighted" : undefined}
            key={`${turn.square.col}${turn.square.row}`}
          >
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        ))}
      </ol>
    </div>
  );
}
