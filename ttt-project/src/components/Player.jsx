import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
