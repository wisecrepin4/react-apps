import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const countIncrease = () => {
    setCounter(counter + 1);
  };
  const countReset = () => {
    setCounter(0);
  };
  const countdecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="counter-holder">
        <p className="count">{counter}</p>
        <button onClick={countIncrease} className="increament">
          Increase
        </button>
        <button onClick={countReset} className="reset">
          Reset
        </button>
        <button onClick={countdecrease} className="decreament">
          Decrease
        </button>
      </div>
    </>
  );
}
