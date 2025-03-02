import { useState } from "react";

export default function Player({ name, symbol, children, ...props }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let content = <span className="player-name">{playerName}</span>;
  if (isEditing)
    content = (
      <input onChange={handleNameChange} type="text" value={playerName} />
    );

  return (
    <li>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
