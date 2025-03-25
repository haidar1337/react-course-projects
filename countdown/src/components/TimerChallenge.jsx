import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, target }) {
  const timer = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const [hasExpired, setHasExpired] = useState(false);

  function handleStart() {
    setIsRunning(true);
    timer.current = setTimeout(() => {
      setHasExpired(true);
    }, target * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {hasExpired && <ResultModal target={target} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isRunning ? "active" : undefined}>
          {isRunning ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
