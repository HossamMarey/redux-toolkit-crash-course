import React from "react";

export default function Counter({ handleIncrement, handleDecrement }) {
  return (
    <div className="counter">
      <button onClick={() => handleIncrement(1)}> + </button>
      <button onClick={() => handleIncrement(3)}> + 3 </button>
      <button onClick={() => handleDecrement(1)}> - </button>
    </div>
  );
}
