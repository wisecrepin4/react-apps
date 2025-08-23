import { useState, useEffect, useRef } from "react";
export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const startTime = useRef(0);
  const countTime = useRef(null);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    if (isRunning) {
      countTime.current = setInterval(() => {
        setTimeSpent(Date.now() - startTime.current);
      }, 10);
    }
    return () => {
      clearInterval(countTime.current);
    };
  }, [isRunning]);

  function formatTime() {
    let hours = Math.floor(timeSpent / (1000 * 60 * 60));
    let minutes = Math.floor((timeSpent / (1000 * 60)) % 60);
    let seconds = Math.floor((timeSpent / 1000) % 60);
    let millisecond = Math.floor((timeSpent / 10) % 100);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    millisecond = String(millisecond).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${millisecond}`;
  }

  function start() {
    setIsRunning(true);
    startTime.current = Date.now() - timeSpent;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setTimeSpent(0);
    setIsRunning(false);
  }
  return (
    <div className="stop-watch-holder">
      <div className="stop-watch">
        <span className="countings">{formatTime()}</span>
      </div>
      <div className="controls">
        <button onClick={start} className="start">
          Start
        </button>
        <button onClick={stop} className="stop">
          Stop
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}
