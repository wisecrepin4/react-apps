import { useState, useEffect, useRef } from "react";
export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);

  const 

  function formatTime() {
    return `00:00:00`;
  }

  function start() {}
  function stop() {}
  function reset() {
    //setIsRunning(!isRunning);
  }
  return (
    <div className="stop-watch-holder">
      <div className="stop-watch">
        <span className="countings">{formatTime()}</span>
      </div>
      <div className="controls">
        <button onClick={start()} className="start">
          Start
        </button>
        <button onClick={stop()} className="stop">
          Stop
        </button>
        <button onClick={reset()} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}
