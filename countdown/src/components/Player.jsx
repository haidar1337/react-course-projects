import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef();
  const [name, setName] = useState("unknown entity");

  function handleNameChange() {
    setName(inputName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
