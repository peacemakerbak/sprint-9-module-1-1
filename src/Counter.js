import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleIncrementChange = (event) => {
    setIncrement(Number(event.target.value));
  };

  const incrementCount = () => {
    setCount(count + increment);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <input
        type="number"
        value={increment}
        onChange={handleIncrementChange}
        placeholder="Enter increment value"
      />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;