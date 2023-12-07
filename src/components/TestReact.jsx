import React, { useState } from 'react';

const TestReact = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="count flex-1">
      <button
        className="minus h-8 w-8  bg-gradient-to-r from-cyan-500  to-blue-500 rounded-full"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        className="plus  h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default TestReact;
