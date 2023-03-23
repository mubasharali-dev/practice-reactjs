import React, { useState } from "react";

function HookTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>IncrementFive</button>
    </div>
  );
}

export default HookTwo;
